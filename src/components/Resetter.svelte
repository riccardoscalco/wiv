<script>
	import { images } from '../stores.js';

	function reset() {
		images.set([]);
	}
</script>

<button on:click="{reset}">|</button>

<style>
	button {
		border-radius: 1px;
		border: 0;
		background-color: var(--light-gray);
		color: var(--black);
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
