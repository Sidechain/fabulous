import { c as cards } from './cards-b1ab406a.js';

function load() {
  return {
    summaries: cards.map((card) => ({
      uniqueId: card.unique_id
    }))
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-d7c69df7.js')).default;
const server_id = "src/routes/single/+page.server.ts";
const imports = ["_app/immutable/nodes/3.21b60c63.js","_app/immutable/chunks/index.79a9c734.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-b8b31e26.js.map
