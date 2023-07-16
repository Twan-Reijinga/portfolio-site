<script lang="ts">
	import { fade } from 'svelte/transition';
	export let fontSize: number;
	export let opacity: number;
</script>

<div class="textBox" style="opacity:{opacity}" transition:fade>
	<h4 style="font-size: {fontSize / 3}px">// Scroll to explore</h4>
</div>

<style>
	.textBox {
		position: fixed;
		bottom: 5vh;
		left: 50%;
		transform: translate(-50%);
	}
</style>
