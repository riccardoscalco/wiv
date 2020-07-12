<script>
	import Resetter from './Resetter.svelte';
	import Input from './Input.svelte';
	import Resizer from './Resizer.svelte';
</script>

<header>
	<Input />
	<Resetter />
	<Resizer />
</header>

<style>
	header {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, max-content);
		column-gap: 10px;
	}
</style>
