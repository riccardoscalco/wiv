<script>
	import Images from './Images.svelte';
	import { selections } from '../stores.js';
</script>

<section>
	{#each $selections as images}
		<Images {images} />
	{/each}
</section>
