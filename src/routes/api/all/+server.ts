import type { RequestHandler } from './$types';

export const GET = (async ({ url }) => {
	const res = await fetch(
		'https://the-fab-cube.github.io/flesh-and-blood-cards/json/english/card.json'
	);
	const allCards = await res.json();

	const filter = url.searchParams.get('filter');
	// const cards: Card[] = await getAllCards(filter ?? undefined);
	return new Response(JSON.stringify(allCards));
}) satisfies RequestHandler;
