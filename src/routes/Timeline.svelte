<script lang="ts">
	import { afterUpdate } from 'svelte';
	import mazeSwapImg from '$lib/assets/images/mazeswap.png';
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

	interface Project {
		title: string;
		discription?: string;
		fakeFileName?: string;
		img?: string;
		cardType: 'full' | 'small';
	}
	let projects: Project[] = [
		{
			title: 'slidify',
			discription:
				'Aliquet nibh praesent tristique magna sit. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Risus commodo viverra maecenas accumsan. Mattis nunc sed blandit libero volutpat sed cras ornare. Diam sit amet nisl suscipit adipiscing. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Turpis massa tincidunt dui ut ornare. Ornare arcu odio ut sem nulla pharetra. Urna id volutpat lacus.',
			fakeFileName: 'Slidify',
			img: mazeSwapImg,
			cardType: 'full'
		},
		{
			title: 'Slidify',
			cardType: 'small'
		},
		{
			title: 'slidify',
			discription:
				"The Slidify is a device meant to easily control music wirelessly from a mac/linux computer. This solves a number of problems. First, you never have to keep spotify (or other music apps) open on your computer again, because all the info can be read right from the Slidify's display. This can be handy to save screen space. Another function is to control music while your monitor is off, for when you want to work focused without distraction from your computer, for example.",
			fakeFileName: 'Slidify',
			cardType: 'full'
		}
	];
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
					discription={project.discription}
					fakeFileName={project.fakeFileName}
					img={project.img}
					cardType={project.cardType}
					activated={y > minH + h * 0.045 + 30}
				/>
			{/each}
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
