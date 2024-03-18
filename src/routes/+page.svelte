<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { updateFontSize, getAge } from '../util';
	import './global.css';
	import projects from '../data/projects';
	import languages from '../data/languages';
	import SpaceBackground from './SpaceBackground.svelte';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';
	import About from './About.svelte';
	import Timeline from './Timeline.svelte';
	import Contact from './Contact.svelte';
	import Language from './Language.svelte';

	let loadTitleSubtitles = false;
	let y = 0;
	let h = 0;
	let projectIndex = 0;
	let fontSize: number;
	let timelineHeight: number;
	let age = getAge();

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

	interface Language {
		text: string;
		color: string;
		textColor: string;
	}

	function getLanguages(languageNames: string[] | undefined): Language[] {
		if (!languages) {
			return [];
		}
		let languageInfo: Language[] = [];
		languageNames?.forEach((languageName) => {
			languages.forEach((lang) => {
				if (lang.text === languageName) {
					languageInfo.push(lang);
					return;
				}
			});
		});
		return languageInfo;
	}
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
				comment="{age} year old programming enthusiast"
				{fontSize}
				maxY={h / 2}
			/>
			<TitleSubtitle
				title="AboutMe()"
				subtitle="I'm Twan"
				comment="Amsterdam"
				{fontSize}
				minY={h / 2}
				maxY={(h * 2.5) / 2}
			/>
			<TitleSubtitle
				title="Timeline()"
				subtitle={projects[projectIndex].title}
				comment={projects[projectIndex].comment}
				{fontSize}
				minY={(h * 2.5) / 2}
				maxY={(h * 2.5) / 2 + timelineHeight}
			/>
			{#if y > (h * 2.5) / 2 && y < (h * 2.5) / 2 + timelineHeight && projects[projectIndex].languages}
				<div class="projLangs" style="margin-top: {fontSize * 5}px">
					{#each getLanguages(projects[projectIndex].languages) as language}
						<Language
							text={language.text}
							color={language.color}
							textColor={language.textColor}
							fontSize={fontSize / 3}
						/>
					{/each}
				</div>
			{/if}
			<TitleSubtitle
				title="ContactMe()"
				subtitle="Reijinga@tuta"
				subtitleAfterDot="io"
				comment="Metis Montessori Lyceum"
				{fontSize}
				minY={(h * 2.5) / 2 + timelineHeight}
			/>
		</div>
	{/if}
</section>
{#if y < 100}
	<ScrollText {fontSize} opacity={100 / y} />
{/if}
<section class="right">
	<!-- {#if y > h / 1.6} -->
	<About {fontSize} />
	<!-- {/if} -->
</section>

<section class="right timeline">
	<!-- {#if y > h / 1.3} -->
	<Timeline
		{fontSize}
		minH={h * 1.25}
		bind:lastScrolledItem={projectIndex}
		bind:clientHeight={timelineHeight}
	/>
	<!-- {/if} -->
</section>
<section class="right" style="height: {timelineHeight}px">
	<Contact minY={(h * 2.5) / 2 + timelineHeight} />
</section>

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
	.projLangs {
		position: fixed;
		display: flex;
		justify-content: right;
		flex-wrap: wrap;
		width: 30%;
	}

	@media screen and (max-width: 750px) {
		.centered {
			justify-content: start;
			top: 0;
		}
		.centered * {
			z-index: 3;
		}
		.left {
			height: 100vh;
			width: 100%;
		}
		.right {
			margin-left: 0;
			width: 100%;
		}
		.projLangs {
			display: none;
		}
	}
</style>
