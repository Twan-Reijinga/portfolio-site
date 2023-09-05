<script lang="ts">
	import { fade } from 'svelte/transition';
	export let text: string;
	export let image: 'programming' | 'experience';
	export let fontSize: number;
	let y: number;
	let h: number;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<!-- {#if y > h / 1.5} -->
<div class="horizontal" transition:fade={{ duration: 100 }}>
	<div
		class="imageHolder"
		style="width: {fontSize * 1.5}px; height: {fontSize * 1.5}px; 
               box-shadow: {fontSize / 4}px {-fontSize / 4}px #00000099;"
	>
		<div class="image {image}" />
	</div>
	<h3 style="font-size: {fontSize}px;">{text}</h3>
</div>

<!-- {/if} -->

<style>
	.horizontal {
		display: flex;
		justify-content: right;
		/* padding-top: 5vh; */
	}
	.imageHolder {
		background-image: var(--image);
		background-color: #fff;
		border-radius: 20%;
		transform: rotate(45deg);
	}
	.horizontal h3 {
		padding-left: 5%;
		line-height: 1.5;
	}
	.image {
		background-position: center center;
		width: 100%;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		transform: rotate(-45deg);
	}
	.programming {
		background-image: url('$lib/assets/images/programming.png');
	}
	.experience {
		background-size: 70%;
		background-image: url('$lib/assets/images/experience.png');
	}
</style>
