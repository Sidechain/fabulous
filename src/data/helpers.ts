// import { cards } from './cards';

// export const getSingleCard = (uniqueId: string) =>
// 	cards.find((card) => card.unique_id === uniqueId);

// export const getSingleCardName = (uniqueId: string): string | undefined => {
// 	const foundCard = cards.find((card) => card.unique_id === uniqueId);
// 	if (!foundCard) return undefined;
// 	return foundCard.name;
// };

export const getNewCards = async () => {
	const res = await fetch(
		'https://the-fab-cube.github.io/flesh-and-blood-cards/json/english/card.json'
	);

	const newCards = await res.json();
	// console.log('new cards', newCards);
	return newCards;
};

export const getAllCards = async (filter?: string) => {
	console.log('in get all cards helper', filter);
	const allCards = await getNewCards();
	if (filter) return allCards.filter((card) => card.types.includes(filter));
	return allCards;
};

export type Card = {
	unique_id: string;
	name: string;
	pitch: string;
	cost: string;
	power: string;
	defense: string;
	health: string;
	intelligence: string;
	types?: string[];
	card_keywords?: string[];
	abilities_and_effects?: string[];
	ability_and_effect_keywords?: string[];
	granted_keywords?: string[];
	removed_keywords?: string[];
	interacts_with_keywords?: string[];
	functional_text: string;
	functional_text_plain: string;
	flavor_text: string;
	flavor_text_plain: string;
	type_text: string;
	played_horizontally: boolean;
	blitz_legal: boolean;
	cc_legal: boolean;
	commoner_legal: boolean;
	blitz_living_legend: boolean;
	cc_living_legend: boolean;
	blitz_banned: boolean;
	cc_banned: boolean;
	commoner_banned: boolean;
	upf_banned: boolean;
	blitz_suspended: boolean;
	cc_suspended: boolean;
	commoner_suspended: boolean;
	referenced_cards?: string[];
	cards_referenced_by?: string[];
	printings?: Printings[];
};
export interface Printings {
	unique_id: string;
	set_edition_unique_id: string;
	id: string;
	set_id: string;
	edition: string;
	foilings?: string[];
	rarity: string;
	artist: string;
	art_variation?: string;
	image_url: string;
}
