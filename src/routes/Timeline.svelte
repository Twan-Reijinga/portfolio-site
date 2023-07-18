<script lang="ts">
	import Subject from './Subject.svelte';
	import TimelineCard from './TimelineCard.svelte';
	import TimelineLine from './TimelineLine.svelte';
	export let fontSize: number;
</script>

<div class="container">
	<div class="projectsBox">
		<Subject text="Projects & Expience" image="experience" fontSize={fontSize / 2.2} />
		<div class="cards">
			<TimelineCard
				title="Slidify: Music slider"
				discription="Aliquet nibh praesent tristique magna sit. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Risus commodo viverra maecenas accumsan. Mattis nunc sed blandit libero volutpat sed cras ornare. Diam sit amet nisl suscipit adipiscing. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Turpis massa tincidunt dui ut ornare. Ornare arcu odio ut sem nulla pharetra. Urna id volutpat lacus."
				fakeFileName="Slidify"
				fontSize={fontSize / 2.5}
			/>
		</div>
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
	.cards {
		display: flex;
		flex-direction: row-reverse;
		margin-top: 3vh;
	}
</style>
