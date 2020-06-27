<script>
	import { onMount } from 'svelte';
	export let file;
	let src;

	function readAndPreview () {
		// Make sure `file.name` matches our extensions criteria
		if ( /\.(jpe?g|png|gif|svg)$/i.test(file.name) ) {
			const reader = new FileReader();

			reader.addEventListener("load", function () {
				var image = new Image();
				// image.height = 100;
				// image.title = file.name;
				image.src = this.result;
				src = image.src;
			}, false);

			reader.readAsDataURL(file);
		}
	}

	onMount(readAndPreview);
</script>

<img alt="just an" src={src}>

<style>
	img {
		width: 100%;
		padding: 0;
		margin: 0;
	}
</style>
