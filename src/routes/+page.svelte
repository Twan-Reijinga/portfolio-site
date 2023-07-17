<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { updateFontSize } from '../util';
	import './global.css';
	import SpaceBackground from './SpaceBackground.svelte';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';

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

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<SpaceBackground />
<section class="centered">
	{#if loadTitleSubtitles}
		<div class="centered" in:fade={{ duration: 1000 }}>
			<TitleSubtitle
				title="Hello World!"
				subtitle="I'm Twan"
				comment="// 17 year old web-, app- and AI-programmer"
				{fontSize}
				maxY={h / 2}
			/>
			<TitleSubtitle
				title="AboutMe()"
				subtitle="I'm Twan"
				comment="// Amsterdam"
				{fontSize}
				minY={h / 2}
				maxY={(h * 3) / 2}
			/>
		</div>
	{/if}
</section>
{#if y < 100}
	<ScrollText {fontSize} opacity={100 / y} />
{/if}
<!-- </div> -->
<section class="right">
	<h3 class="aboutText">
		<span>Programming</span> is, apart from <span>skiing</span>, the greatest thing there is.
		Besides programming, you can find me <span>rowing</span> on the Amstel River or giving
		<span>sailinstuction</span> in Loosdrecht.
	</h3>
</section>

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
	h3.aboutText {
		padding: 20%;
	}
</style>
