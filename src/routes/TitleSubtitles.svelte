<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import './textStyles.css';
	export let title: string;
	export let subtitle: string = '';
	export let comment: string = '';
	export let fontSize: number;
	export let minY = -1;
	export let maxY = Infinity;
	export let subtitleAfterDot = '';
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
</script>

<svelte:window bind:scrollY={y} />
{#if loaded && y >= minY && y < maxY}
	<div class="fixedBox">
		<div class="titleBox" in:fade={{ delay: isFirstLoad ? 0 : transitionTime * 0.9, duration: 0 }}>
			<h1
				style="font-size: {fontSize}px"
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
	</div>
{/if}

<style>
	.fixedBox {
		position: fixed;
		width: 40%;
		max-width: 800px;
	}
	.titleBox {
		margin-right: 15%;
		padding: 0 2%;
		background-color: #06cb79;
		text-align: center;
	}
	h1,
	h2,
	h4 {
		white-space: nowrap;
	}
	h2 {
		padding-right: 12%;
		text-align: right;
	}
	h4 {
		text-align: right;
		width: 100%;
	}

	@media screen and (max-width: 750px) {
		.fixedBox {
			background-color: #162632;
			width: 100%;
			padding: 0 20% 10px 20%;
		}
	}
</style>
