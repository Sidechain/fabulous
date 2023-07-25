import * as universal from '../entries/pages/single/_slug_/_page.ts.js';
import * as server from '../entries/pages/single/_slug_/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/single/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/single/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/single/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.53bacbac.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.79a9c734.js","_app/immutable/chunks/cards.ebf0e5b9.js"];
export const stylesheets = [];
export const fonts = [];
