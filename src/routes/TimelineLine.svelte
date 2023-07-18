<script lang="ts">
	export let fontSize: number;
	let y: number;
	let h: number;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="center">
	{#if y > h * 1.25 && y < h * 2.5}
		<span class="dot" style="margin-top: {fontSize - h * 0.0075 + y - h * 1.25}px" />
	{/if}
	<span class="circle" style="margin-top: {fontSize - h * 0.0125}px" />
	<div class="line" />
	<span class="circle" />
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		padding: 0 3%;
	}
	.line {
		position: relative;
		width: 10%;
		min-width: 2px;
		height: 100vh;
		background-color: #fff;
		margin: 0 45%;
	}
	.circle {
		border: 0.5vh solid #06cb79;
		background-color: #162632;
		border-radius: 50%;
		width: 2.5vh;
		height: 2.5vh;
		z-index: 1;
	}
	.dot {
		background-color: #fff;
		position: absolute;
		margin: 0 0.75vh;
		padding: 0.5vh;
		border-radius: 50%;
	}
</style>
