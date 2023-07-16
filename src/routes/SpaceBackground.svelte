<script lang="ts">
	import SpaceObjects from './SpaceObjects.svelte';
	import FadeIn from './FadeIn.svelte';
	interface Dot {
		size: 'small' | 'medium' | 'large';
		x: number;
		y: number;
	}
	interface Circle {
		size: 'small' | 'medium';
		x: number;
		y: number;
	}
	type HalfCircle = Circle & {
		rotation: number;
	};

	let dots: Dot[] = [
		{ size: 'medium', x: 10, y: 20 },
		{ size: 'small', x: 25, y: 12 },
		{ size: 'medium', x: 38, y: 16 },
		{ size: 'large', x: 55, y: 20 },
		{ size: 'small', x: 62, y: 42 },
		{ size: 'medium', x: 85, y: 38 },
		{ size: 'small', x: 88, y: 12 },
		{ size: 'small', x: 90, y: 60 },
		{ size: 'small', x: 60, y: 70 },
		{ size: 'medium', x: 90, y: 85 },
		{ size: 'medium', x: 80, y: 90 },
		{ size: 'large', x: 42, y: 75 },
		{ size: 'medium', x: 30, y: 85 },
		{ size: 'small', x: 20, y: 88 },
		{ size: 'small', x: 12, y: 68 }
	];
	let circles: Circle[] = [
		{ size: 'medium', x: 6, y: 28 },
		{ size: 'small', x: 45, y: 18 }
	];
	let halfCircles: HalfCircle[] = [
		{ size: 'medium', x: 25, y: 70, rotation: 80 },
		{ size: 'small', x: 65, y: 85, rotation: 0 }
	];
</script>

<div class="dots">
	{#each dots as dot, i}
		<FadeIn delay={100} duraction={500}>
			<span class={dot.size} style="margin: {dot.y}vh 0 0 {dot.x}%" />
		</FadeIn>
	{/each}
</div>
<div class="circles">
	{#each circles as circle, i}
		<span class={circle.size} style="margin: {circle.y}vh 0 0 {circle.x}%;" />
	{/each}
</div>
<div class="halfCircles">
	{#each halfCircles as halfCircle, i}
		<span
			class={halfCircle.size}
			style="margin: {halfCircle.y}vh 0 0 {halfCircle.x}%; transform: rotate({halfCircle.rotation}deg);"
		/>
	{/each}
</div>
<SpaceObjects />

<style>
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
</style>
