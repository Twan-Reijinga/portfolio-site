<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	let y: number;
	let h: number;
	let worldSize = 25;
	let worldPos = 50;
	let moonSize = 3;
	let moonPos = 35;
	let loaded = false;
	onMount(() => (loaded = true));
	afterUpdate(() => {
		console.log(y);
		worldSize = 25 + (y * y) / (h * 3);
		worldPos = 50 + (y * y) / (h * 3);
		moonSize = 3 + (y * y) / (h * 20);
		moonPos = (y * y) / (h * 10);
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
{#if loaded}
	<div
		class="world"
		style="width: {worldSize}%; height: {worldSize}%; 
		       margin: {worldPos}vh 0 0 {15 + worldPos}%;
			   display: {y > h ? 'none' : 'block'}"
		in:fade={{ delay: 2500 }}
	/>
	<div
		class="moon"
		style="width: {moonSize}%; height: {moonSize}%; 
		       margin: {35 + moonPos}vh 0 0 {55 + moonPos / 2}%;
			   display: {y > h ? 'none' : 'block'}"
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
