<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import xSvg from '$lib/assets/images/x.svg';
	import GithubButton from './GithubButton.svelte';
	export let title: string;
	export let discription = '';
	export let fakeFileName = '';
	export let img = '';
	export let activated: boolean;
	export let cardType: 'small' | 'full';
	let cardState: 'minimized' | 'maximized' = 'maximized';
	export let clientHeight = 0;

	interface Params {
		duration: number;
	}
	function increaseHeight(node: any, { duration }: Params) {
		return {
			duration,
			css: (t: number) => {
				return `height: ${t}`;
			}
		};
	}
	function toggleCardState() {
		if (cardState == 'minimized') {
			cardState = 'maximized';
		} else if (cardState == 'maximized') {
			cardState = 'minimized';
		}
	}
</script>

<div class="card">
	<div class="dot" class:activated />
	<div class="line" />
	<article bind:clientHeight>
		{#if cardType == 'full' && cardState == 'maximized'}
			<div class="header" transition:slide>
				<a on:click={() => toggleCardState()}>
					<img class="x" src={xSvg} alt="x" />
				</a>
				<h3>{title}</h3>
			</div>
			<div class="main" transition:slide>
				<h5 class="command">
					[twan@arch]$ head {fakeFileName}.md
				</h5>
				<div class="horizontal">
					<h5 class="out" style="width: {img !== '' ? 50 : 100}%">{discription}</h5>
					{#if img !== ''}
						<div class="projectImg" style="background-image: url({img})" />
					{/if}
				</div>
				<div class="footer">
					<h4 class="date">// 01 jan 1960</h4>
					<GithubButton url="https://github.com/Twan-Reijinga" />
				</div>
			</div>
		{:else if cardType == 'small' || cardState == 'minimized'}
			<div
				class="header minimized"
				on:click={() => toggleCardState()}
				in:slide
				out:fade={{ duration: 50 }}
			>
				<h4 class="date">// 01 jan 1960</h4>
				<h3>{title}</h3>
			</div>
		{/if}
	</article>
</div>

<style>
	.card {
		display: flex;
		flex-direction: row-reverse;
	}
	article {
		width: 100%;
		max-width: 750px;
		background-color: #121e28;
		border: 2px solid #fff;
		margin-top: 1vh;
		padding: 0.5vh 2.5%;
	}
	.horizontal {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
	.projectImg {
		width: 50%;
		background-size: contain;
		background-repeat: no-repeat;
		margin-left: 20px;
	}

	.line {
		position: absolute;
		margin-top: calc(1.5vh + 15px);
		margin-right: calc(-1.2% - 1.25vh - 3px);
		width: calc(1.2% + 1.25vh + 3px);
		height: 2px;
		background-color: #fff;
	}
	.dot {
		position: absolute;
		border-radius: 50%;
		width: 1.5vh;
		height: 1.5vh;
		background-color: #162632;
		box-shadow: inset 0 0 0 0.3vh #06cb79;
		margin-top: calc(1vh + 14px);
		margin-right: calc(-1.2% - 1.25vh - 0.75vh - 3px);
		z-index: 2;
	}
	.activated {
		background-color: #06cb79;
	}

	.header {
		display: flex;
		align-items: center;
		padding: 0.25vh 1%;
		border-bottom: 2px solid #fff;
	}
	.minimized {
		border: none;
	}
	.minimized h3 {
		text-align: right;
	}

	.main {
		padding: 5%;
	}
	.x {
		height: 20px;
		filter: invert(100%);
	}
	h3 {
		text-align: center;
		white-space: nowrap;
		/* width: 100%; */
	}
	.out {
		color: #06cb79;
		min-width: 200px;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		align-items: center;
		padding-top: 20px;
	}
	.date {
		white-space: nowrap;
	}
</style>
