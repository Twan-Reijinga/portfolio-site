<script lang="ts">
	import './textStyles.css';
	export let title: string;
	export let subtitle: string = '';
	export let comment: string = '';
	export let fontSize: number;
</script>

<div class="fixedBox">
	<div class="titleBox">
		<h1 style="font-size: {fontSize}px">{title}</h1>
	</div>
	<h2 style="font-size: {fontSize}px">{subtitle}</h2>
	<h4 style="font-size: {fontSize / 3}px">{comment}</h4>
</div>

<style>
	.fixedBox {
		position: fixed;
		width: 40%;
		max-width: 800px;
	}
	.titleBox {
		margin-right: 10%;
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
		padding-left: 30%;
	}
	h4 {
		text-align: right;
		width: 100%;
	}
</style>
