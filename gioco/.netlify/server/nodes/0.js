

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.XifVLHFP.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.QOqH-36i.js"];
export const stylesheets = ["_app/immutable/assets/0.N3Ea7l2N.css"];
export const fonts = [];
