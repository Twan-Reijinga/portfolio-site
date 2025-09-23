<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getAge } from '../getAge';
	import '../styles/global.css';
	import projects from '../data/projects';
	import SpaceBackground from './SpaceBackground.svelte';
	import TitleSubtitle from './TitleSubtitles.svelte';
	import ScrollText from './ScrollText.svelte';
	import About from './About.svelte';
	import Timeline from './Timeline.svelte';
	import Contact from './Contact.svelte';

	let loadTitleSubtitles = false;
	let y = 0;
	let h = 0;
	let projectIndex = 0;
	let timelineHeight: number;
	let age = getAge();
	let codeIndex = 0;
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

	setTimeout(() => {
		loadTitleSubtitles = true;
	}, 2400);
	onMount(() => {
		document.onkeydown = (event) => {
			if (event.key === code[codeIndex]) {
				codeIndex++;
				if (codeIndex >= code.length) {
					roll();
				}
			} else {
				codeIndex = 0;
			}
		}
	});

	function roll() {
		document.body.classList.add('roll');
		setTimeout(() => {
			document.body.classList.remove('roll');
		}, 2000);
	}
</script>

<svelte:head>
	<title>Twan Reijinga | Portfolio</title>
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<SpaceBackground />
<section class="left">
	{#if loadTitleSubtitles}
		<div class="" in:fade={{ duration: 1000 }}>
			<TitleSubtitle
				title="Hello World!"
				subtitle="I'm Twan"
				comment="{age} year old Computer Science student"
				maxY={h / 2}
			/>
		</div>
		<TitleSubtitle
			title="AboutMe()"
			subtitle="I'm Twan"
			comment="Studing @ TU Delft"
			minY={h / 2}
			maxY={(h * 2.5) / 2}
		/>
		<TitleSubtitle
			title="Timeline()"
			subtitle={projects[projectIndex].title}
			comment={projects[projectIndex].comment}
			minY={(h * 2.5) / 2}
			maxY={(h * 2.5) / 2 + timelineHeight}
			isWithProjLangs={true}
			{projectIndex}
		/>
		<TitleSubtitle
			title="ContactMe()"
			subtitle="reijinga@twan"
			subtitleAfterDot="space"
			comment="Delft University of Technology"
			minY={(h * 2.5) / 2 + timelineHeight}
		/>
	{/if}
</section>
{#if y < 100}
	<ScrollText />
{/if}
<div class="front">
	<section class="right">
		<About />
	</section>

	<section class="right timeline">
		<!-- {#if y > h / 1.3} -->
		<Timeline
			minH={h * 1.25}
			bind:lastScrolledItem={projectIndex}
			bind:clientHeight={timelineHeight}
		/>
		<!-- {/if} -->
	</section>
	<section class="right" style="height: {timelineHeight}px">
		<Contact minY={(h * 2.5) / 2 + timelineHeight} />
	</section>
</div>

<style>
	.left {
		height: 100vh;
	}
	.right {
		margin-left: 50%;
	}
	.timeline {
		height: 100vh;
	}

	@media screen and (max-width: 900px) {
		.left {
			justify-content: start;
			top: 0;
			margin: 0;
			z-index: 2;
			height: 100vh;
			width: 100%;
		}
		.right {
			margin-left: 0;
			width: 100%;
		}
	}
</style>
