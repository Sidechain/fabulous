import { writable } from 'svelte/store';

export const User = (function () {
	const { subscribe, set } = writable('init');
	return {
		subscribe,
		signout: () => {
			set(null);
		},
		signin: () => {
			set('John');
		}
	};
})();
