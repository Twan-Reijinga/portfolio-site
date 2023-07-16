<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { updateFontSize } from '../util';
	import './global.css';
	import SpaceBackground from './SpaceBackground.svelte';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';

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

<SpaceBackground />
{#if loaded}
	<section class="centeredSection" in:fade={{ delay: 2400, duration: 1000 }}>
		<TitleSubtitle
			title="Hello World!"
			subtitle="I'm Twan"
			comment="// 17 year old web-, app- and AI-programmer"
			{fontSize}
		/>
		<ScrollText {fontSize} />
	</section>
{/if}

<style>
	.centeredSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
