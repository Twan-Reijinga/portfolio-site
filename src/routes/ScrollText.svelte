<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="textBox" transition:fade>
	<h4>// Scroll to explore</h4>
</div>

<style>
	.textBox {
		position: fixed;
		bottom: 5vh;
		left: 50%;
		transform: translate(-50%);
	}
</style>
