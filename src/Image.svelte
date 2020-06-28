<script>
	import { onMount } from 'svelte';
	export let file;
	let src;
	let size;
	let name;

	function readAndPreview () {
		const reader = new FileReader();

		reader.addEventListener("load", function () {
			name = file.name;
			size = file.size;
			src = this.result;
		}, false);

		reader.readAsDataURL(file);
	}

	function format (bytes) {
		// International System of Units (1000 bytes = 1 kB)
		const k = 1000;
		return `${(bytes / k).toFixed(1)} kB`;
	}

	onMount(readAndPreview);
</script>

<article>
	<img alt={name} src={src}/>
	<p>{name}</p>
	<p>{format(size)}</p>
</article>

<style>
	article {
		width: 100%;
	}

	img {
		width: 100%;
		padding: 0;
		margin: 0;
	}

	p {
		max-width: 100%;
		overflow-wrap: break-word;
		margin: 0;
		padding: 0;
		font-size: 12px;
		line-height: calc(12px * 1.5);
	}
</style>
