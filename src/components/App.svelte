<script>
	import Input from './Input.svelte';
	import Selections from './Selections.svelte';
	import Help from './Help.svelte';
	import { size, selections, showHelp } from '../stores.js';

	function resize() {
		if ($selections.length === 0) {
			return;
		}
		$size === 500 ? size.set(280) : size.set(500);
	}

	function reset() {
		selections.set([]);
	}

	function toggleHelp() {
		if ($selections.length === 0) {
			return;
		}
		showHelp.set(!$showHelp);
	}

	function handleKeydown(event) {
		switch (event.key) {
			case 's':
				document.getElementById('file').click();
				break;
			case 'c':
				reset();
				break;
			case 't':
				resize();
				break;
			case 'h':
				toggleHelp();
			default:
				break;
		}
	}
</script>

<svelte:window on:keydown="{handleKeydown}" />

<Input />
<main>
	<Help />
	<Selections />
</main>
