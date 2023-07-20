<script lang="ts">
	import { fade } from 'svelte/transition';
	import languages from '../data/languages';
	import Subject from './Subject.svelte';
	import Language from './Language.svelte';
	export let fontSize: number;
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
