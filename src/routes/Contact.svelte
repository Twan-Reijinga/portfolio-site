<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let minY: number;
	let y: number;
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:window bind:scrollY={y} />
{#if loaded && y >= minY}
	<div class="socialContainer" transition:fade={{ duration: 100 }}>
		<a class="social" href="https://www.linkedin.com/in/twan-reijinga-1a7ab2263/" target="_blank">
			<div class="linkedInLogo" />
			<h4>// View LinkedIn</h4>
		</a>
		<a class="social" href="https://github.com/Twan-Reijinga" target="_blank">
			<div class="githubLogo" />
			<h4>// View Github</h4>
		</a>
	</div>
{/if}

<style>
	.socialContainer {
		position: fixed;
		top: 60vh;
		right: 10%;
	}
	.social {
		margin-bottom: 20px;
		display: flex;
	}
	.linkedInLogo,
	.githubLogo {
		background-position: center center;
		width: 100%;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		width: 75px;
		aspect-ratio: 1;
	}
	.linkedInLogo {
		background-image: url('$lib/assets/images/LinkedIn.png');
	}
	.githubLogo {
		background-image: url('$lib/assets/images/Github.svg');
	}
	h4 {
		font-weight: 500;
		margin-left: 20px;
		line-height: 75px;
	}
</style>
