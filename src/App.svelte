<script>
	import Image from './Image.svelte';
	let images = [];

	function previewFiles () {
		images = document.querySelector('input[type=file]').files;
	}
</script>

<main>
	<input id="browse" type="file" on:change={previewFiles} multiple><br>
	<ul>
		{#each images as image}
			<li>
				<Image file={image}/>
			</li>
		{/each}
	</ul>
</main>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		max-width: 100vw;
		display: flex;
		flex-wrap: wrap;
	}
	li {
		padding: 20px;
	}
</style>