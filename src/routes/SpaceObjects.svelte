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
		console.log(y / h);
		({ size: worldSize, pos: worldPos } = calculateAnimation(y / h + 0.75));
		({ size: moonSize, pos: moonPos } = calculateAnimation(y / h));
		// worldSize = 25 + (y * y) / (h * 3);
		// worldPos = (y * y) / (h * 3);
		// ({
		// 	size: worldSize,
		// 	x: worldX,
		// 	y: worldY
		// } = calculateAnimation(y / h, w, h, w * 0.55, h * 0.3, 5, 1000, 0.5));
		// ({
		// 	size: moonSize,
		// 	x: moonX,
		// 	y: moonY
		// } = calculateAnimation(y / h, w, h, w * 0.55, h * 0.3, 5, 1000, 0.5));
	});

	function calculateAnimation(t: number) {
		let size = 2 * Math.pow(30, t);
		let pos = Math.pow(t * 2, 8) * 0.5;
		return { size, pos };
	}

	// function calculateAnimation(
	// 	t: number,
	// 	w: number,
	// 	h: number,
	// 	x: number,
	// 	y: number,
	// 	size: number,
	// 	scale: number,
	// 	speed: number
	// ) {
	// 	// Adjust the object's size based on its distance from the viewer
	// 	let objectSize = size * Math.pow(scale, t);

	// 	// Adjust the object's position to make it appear like it's moving towards the bottom right
	// 	let objectDistance = t * Math.sqrt((w - x) ** 2 + (h - y) ** 2); // Non-linear distance transformation
	// 	// let objectX = x + speed * 2 * objectDistance * Math.cos((t * Math.PI) / 4); // Non-linear x-position transformation
	// 	// let objectY = y + speed * objectDistance * Math.sin((t * Math.PI) / 4); // Non-linear y-position transformation
	// 	let objectX = x - objectSize + (objectDistance * (w - x)) / 2000 + speed * t * (w - x); // Non-linear x-position transformation
	// 	let objectY = y - objectSize + (objectDistance * (h - y)) / 2000 + speed * t * (h - y);

	// 	return {
	// 		size: objectSize,
	// 		x: objectX,
	// 		y: objectY
	// 	};
	// }

	// 2500
	//2650
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={w} bind:innerHeight={h} />
{#if loaded}
	<div
		class="world"
		style="width: {worldSize}%; height: {worldSize}%; 
		       margin: {35 + worldPos}vh 0 0 {55 + worldPos}%;"
		in:fade={{ delay: 0 }}
	/>
	<div
		class="moon"
		style="width: {moonSize}%; height: {moonSize}%; 
		       margin: {35 + moonPos}vh 0 0 {55 + moonPos}%;"
		in:fade={{ delay: 0 }}
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
