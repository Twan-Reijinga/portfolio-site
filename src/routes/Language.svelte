<script lang="ts">
	export let text: string;
	export let color: string;
	export let textColor: string;
</script>

<div
	class="card"
	style="background-color: {color};"
>
	<h1 style="color: {textColor};">{text}</h1>
</div>

<style>
	.card {
		padding: 0.8% 5%;
		margin: 0.8% 0.8%;
		background-color: #000;
		/* border-radius: 100em; */
		transform: skew(-10deg);
		box-shadow: 10px 10px 5px #00000040;
	}	h1 {
		color: #fff;
		text-align: right;
		transform: skew(10deg);
		font-size: 20px;
	}
</style>
