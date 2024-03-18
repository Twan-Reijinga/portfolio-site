<script lang="ts">
	export let url: string;
</script>

<a class="buttonBox" href={url} target="_blank">
	<div class="button">
		<h4>// View Github</h4>
	</div>
	<div class="shadow" />
</a>

<style>
	.buttonBox{
		transform: skew(-15deg);
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s;
	}
	.button {
		border: 1px solid #fff;
		padding: 5px 20px;
		margin-right: 10px;
		background-color: #ffffff00;
		z-index: 1;
		transform-style: preserve-3d;
		transition: all 0.2s;
	}
	.shadow {
		width:  calc(100% - 10px);
		height: 34px;
		margin-top: -26px;
		margin-left: 10px;
		background-color: #06cb79;
		z-index: -1;
		transition: all 0.2s;
	}

	.buttonBox:hover .shadow {
		margin-top: -34px;
		margin-left: 0px;
		width: 100%;
	}
	.buttonBox:hover{
		padding-top: 8px;
		padding-left: 10px;
	}
	.buttonBox:hover .button {
		margin-right: 0px;
	}

	h4 {
		white-space: nowrap;
		transform: skew(15deg);
		font-weight: 400;
		font-size: 17px;
	}
</style>
