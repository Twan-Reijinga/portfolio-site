

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e617008b.js","_app/immutable/chunks/scheduler.cd6d3464.js","_app/immutable/chunks/index.526742a7.js","_app/immutable/chunks/singletons.5b4fd3d3.js"];
export const stylesheets = [];
export const fonts = [];
