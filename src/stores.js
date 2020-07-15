import { writable, derived } from 'svelte/store';

export const selections = writable([]);
export const size = writable(280);
export const showHelp = writable(false);
export const zIndex = derived(
	[selections, showHelp],
	([$selections, $showHelp]) => ($selections.length === 0 || $showHelp ? 1 : 0)
);
