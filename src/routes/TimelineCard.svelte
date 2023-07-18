<script lang="ts">
	export let title: string;
	export let discription: string;
	export let fakeFileName: string;
	export let activated: boolean;
	import xSvg from '$lib/assets/images/x.svg';
	import GithubButton from './GithubButton.svelte';
</script>

<div class="card">
	<div class="dot" class:activated />
	<div class="line" />
	<article>
		<div class="header">
			<img class="x" src={xSvg} alt="x" />
			<h3>{title}</h3>
		</div>
		<div class="main">
			<h5 class="command">
				[twan@arch]$ head {fakeFileName}.md
			</h5>
			<h5 class="out">{discription}</h5>
			<div class="footer">
				<h4 class="date">// 01 jan 1960</h4>
				<GithubButton url="https://github.com/Twan-Reijinga" />
			</div>
		</div>
	</article>
</div>

<style>
	.card {
		display: flex;
		flex-direction: row-reverse;
	}
	article {
		width: 100%;
		max-width: 500px;
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
	.main {
		padding: 5%;
	}
	img {
		filter: invert(100%);
	}
	h3 {
		text-align: center;
		width: 100%;
	}
	.out {
		margin-top: 15px;
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
