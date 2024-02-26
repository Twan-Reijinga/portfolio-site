export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.af3ed92d.js","app":"_app/immutable/entry/app.725b1c41.js","imports":["_app/immutable/entry/start.af3ed92d.js","_app/immutable/chunks/scheduler.cd6d3464.js","_app/immutable/chunks/singletons.5b4fd3d3.js","_app/immutable/entry/app.725b1c41.js","_app/immutable/chunks/scheduler.cd6d3464.js","_app/immutable/chunks/index.526742a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
