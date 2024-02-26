

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e136d3bd.js","_app/immutable/chunks/scheduler.cd6d3464.js","_app/immutable/chunks/index.526742a7.js"];
export const stylesheets = ["_app/immutable/assets/2.78c498b1.css"];
export const fonts = [];
