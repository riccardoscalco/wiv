<script>
	import Images from './Images.svelte';
	import { selections } from '../stores.js';
</script>

<section>
	{#each $selections as images (images.id)}
		<Images images="{images.selection}" />
	{/each}
</section>
