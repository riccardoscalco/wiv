<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import DownloadAnchor from './DownloadAnchor.svelte';
	export let file;
	export let index;
	let visible = false;
	let src;
	let size;
	let name;
	let width = 300;
	let height = 300;

	function readAndPreview() {
		const reader = new FileReader();

		reader.addEventListener(
			'load',
			function () {
				name = file.name;
				size = file.size;
				src = this.result;
				const image = new Image();
				image.src = src;
				image.onload = function () {
					width = this.width;
					height = this.height;
				};
				visible = true;
			},
			false
		);

		reader.readAsDataURL(file);
	}

	function format(bytes) {
		// International System of Units (1000 bytes = 1 kB)
		const k = 1000;
		return `${(bytes / k).toFixed(1)} kB`;
	}

	onMount(readAndPreview);
</script>

{#if visible}
	<article in:fade="{{ delay: index * 35 }}">
		<img alt="{name}" {src} />
		<p>{name}</p>
		<p>{format(size)} - {width}×{height} pixel</p>
		<DownloadAnchor {src} download="{name}" {width} {height}>
			{width}
		</DownloadAnchor>
		{#if width > 1080}
			<DownloadAnchor {src} download="{name}" width="1080" height="1080">
				1080
			</DownloadAnchor>
		{/if}
	</article>
{/if}

<style>
	article {
		width: 100%;
	}

	img {
		width: 100%;
		padding: 1px;
		margin: 0 0 5px 0;
		border: 1px solid var(--light-gray);
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
