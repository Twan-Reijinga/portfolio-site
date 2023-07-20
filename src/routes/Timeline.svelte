<script lang="ts">
	import { afterUpdate } from 'svelte';
	import projects from '../data/projects';
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
	let lastScrolledItem = 0;

	afterUpdate(() => {
		clientHeight = h * 0.03;
		clientHeights.forEach((x) => {
			clientHeight += x + h * 0.01;
		});
		maxH = minH + clientHeight;
		lastScrolledItem = getLastScrolledItem(y);
	});

	function getScrollDistanceToDot(item: number) {
		let distance = minH + h * 0.045 + 30;
		for (let i = 0; i < item; i++) {
			distance += clientHeights[i] + h * 0.01 + 4;
		}
		return distance;
	}
	function getLastScrolledItem(y: number) {
		let distance = y - (minH + h * 0.045 + 30);
		let lastIndex = 0;

		for (let i = 0; i < clientHeights.length; i++) {
			const itemScrollHeight = i ? clientHeights[i - 1] + h * 0.01 + 4 : 0;

			if (distance >= itemScrollHeight) {
				distance -= itemScrollHeight;
				lastIndex = i;
			} else {
				break;
			}
		}
		return lastIndex;
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="container">
	<div class="projectsBox">
		<Subject text="Projects & Expience" image="experience" fontSize={fontSize / 2.2} />
		<div class="cards">
			{#each projects as project, i}
				<TimelineCard
					bind:clientHeight={clientHeights[i]}
					title={project.title}
					date={project.date}
					discription={project.discription}
					fakeFileName={project.fakeFileName}
					img={project.img}
					cardType={project.cardType}
					activated={y > getScrollDistanceToDot(i)}
				/>
			{/each}
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
