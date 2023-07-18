<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Subject from './Subject.svelte';
	import TimelineCard from './TimelineCard.svelte';
	import TimelineLine from './TimelineLine.svelte';
	export let fontSize: number;
	export let minH: number;
	let maxH: number;
	let y: number;
	let h: number;
	let clientHeight: number;
	let clientHeights: number[] = Array(3);

	afterUpdate(() => {
		clientHeight = h * 0.03;
		clientHeights.forEach((x) => {
			clientHeight += x + h * 0.01;
		});
		maxH = minH + clientHeight;
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="container">
	<div class="projectsBox">
		<Subject text="Projects & Expience" image="experience" fontSize={fontSize / 2.2} />
		<div class="cards">
			<TimelineCard
				bind:clientHeight={clientHeights[0]}
				title="Slidify: Music slider"
				discription="Aliquet nibh praesent tristique magna sit. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Risus commodo viverra maecenas accumsan. Mattis nunc sed blandit libero volutpat sed cras ornare. Diam sit amet nisl suscipit adipiscing. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Turpis massa tincidunt dui ut ornare. Ornare arcu odio ut sem nulla pharetra. Urna id volutpat lacus."
				fakeFileName="Slidify"
				activated={y > minH + h * 0.045 + 30}
				cardType="full"
			/>
			<TimelineCard
				bind:clientHeight={clientHeights[1]}
				title="Slidify: Music slider"
				discription="Aliquet nibh praesent tristique magna sit. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Risus commodo viverra maecenas accumsan. Mattis nunc sed blandit libero volutpat sed cras ornare. Diam sit amet nisl suscipit adipiscing. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Turpis massa tincidunt dui ut ornare. Ornare arcu odio ut sem nulla pharetra. Urna id volutpat lacus."
				fakeFileName="Slidify"
				activated={y > minH + h * 0.045 + 30 + clientHeights[0] + h * 0.01}
				cardType="full"
			/>
			<TimelineCard
				bind:clientHeight={clientHeights[2]}
				title="Slidify: Music slider"
				activated={y > minH + h * 0.045 + 30 + clientHeights[0] + clientHeights[1] + h * 0.02}
				cardType="small"
			/>
			<!-- TODO: make activated system -->
		</div>
	</div>
	<TimelineLine fontSize={fontSize * (15 / 44)} bind:height={clientHeight} bind:minH bind:maxH />
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
		flex-direction: column;
		margin-top: 2vh;
	}
</style>
