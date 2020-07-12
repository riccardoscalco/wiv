<script>
	import { size, selections } from '../stores.js';

	function resize() {
		if ($selections.length === 0) {
			return;
		}
		$size === 500 ? size.set(250) : size.set(500);
	}
</script>

<button on:click="{resize}">/</button>

<style>
	button {
		border-radius: 1px;
		border: 0;
		background-color: var(--light-gray);
		color: var(--primary-color);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
	}

	button:hover {
		background-color: var(--almost-white);
	}
</style>
