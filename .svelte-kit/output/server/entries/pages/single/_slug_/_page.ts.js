import { e as error } from "../../../../chunks/index3.js";
const load = async ({ fetch, params }) => {
  if (params.slug) {
    const res = await fetch(`/api/single?cardId=${params.slug}`);
    const card = await res.json();
    return { ...card };
  }
  throw error(404, "Not found");
};
export {
  load
};
