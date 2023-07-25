import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Card } from '../../../data/helpers';

export const load = (async ({ fetch, params }) => {
	if (params.slug) {
		const res = await fetch(`/api/single?cardId=${params.slug}`);
		const card: Card = await res.json();

		return { ...card };
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;

// onMount(async () => {
// 	const res = await fetch(`/api/single?cardId=${$page.params.slug}`);
// 	// const res = await fetch(`/api/single/`);

// 	card = await res.json();
// });
