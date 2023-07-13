<script lang="ts">
	import './textStyles.css';
	export let title: string;
	export let subtitle: string;
</script>

<div class="titleSubtitleBox">
	<div class="titleBox">
		<h1>{title}</h1>
	</div>
	<h2>{subtitle}</h2>
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
