<script lang="ts">
	export let fontSize: number;
</script>

<div class="textBox">
	<h4 style="font-size: {fontSize / 3}px">// Scroll to explore</h4>
</div>

<style>
	.textBox {
		position: absolute;
		bottom: 5vh;
		left: 50%;
		transform: translate(-50%);
	}
</style>
