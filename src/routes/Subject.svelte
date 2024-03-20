<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../styles/roll.css';
	export let text: string;
	export let image: 'programming' | 'experience';
	let y: number;
	let h: number;
	let isActiveEasterEgg: boolean = false;
	$: if (isActiveEasterEgg) document.body.classList.add('roll');

	onMount(() => {
		let easterEgg = document.querySelector('.programming');
		easterEgg?.addEventListener('click', roll);
	});

	function roll() {
		isActiveEasterEgg = true;
		setTimeout(() => {
			isActiveEasterEgg = false;
			document.body.classList.remove('roll');
		}, 2000);
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />
<div class="horizontal" transition:fade={{ duration: 100 }}>
	<div class="imageHolder">
		<div class="image {image}" />
	</div>
	<h3>{text}</h3>
</div>

<style>
	.horizontal {
		display: flex;
		justify-content: right;
	}
	.imageHolder {
		width: 35px;
		height: 35px;
		background-image: var(--image);
		background-color: #fff;
		border-radius: 12%;
		transform: rotate(45deg);
		box-shadow: 7px -7px #000000aa;
	}
	.horizontal h3 {
		padding-left: 5%;
		line-height: 1.5;
		font-size: 25px;
	}
	.image {
		background-position: center center;
		width: 100%;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
		transform: rotate(-45deg);
	}
	.programming {
		background-image: url('$lib/assets/images/programming.png');
	}
	.experience {
		background-size: 70%;
		background-image: url('$lib/assets/images/experience.png');
	}
</style>
