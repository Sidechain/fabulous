const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e6edb477.js","app":"_app/immutable/entry/app.58ca0dca.js","imports":["_app/immutable/entry/start.e6edb477.js","_app/immutable/chunks/index.79a9c734.js","_app/immutable/chunks/singletons.7a60dac8.js","_app/immutable/chunks/index.84e5a15d.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.58ca0dca.js","_app/immutable/chunks/index.79a9c734.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-621c19b6.js'),
			() => import('./chunks/1-24cf7671.js'),
			() => import('./chunks/2-55cb4bdc.js'),
			() => import('./chunks/3-b8b31e26.js'),
			() => import('./chunks/4-fd4a619f.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/all",
				pattern: /^\/api\/all\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-02ae469c.js')
			},
			{
				id: "/api/single",
				pattern: /^\/api\/single\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-36658c23.js')
			},
			{
				id: "/single",
				pattern: /^\/single\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/single/[slug]",
				pattern: /^\/single\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
