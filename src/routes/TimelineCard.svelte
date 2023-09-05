<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import xSvg from '$lib/assets/images/x.svg';
	import GithubButton from './GithubButton.svelte';
	export let title: string;
	export let date: string;
	export let discription = '';
	export let fakeFileName = '';
	export let img = '';
	export let url: string;
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
				<button class="x" on:click={() => toggleCardState()} />
				<h3>{title}</h3>
			</div>
			<div class="main" transition:slide>
				<h5 class="command">
					[twan@arch]$ head {fakeFileName}.md
				</h5>
				<div class="grid">
					<h5 class="out">{discription}</h5>
					{#if img !== ''}
						<div class="projectImg" style="background-image: url({img})" />
						<!-- <img class="projectImg" src={img} alt="project" /> -->
					{/if}
				</div>
				<div class="footer">
					<h4 class="date">// {date}</h4>
					{#if url !== 'none'}
						<GithubButton url="https://{url}" />
					{/if}
				</div>
			</div>
		{:else if cardType == 'small' || cardState == 'minimized'}
			<div
				class="header minimized"
				on:click={() => toggleCardState()}
				in:slide
				out:fade={{ duration: 50 }}
			>
				<h4 class="date">// {date}</h4>
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
		max-width: 900px;
		background-color: #121e28;
		border: 2px solid #fff;
		margin-top: 1vh;
		padding: 0.5vh 2.5%;
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
		width: 20px;
		height: 20px;
		background-image: url('$lib/assets/images/x.svg');
		background-position: center center;
		background-size: contain;
		filter: invert(100%);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 30px;
		margin-top: 15px;
	}
	.projectImg {
		min-width: 90px;
		min-height: 100px;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		width: 100%;
	}
	h3 {
		text-align: center;
		width: 100%;
	}
	.out {
		color: #06cb79;
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
