<script lang="ts">
	import { fade } from 'svelte/transition';
	export let fontSize: number;
</script>

<div class="aboutBox">
	<h3 style="font-size: {fontSize / 2.2}px" transition:fade={{ duration: 100 }}>
		<span>Programming</span> is, apart from <span>skiing</span>,<br />
		the greatest thing there is.<br />
		Besides programming, you can find<br />
		me <span>rowing</span> on the Amstel River or<br />
		giving <span>sailinstuction</span> in Loosdrecht.<br />
	</h3>
</div>

<style>
	.aboutBox {
		position: absolute;
		top: 100vh;
	}
	.aboutBox h3 {
		top: 0;
		text-align: right;
	}
</style>
