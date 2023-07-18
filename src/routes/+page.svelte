<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { updateFontSize } from '../util';
	import './global.css';
	import SpaceBackground from './SpaceBackground.svelte';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';
	import About from './About.svelte';
	import Timeline from './Timeline.svelte';

	let loadTitleSubtitles = false;
	let y = 0;
	let h = 0;
	let fontSize: number;
	onMount(() => {
		window.addEventListener('resize', () => {
			fontSize = updateFontSize();
		});
	});
	setTimeout(() => {
		loadTitleSubtitles = true;
	}, 2400);

	afterUpdate(() => {
		fontSize = updateFontSize();
	});
</script>

<svelte:head>
	<title>Twan Reijinga | Portfolio</title>
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<SpaceBackground />
<section class="left centered">
	{#if loadTitleSubtitles}
		<div class="centered" in:fade={{ duration: 1000 }}>
			<TitleSubtitle
				title="Hello World!"
				subtitle="I'm Twan"
				comment="// 17 year old programming enthusiast"
				{fontSize}
				maxY={h / 2}
			/>
			<TitleSubtitle
				title="AboutMe()"
				subtitle="I'm Twan"
				comment="// Amsterdam"
				{fontSize}
				minY={h / 2}
				maxY={(h * 2.5) / 2}
			/>
			<TitleSubtitle
				title="Timeline()"
				subtitle="[ProjectName]"
				comment="// Optional Information"
				{fontSize}
				minY={(h * 2.5) / 2}
				maxY={(h * 5) / 2}
			/>
		</div>
	{/if}
</section>
{#if y < 100}
	<ScrollText {fontSize} opacity={100 / y} />
{/if}
<section class="right">
	{#if y > h / 1.6}
		<About {fontSize} />
	{/if}
</section>

<section class="right timeline">
	{#if y > h / 1.3}
		<Timeline {fontSize} minH={h * 1.25} />
	{/if}
</section>
<section style="height: 100vh" />

<style>
	.centered {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.left {
		height: 100vh;
	}
	.right {
		margin-left: 50%;
	}
	.timeline {
		height: 100vh;
	}
</style>
