import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.89c26ef3.js","_app/immutable/chunks/index.79a9c734.js","_app/immutable/chunks/cards.ebf0e5b9.js"];
export const stylesheets = [];
export const fonts = [];
