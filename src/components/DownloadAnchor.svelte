<script>
	export let src;
	export let download;
	export let width;
	export let height;
	let canvasElement;

	// https://gist.github.com/mbostock/6466603
	function clickListener () {
		const context = canvasElement.getContext("2d");
		const image = new Image;
		image.src = src;
		image.onload = function() {
			context.drawImage(image, 0, 0, width, height);
			const a = document.createElement("a");
			a.download = download.replace('.svg', '.png');
			a.href = canvasElement.toDataURL("image/png");
			a.click();
		}
	}
</script>

<button on:click={clickListener}><slot></slot></button>
<canvas width={width} height={height} bind:this={canvasElement}></canvas>

<style>
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 4px 8px;
		margin: 5px 0 0 0;
		border: 0;
		border-radius: 1px;
		background-color: var(--light-gray);
		cursor: pointer;
		color: var(--primary-color);
	}
	button:hover {
		background-color: var(--almost-white);
	}
	canvas {
		display: none;
	}
</style>
