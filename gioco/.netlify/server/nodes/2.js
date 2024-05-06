

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0paKGi9q.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.QOqH-36i.js"];
export const stylesheets = ["_app/immutable/assets/2.2aGqEDXk.css"];
export const fonts = [];
