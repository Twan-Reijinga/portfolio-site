<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import '../styles/textStyles.css';

	import languages from '../data/languages';
	import Language from './Language.svelte';
	import projects from '../data/projects';

	export let title: string;
	export let subtitle: string = '';
	export let comment: string = '';
	export let fontSize: number;
	export let minY = -1;
	export let maxY = Infinity;
	export let isWithProjLangs: boolean = false;
	export let subtitleAfterDot = '';
	export let projectIndex: number = 0;
	console.log(projectIndex);

	let y: number;
	let loaded = false;
	let isFirstLoad = true;
	let transitionTime = 100;

	onMount(() => {
		loaded = true;
		if (loaded && isFirstLoad) {
			setTimeout(() => {
				isFirstLoad = false;
			}, transitionTime * 1.1);
		}
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

<svelte:window bind:scrollY={y} />
{#if loaded && y >= minY && y < maxY}
	<div class="fixedBox">
		<div class="titleBox" in:fade={{ delay: isFirstLoad ? 0 : transitionTime * 0.9, duration: 0 }}>
			<h1
				in:fly={{
					y: 50,
					delay: isFirstLoad ? 0 : transitionTime,
					duration: isFirstLoad ? 0 : transitionTime
				}}
				out:fly={{ y: -50, duration: transitionTime }}
			>
				{title}
			</h1>
		</div>
		<h2 style="font-size: {fontSize}px" transition:fade={{ duration: transitionTime }}>
			{subtitle}<span>.</span>{subtitleAfterDot}
		</h2>
		<h4
			style="font-size: {fontSize / 3}px; opacity: {comment ? 1 : 0}"
			transition:fade={{ duration: transitionTime }}
		>
			// {comment ? comment : ''}
		</h4>
		{#if isWithProjLangs && projects[projectIndex].languages}
			<div class="projLangs">
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
	</div>
{/if}

<style>
	.fixedBox {
		position: fixed;
		width: 40%;
		max-width: 700px;
		margin: 40vh 5%;
		z-index: 3;
	}
	.titleBox {
		position: absolute;
		width: 75%;
		min-width: 400px;
		padding: 0 2%;
		background-color: #06cb79;
		text-align: center;
	}
	h2 {
		padding-top: 70px;
		text-align: center;
	}
	h4 {
		text-align: right;
		width: 100%;
	}

	.projLangs {
		position: fixed;
		display: flex;
		justify-content: right;
		flex-wrap: wrap;
		width: 30%;
		margin: 2% 5%;
	}

	@media screen and (max-width: 900px) {
		.fixedBox {
			background-color: #162632;
			width: 100%;
			padding: 0 20% 10px 0%;
			margin: 0;
		}
		.titleBox {
			width: 100%;
		}
		.projLangs {
			display: none;
		}
	}
</style>
