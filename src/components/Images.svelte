<script>
	import Image from './Image.svelte';
	import { images } from '../stores.js';
</script>

<section>
	{#each $images as file, index (file.name)}
		<Image {file} {index} />
	{/each}
</section>

<style>
	section {
		list-style: none;
		padding: 10px 0 0 0;
		max-width: 100vw;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		column-gap: 20px;
		row-gap: 20px;
	}
</style>
