<script>
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import { size } from '../stores.js';
	export let images;
	export let index;

	function scrollToSection() {
		document
			.getElementById(`selection-${index}`)
			.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => window.setTimeout(scrollToSection, 250));
</script>

<section
	style="grid-template-columns: repeat(auto-fill, minmax({$size}px, 1fr));"
	id="selection-{index}"
>
	{#each images as file (file.name)}
		<Image {file} />
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
