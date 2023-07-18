<script lang="ts">
	import { fade } from 'svelte/transition';
	import Subject from './Subject.svelte';
	import Language from './Language.svelte';
	export let fontSize: number;
	const languages = [
		{ text: 'TS', color: '#007acc', textColor: '#fff' },
		{ text: 'JS', color: '#f0db4f', textColor: '#000' },
		{ text: 'P5', color: '#ed225d', textColor: '#fff' },
		{ text: 'Python', color: '#0db7ed', textColor: '#000' },
		{ text: 'C++', color: '#007acc', textColor: '#fff' },
		{ text: 'React Native', color: '#61dbfb', textColor: '#000' },
		{ text: 'Docker', color: '#0db7ed', textColor: '#000' },
		{ text: 'Postgress', color: '#316192', textColor: '#fff' },
		{ text: 'MongoDB', color: '#00694A', textColor: '#fff' },
		{ text: 'Svelte', color: '#FF3E00', textColor: '#fff' },
		// { text: 'C#', color: '#984D94', textColor: '#fff' },
		// { text: 'CSS', color: '#006EB6', textColor: '#fff' },
		{ text: 'ELM', color: '#5C6278', textColor: '#fff' },
		// { text: 'Unity', color: '#6D6D6D', textColor: '#fff' },
		{ text: 'R', color: '#1F63B6', textColor: '#fff' }
	];
	let y: number;
	let h: number;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="aboutBox" transition:fade={{ duration: 100 }}>
	<h3 style="font-size: {fontSize / 2.2}px">
		<span>Programming</span> is, apart from <span>skiing</span>,<br />
		the greatest thing there is.<br />
		Besides programming, you can find<br />
		me <span>rowing</span> on the Amstel River or<br />
		giving <span>sailinstuction</span> in Loosdrecht.<br />
	</h3>
	<Subject text="Most used languages" fontSize={fontSize / 2.2} image="programming" />
	{#if y > h / 1.4}
		<div class="languageCards" transition:fade={{ duration: 100 }}>
			{#each languages as language}
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

<style>
	.aboutBox {
		padding: 5%;
		top: 0;
	}
	.aboutBox h3 {
		top: 0;
		text-align: right;
	}
	.languageCards {
		margin-top: 2vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: right;
	}
	h3 {
		padding-bottom: 5vh;
	}
</style>
