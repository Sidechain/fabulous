import { a as getSingleCard } from './helpers-7d1e252b.js';
import './cards-b1ab406a.js';

const GET = ({ url }) => {
  const id = url.searchParams.get("cardId");
  const card = getSingleCard(id);
  console.log("im in get");
  console.log("id", id);
  return new Response(JSON.stringify(card));
};

export { GET };
//# sourceMappingURL=_server.ts-36658c23.js.map
