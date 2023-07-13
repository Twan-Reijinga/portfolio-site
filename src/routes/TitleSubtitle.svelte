<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import './textStyles.css';
	export let title: string;
	export let subtitle: string;

	let fontSize: string;

	onMount(() => {
		updateFontSize();
		window.addEventListener('resize', updateFontSize);
	});

	afterUpdate(() => {
		updateFontSize();
	});

	function updateFontSize() {
		fontSize = window.innerWidth / 20 + 'px';
	}
</script>

<div class="titleSubtitleBox">
	<div class="titleBox">
		<h1 style="font-size: {fontSize}">{title}</h1>
	</div>
	<h2 style="font-size: {fontSize}">{subtitle}</h2>
</div>

<style>
	.titleSubtitleBox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
	}
	.titleBox {
		padding: 0 20px;
		background-color: #06cb79;
	}
</style>
