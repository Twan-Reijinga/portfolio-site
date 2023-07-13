<script lang="ts">
	import './global.css';
	import TitleSubtitle from './TitleSubtitle.svelte';
	import ScrollText from './ScrollText.svelte';
</script>

<section class="centeredSection">
	<TitleSubtitle title="Hello World" subtitle="I'm Twan" />
</section>
<ScrollText />

<style>
	.centeredSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
