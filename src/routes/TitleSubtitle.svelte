<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import './textStyles.css';
	export let title: string;
	export let subtitle: string;

	let fontSize: number;

	onMount(() => {
		updateFontSize();
		window.addEventListener('resize', updateFontSize);
	});

	afterUpdate(() => {
		updateFontSize();
	});

	function updateFontSize() {
		fontSize = window.innerWidth / 25;
		if (fontSize > 90) {
			fontSize = 90;
		}
	}
</script>

<div class="titleBox">
	<h1 style="font-size: {fontSize}px">{title}</h1>
</div>
<h2 style="font-size: {fontSize}px">{subtitle}</h2>

<style>
	.titleBox {
		padding: 0 2%;
		background-color: #06cb79;
	}
</style>
