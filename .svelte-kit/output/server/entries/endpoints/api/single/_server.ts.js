import { a as getSingleCard } from "../../../../chunks/helpers.js";
const GET = ({ url }) => {
  const id = url.searchParams.get("cardId");
  const card = getSingleCard(id);
  console.log("im in get");
  console.log("id", id);
  return new Response(JSON.stringify(card));
};
export {
  GET
};
