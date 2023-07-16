<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let delay = 0;
	export let duraction = 1000;

	let loaded = false;
	onMount(() => (loaded = true));
</script>

{#if loaded}
	<div in:fade={{ delay: delay, duration: duraction }}>
		<slot />
	</div>
{/if}
