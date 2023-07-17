<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	let y: number;
	let w: number;
	let h: number;
	let worldSize = 3;
	let worldPos = 35;
	let moonSize = 3;
	let moonPos = 35;
	let loaded = false;
	onMount(() => (loaded = true));
	afterUpdate(() => {
		({ size: worldSize, pos: worldPos } = calculateAnimation(y / h + 0.75));
		({ size: moonSize, pos: moonPos } = calculateAnimation(y / h));
	});

	function calculateAnimation(t: number) {
		let size = 2 * Math.pow(30, t);
		let pos = Math.pow(t * 2, 8) * 0.5;
		return { size, pos };
	}
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={w} bind:innerHeight={h} />
{#if loaded}
	<div
		class="world"
		style="width: {worldSize}%; height: {worldSize}%; 
		       margin: {35 + worldPos}vh 0 0 {55 + worldPos}%;"
		in:fade={{ delay: 2500 }}
	/>
	<div
		class="moon"
		style="width: {moonSize}%; height: {moonSize}%; 
		       margin: {35 + moonPos}vh 0 0 {55 + moonPos}%;"
		in:fade={{ delay: 2650 }}
	/>
{/if}

<style>
	.world,
	.moon {
		position: fixed;
		display: block;
		background-size: contain;
		background-repeat: no-repeat;
		z-index: -1;
	}
	.world {
		background-image: url('$lib/assets/images/world.gif');
		/* width: 25%; */
		/* height: 25%; */
		/* margin: 50vh 0 0 65%; */
	}
	.moon {
		background-image: url('$lib/assets/images/moon.gif');
		/* width: 5%;
		height: 5%;
		margin: 35vh 0 0 55%; */
	}
</style>
