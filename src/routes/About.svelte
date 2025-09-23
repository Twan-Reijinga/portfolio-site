<script lang="ts">
	import { fade } from 'svelte/transition';
	import languages from '../data/languages';
	import Subject from './Subject.svelte';
	import Language from './Language.svelte';
	let y: number;
	let h: number;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="aboutBox" transition:fade={{ duration: 100 }}>
	<h3 class="aboutText">
		<span>Programming</span> is, apart from <span>skiing</span>,<br />
		the greatest thing there is.<br />
		Besides Studing <span>Computer Science</span> at <span>TU Delft</span>,<br>
		you can find me <span>rowing</span> on the Schie all day<br />
		or build the new site with the <span>WebCie</span> at <span>Proteus-Eretes</span> <br />
	</h3>
	<Subject text="Most used languages" image="programming" />
	<!-- {#if y > h / 1.4} -->
	<div class="languageCards" transition:fade={{ duration: 100 }}>
		{#each languages as language}
			<Language
				text={language.text}
				color={language.color}
				textColor={language.textColor}
			/>
		{/each}
	</div>
	<!-- {/if} -->
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
	.aboutText {
		font-size: 30px;
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
