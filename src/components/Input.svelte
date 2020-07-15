<script>
	import { selections, showHelp } from '../stores.js';

	function onChangeHandler() {
		selections.update((state) => [
			...state,
			{ id: Date.now(), selection: [...this.files] },
		]);
		showHelp.set(false);
	}
</script>

<form>
	<label>
		<input
			id="file"
			type="file"
			accept="image/*"
			on:change="{onChangeHandler}"
			multiple
		/>
	</label>
</form>

<style>
	form {
		display: none;
	}
</style>
