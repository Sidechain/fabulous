import * as server from '../entries/pages/single/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/single/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/single/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.21b60c63.js","_app/immutable/chunks/index.79a9c734.js"];
export const stylesheets = [];
export const fonts = [];
