import { g as getAllCards } from './helpers-7d1e252b.js';
import './cards-b1ab406a.js';

const GET = ({ url }) => {
  const filter = url.searchParams.get("filter");
  const cards = getAllCards(filter);
  console.log("im in get all cards");
  console.log("filter", filter);
  return new Response(JSON.stringify(cards));
};

export { GET };
//# sourceMappingURL=_server.ts-02ae469c.js.map
