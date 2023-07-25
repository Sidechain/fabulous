import { g as getAllCards } from "../../../../chunks/helpers.js";
const GET = ({ url }) => {
  const filter = url.searchParams.get("filter");
  const cards = getAllCards(filter);
  console.log("im in get all cards");
  console.log("filter", filter);
  return new Response(JSON.stringify(cards));
};
export {
  GET
};
