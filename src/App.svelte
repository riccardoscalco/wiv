<script>
	import Image from './Image.svelte';
	let files = [];
</script>

<main>
	<input type="file" bind:files multiple>
	<ul>
		{#each files as file}
			<li>
				<Image file={file}/>
			</li>
		{/each}
	</ul>
</main>

<style>
	input {
		margin: 0;
		padding: 0;
		border: 0;
	}
	ul {
		border-top: 1px solid #ddd;
		list-style: none;
		margin: 20px 0;
		padding: 20px 0 0 0;
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