

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8e458d5c.js","_app/immutable/chunks/scheduler.cd6d3464.js","_app/immutable/chunks/index.526742a7.js"];
export const stylesheets = [];
export const fonts = [];
