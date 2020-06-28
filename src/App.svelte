<script>
	import Image from './Image.svelte';
	let files = [];
</script>

<main>
	<input id="file" type="file" bind:files multiple>
	<label for="file">Select some images</label>
	<ul>
		{#each files as file}
			<li>
				<Image file={file}/>
			</li>
		{/each}
	</ul>
</main>

<style>
	[type="file"] {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		overflow: hidden;
		padding: 0;
		position: absolute !important;
		white-space: nowrap;
		width: 1px;
	}
 
	[type="file"] + label {
		user-select: none;
		border-radius: 2px;
		background-color: var(--black);
		color: var(--white);
		cursor: pointer;
		display: inline-block;
		padding: 10px;
	}

	/* [type="file"]:focus + label,
	[type="file"] + label:hover {
		
	} */

	ul {
		border-top: 1px solid var(--black);
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