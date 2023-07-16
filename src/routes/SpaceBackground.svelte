<script lang="ts">
	import { onMount } from 'svelte';
	import SpaceObjects from './SpaceObjects.svelte';

	let loaded = false;
	onMount(() => (loaded = true));

	interface Dot {
		size: 'small' | 'medium' | 'large';
		x: number;
		y: number;
		duration: number;
	}
	type Circle = Dot & {
		size: 'small' | 'medium';
	};
	type HalfCircle = Circle & {
		rotation: number;
		duration: number;
	};

	let dots: Dot[] = [
		{ size: 'medium', x: 10, y: 20, duration: 2.4 },
		{ size: 'small', x: 25, y: 12, duration: 2.8 },
		{ size: 'medium', x: 38, y: 16, duration: 3.5 },
		{ size: 'large', x: 55, y: 20, duration: 3.1 },
		{ size: 'small', x: 62, y: 42, duration: 2.9 },
		{ size: 'medium', x: 85, y: 38, duration: 2.5 },
		{ size: 'small', x: 88, y: 12, duration: 3.2 },
		{ size: 'small', x: 90, y: 60, duration: 2.5 },
		{ size: 'small', x: 60, y: 70, duration: 2.2 },
		{ size: 'medium', x: 90, y: 85, duration: 1.6 },
		{ size: 'medium', x: 80, y: 90, duration: 1.3 },
		{ size: 'large', x: 42, y: 75, duration: 1.9 },
		{ size: 'medium', x: 30, y: 85, duration: 1.5 },
		{ size: 'small', x: 20, y: 88, duration: 1.2 },
		{ size: 'small', x: 12, y: 68, duration: 1.8 }
	];
	let circles: Circle[] = [
		{ size: 'medium', x: 6, y: 28, duration: 2 },
		{ size: 'small', x: 45, y: 18, duration: 3.9 }
	];
	let halfCircles: HalfCircle[] = [
		{ size: 'medium', x: 25, y: 70, rotation: 80, duration: 3 },
		{ size: 'small', x: 65, y: 85, rotation: 0, duration: 2.5 }
	];
</script>

{#if loaded}
	<div class="dots">
		{#each dots as dot, i}
			<span
				class={dot.size}
				id={'dot' + i}
				style="margin: {dot.y}vh 0 0 {dot.x}%; animation-duration: {dot.duration}s"
			/>
		{/each}
	</div>
	<div class="circles">
		{#each circles as circle, i}
			<span
				class={circle.size}
				style="margin: {circle.y}vh 0 0 {circle.x}%; animation-duration: {circle.duration}s"
			/>
		{/each}
	</div>
	<div class="halfCircles">
		{#each halfCircles as halfCircle, i}
			<span
				class={halfCircle.size}
				style="margin: {halfCircle.y}vh 0 0 {halfCircle.x}%; transform: rotate({halfCircle.rotation}deg); animation-duration: {halfCircle.duration}s"
			/>
		{/each}
	</div>
{/if}
<SpaceObjects />

<style>
	.dots *,
	.circles *,
	.halfCircles * {
		animation: shapes 1;
	}

	.dots * {
		background-color: #fff;
	}
	.dots .small {
		padding: 0.3vh 0.3vh 0 0;
	}
	.dots .medium {
		padding: 0.6vh 0.6vh 0 0;
	}
	.dots .large {
		padding: 0.9vh 0.9vh 0 0;
	}

	.circles .small {
		border: 0.6em solid #06cb79;
		width: 3em;
		height: 3em;
	}
	.circles .medium {
		border: 0.8em solid #06cb79;
		width: 4em;
		height: 4em;
	}

	.halfCircles * {
		background-image: url('$lib/assets/images/halfCircle.svg');
	}
	.halfCircles .small {
		width: 3em;
		height: 3em;
	}
	.halfCircles .medium {
		width: 4em;
		height: 4em;
	}

	.small,
	.medium,
	.large {
		position: fixed;
		z-index: -1;
		border-radius: 50%;
	}

	@keyframes shapes {
		0% {
			top: -100vh;
			transform: rotate(1080deg);
		}
		85% {
			top: 0vh;
		}
	}
</style>
