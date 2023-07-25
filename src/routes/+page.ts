import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const filter = {
		filter: 'Brute'
	};
	// const res = await fetch(`/api/all?filter=${filter.filter}`);
	const res = await fetch(`/api/all`);

	// const res = await fetch(`/api/all&filter=ninja`);

	const cards = await res.json();

	return { ...cards };

	// throw error(404, 'Not found');
}) satisfies PageLoad;
