<script>
	import Image from './Image.svelte';
	let files = [];
</script>

<main>
	<input id="file" type="file" accept="image/*" bind:files multiple>
	<label for="file">∙</label>
	<ul>
		{#each files as file, index}
			<li>
				<Image file={file} index={index}/>
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
		border-radius: 1px;
		background-color: var(--light-gray);
		color: var(--black);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
	}

	/* [type="file"]:focus + label,
	[type="file"] + label:hover {
		
	} */

	[type="file"] + label:hover	 {
		background-color: var(--almost-white);
	}

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