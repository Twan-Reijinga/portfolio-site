<script lang="ts">
	export let height: number;
	export let minH: number;
	export let maxH: number;
	let y: number;
	let h: number;

	
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="center">
	{#if y > minH && y < maxH}
		<span class="dot" style="margin-top: {y - h * 1.25}px" />
	{/if}
	<span class="circle" style="margin-top: 5px" />
	<div class="line" style="height: {height}px" />
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
		width: 2px;
		background-color: #fff;
		margin: 0 50%;
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
		margin: 0 0.76vh;
		padding: 0.5vh;
		border-radius: 50%;
	}
</style>
