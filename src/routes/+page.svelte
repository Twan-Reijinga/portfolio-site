<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { updateFontSize } from '../util';
	import './global.css';
	import SpaceBackground from './SpaceBackground.svelte';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';

	let y = 0;
	let h = 0;
	let loaded = false;
	let fontSize: number;
	onMount(() => {
		loaded = true;
		window.addEventListener('resize', () => {
			fontSize = updateFontSize();
		});
	});

	afterUpdate(() => {
		fontSize = updateFontSize();
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<SpaceBackground />
{#if loaded}
	<section class="centered" in:fade={{ delay: 2400, duration: 1000 }}>
		{#if y < h / 2}
			<TitleSubtitle
				title="Hello World!"
				subtitle="I'm Twan"
				comment="// 17 year old web-, app- and AI-programmer"
				{fontSize}
			/>
		{:else if y < (h * 3) / 2}
			<TitleSubtitle title="AboutMe()" subtitle="I'm Twan" comment="// Amsterdam" {fontSize} />
		{/if}
		{#if y < 100}
			<ScrollText {fontSize} opacity={100 / y} />
		{/if}
		<!-- </div> -->
	</section>
	<section class="right" />
{/if}

<style>
	.centered {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.right {
		margin-left: 50%;
		/* background-color: #ffffff05; */
	}
</style>
