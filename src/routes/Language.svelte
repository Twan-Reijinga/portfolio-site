<script lang="ts">
	export let text: string;
	export let color: string;
	export let textColor: string;
	export let fontSize: number;
</script>

<div class="card" style="background-color: {color}">
	<h1 style="color: {textColor}; font-size: {fontSize}px;">{text}</h1>
</div>

<style>
	.card {
		padding: 10px 50px;
		margin: 5px;
		background-color: #000;
		border-radius: 100em;
	}
	h1 {
		color: #fff;
		text-align: right;
	}
</style>
