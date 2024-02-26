<script lang="ts">
	export let url: string;
</script>

<a class="buttonBox" href={url} target="_blank">
	<div class="shadow" />
	<div class="button">
		<h4>// View Github</h4>
	</div>
</a>

<style>
	.buttonBox {
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s;
	}
	.button {
		transform: skew(-15deg);
		border: 1px solid #fff;
		padding: 5px 20px;
		margin-top: -38px;
		background-color: #ffffff00;
		z-index: 1;
		transform-style: preserve-3d;
		transition: all 0.2s;
	}
	.shadow {
		width: 100%;
		height: 34px;
		margin-top: 4px;
		margin-left: 10px;
		background-color: #06cb79;
		transform: skew(-15deg);
		z-index: -1;
		transition: all 0.2s;
	}

	.buttonBox:hover {
		margin: 4px -10px -4px 10px;
	}
	.buttonBox:hover .shadow {
		transform: skew(-15deg);
		margin: 0;
	}
	.buttonBox:hover .button {
		margin-top: -34px;
		/* border-color: #06cb79; */
	}

	h4 {
		white-space: nowrap;
		transform: skew(15deg);
	}
</style>
