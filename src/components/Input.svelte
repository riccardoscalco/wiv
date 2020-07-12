<script>
	import { selections } from '../stores.js';

	function onChangeHandler() {
		selections.update((state) => [
			{ id: Date.now(), selection: [...this.files] },
			...state,
		]);
	}
</script>

<form>
	<label>
		∙
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
	input {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		overflow: hidden;
		padding: 0;
		position: absolute !important;
		white-space: nowrap;
		width: 1px;
	}

	label {
		user-select: none;
		border-radius: 1px;
		background-color: var(--light-gray);
		color: var(--primary-color);
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

	label:hover {
		background-color: var(--almost-white);
	}
</style>
