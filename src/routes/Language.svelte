<script lang="ts">
	export let text: string;
	export let color: string;
	export let textColor: string;
	export let fontSize: number;
</script>

<div
	class="card"
	style="background-color: {color}; box-shadow: {fontSize / 3}px {fontSize / 3}px 10px #00000040;"
>
	<h1 style="color: {textColor}; font-size: {fontSize}px;">{text}</h1>
</div>

<style>
	.card {
		padding: 1% 5%;
		margin: 0.5% 0.5%;
		background-color: #000;
		border-radius: 100em;
	}
	h1 {
		color: #fff;
		text-align: right;
	}
</style>
