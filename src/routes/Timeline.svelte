<script lang="ts">
	import Subject from './Subject.svelte';
	import TimelineLine from './TimelineLine.svelte';
	export let fontSize: number;
</script>

<div class="container">
	<div class="projectsBox">
		<Subject text="Projects & Expience" image="experience" fontSize={fontSize / 2.2} />
	</div>
	<!-- <div class="line" style="margin-top: {fontSize * (15 / 44)}px" /> -->
	<TimelineLine fontSize={fontSize * (15 / 44)} />
</div>

<style>
	.container {
		display: flex;
		padding: 5%;
		top: 0;
	}
	.projectsBox {
		width: 100%;
	}
</style>
