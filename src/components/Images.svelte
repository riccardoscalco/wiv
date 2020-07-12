<script>
	import Image from './Image.svelte';
	import { size } from '../stores.js';
	export let images;
</script>

<section
	style="grid-template-columns: repeat(auto-fill, minmax({$size}px, 1fr));"
>
	{#each images as file, index (file.name)}
		<Image {file} {index} />
	{/each}
</section>

<style>
	section {
		list-style: none;
		padding: 20px 0;
		border-top: 1px solid var(--light-gray);
		max-width: 100vw;
		display: grid;
		column-gap: 20px;
		row-gap: 20px;
	}

	section:first-child {
		border: none;
	}
</style>
