<script lang="ts">
	export let title: string;
	export let discription: string;
	export let fakeFileName: string;
	export let fontSize: number;
	import xSvg from '$lib/assets/images/x.svg';
</script>

<article>
	<div class="header">
		<!-- <div class="x" /> -->
		<img class="x" src={xSvg} alt="x" />
		<h3>{title}</h3>
	</div>
	<div class="main">
		<h5 class="command">
			[twan@arch]$ head {fakeFileName}.md
		</h5>
		<h5 class="out">{discription}</h5>
		<div class="footer">
			<h4 class="date">// 01 jan 1960</h4>
		</div>
	</div>
</article>

<style>
	article {
		width: 100%;
		max-width: 500px;
		background-color: #121e28;
		border: 2px solid #fff;
		margin-top: 2vh;
		padding: 0.5vh 2.5%;
	}
	.header {
		display: flex;
		align-items: center;
		padding: 0.25vh 1%;
		border-bottom: 2px solid #fff;
	}
	.main {
		padding: 5%;
	}
	img {
		filter: invert(100%);
	}
	h3 {
		text-align: center;
		width: 100%;
	}
	.out {
		margin-top: 15px;
		color: #06cb79;
	}
	.footer {
		padding-top: 20px;
	}
</style>
