import { e as error } from './index3-78bfc04e.js';

const load = async ({ fetch, params }) => {
  if (params.slug) {
    const res = await fetch(`/api/single?cardId=${params.slug}`);
    const card = await res.json();
    return { ...card };
  }
  throw error(404, "Not found");
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const index = 4;
const component = async () => (await import('./_page.svelte-1023d365.js')).default;
const universal_id = "src/routes/single/[slug]/+page.ts";
const server_id = "src/routes/single/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.53bacbac.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.79a9c734.js","_app/immutable/chunks/cards.ebf0e5b9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-fd4a619f.js.map
