<script>
	import Image from './Image.svelte';
	import { images } from '../stores.js';
</script>

<ul>
	{#each $images as file, index (file.name)}
		<li>
			<Image file={file} index={index}/>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 10px 0 0 0;
		max-width: 100vw;
		display: grid;
		grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
		column-gap: 20px;
		row-gap: 20px;
	}

	li {
		padding: 0;
		margin: 0;
	}
</style>