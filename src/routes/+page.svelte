<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { updateFontSize } from '../util';
	import './global.css';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';

	let fontSize: number;
	onMount(() => {
		window.addEventListener('resize', () => {
			fontSize = updateFontSize();
		});
	});

	afterUpdate(() => {
		fontSize = updateFontSize();
	});
</script>

<section class="centeredSection">
	<TitleSubtitle
		title="Hello World"
		subtitle="I'm Twan"
		comment="// 17 year old web-, app- and AI-programmer"
		{fontSize}
	/>
	<ScrollText {fontSize} />
</section>

<style>
	.centeredSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
