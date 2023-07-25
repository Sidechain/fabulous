import { cards } from '../../data/cards';
export function load() {
	return {
		summaries: cards.map((card) => ({
			uniqueId: card.unique_id
		}))
	};
}
