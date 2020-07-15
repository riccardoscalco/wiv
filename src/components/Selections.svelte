<script>
	import Images from './Images.svelte';
	import { selections } from '../stores.js';
</script>

<section>
	{#each $selections as images, index (images.id)}
		<Images {index} images="{images.selection}" />
	{/each}
</section>

<style>
	section {
		position: relative;
		background-color: var(--white);
		width: 100%;
		min-height: 100vh;
		padding: 0 20px;
	}
</style>
