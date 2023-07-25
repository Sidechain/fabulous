import { c as cards } from "./cards.js";
const getSingleCard = (uniqueId) => cards.find((card) => card.unique_id === uniqueId);
const getSingleCardName = (uniqueId) => {
  const foundCard = cards.find((card) => card.unique_id === uniqueId);
  if (!foundCard)
    return void 0;
  return foundCard.name;
};
const getAllCards = (filter) => cards.filter((card) => card.types.includes(filter));
export {
  getSingleCard as a,
  getSingleCardName as b,
  getAllCards as g
};
