<script lang="ts">
	import './textStyles.css';
	import ScrollText from './ScrollText.svelte';
	export let title: string;
	export let subtitle: string = '';
	export let comment: string = '';
	export let fontSize: number;
</script>

<div class="titleBox">
	<h1 style="font-size: {fontSize}px">{title}</h1>
</div>
<h2 style="font-size: {fontSize}px">{subtitle}</h2>
<h4 style="font-size: {fontSize / 3}px">{comment}</h4>
<ScrollText {fontSize} />

<style>
	.titleBox {
		padding: 0 2%;
		background-color: #06cb79;
	}
	h2 {
		padding-left: 30%;
	}
	h4 {
		text-align: right;
		width: 100%;
		white-space: nowrap;
	}
</style>
