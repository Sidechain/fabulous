import type { RequestHandler } from './$types';
import { getSingleCard } from '../../../data/helpers';

export const GET = (({ url }) => {
	const random = Math.random();
	const id = url.searchParams.get('cardId');
	const card = getSingleCard(id);
	console.log('im in get');
	console.log('id', id);
	return new Response(JSON.stringify(card));
}) satisfies RequestHandler;
