import { c as cards } from "../../../chunks/cards.js";
function load() {
  return {
    summaries: cards.map((card) => ({
      uniqueId: card.unique_id
    }))
  };
}
export {
  load
};
