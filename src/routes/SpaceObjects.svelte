<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let loaded = false;
	onMount(() => (loaded = true));
</script>

{#if loaded}
	<div class="world" in:fade={{ delay: 2500 }} />
	<div class="moon" in:fade={{ delay: 2650 }} />
{/if}

<style>
	.world,
	.moon {
		position: fixed;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.world {
		background-image: url('$lib/assets/images/world.gif');
		width: 25%;
		height: 25%;
		margin: 50vh 0 0 65%;
	}
	.moon {
		background-image: url('$lib/assets/images/moon.gif');
		width: 5%;
		height: 5%;
		margin: 35vh 0 0 55%;
	}
</style>
