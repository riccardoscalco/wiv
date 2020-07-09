<script>
	import Resetter from './Resetter.svelte';
	import Input from './Input.svelte';
</script>

<header>
	<Input />
	<Resetter />
</header>

<style>
	header {
		width: 100%;
		display: grid;
		/* grid-template-columns: repeat( auto-fill, minmax(40px, 1fr) ); */
		grid-template-columns: repeat(2, max-content);
		column-gap: 10px;
	}
</style>
