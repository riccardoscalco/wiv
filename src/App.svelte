<script>
	import Image from './Image.svelte';
	let images = [];

	function previewFiles () {
		images = document.querySelector('input[type=file]').files;
	}

	// function previewFile() {
	// 	const preview = document.querySelector('img');
	// 	const file = document.querySelector('input[type=file]').files[0];
	// 	const reader = new FileReader();

	// 	reader.addEventListener("load", function () {
	// 		// convert image file to base64 string
	// 		preview.src = reader.result;
	// 	}, false);

	// 	if (file) {
	// 		reader.readAsDataURL(file);
	// 	}
	// }
</script>

<main>
	<input id="browse" type="file" on:change={previewFiles} multiple><br>
	<ul>
		{#each images as image, i}
			<li>
				<Image file={image}/>
			</li>
		{/each}
	</ul>
</main>

<style>

</style>