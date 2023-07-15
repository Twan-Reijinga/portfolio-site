<script lang="ts">
	interface dotInterface {
		size: 'small' | 'medium' | 'large';
		x: number;
		y: number;
	}
	let dots: dotInterface[] = [
		{ size: 'medium', x: 10, y: 20 },
		{ size: 'small', x: 25, y: 12 },
		{ size: 'medium', x: 38, y: 16 },
		{ size: 'large', x: 55, y: 20 },
		{ size: 'small', x: 62, y: 42 },
		{ size: 'small', x: 85, y: 38 },
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
</script>

<div>
	{#each dots as dot, i}
		<span class={dot.size} style="margin: {dot.y}vh 0 0 {dot.x}%" />
	{/each}
</div>

<style>
	.small {
		padding: 0.3vh 0.3vh 0 0;
	}
	.medium {
		padding: 0.6vh 0.6vh 0 0;
	}
	.large {
		padding: 0.9vh 0.9vh 0 0;
	}
	.small,
	.medium,
	.large {
		position: fixed;
		z-index: -1;
		border-radius: 50%;
		background-color: #fff;
	}
</style>
