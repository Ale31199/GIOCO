

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.GJNwcoCL.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.QOqH-36i.js","_app/immutable/chunks/singletons.nqX8jxPW.js"];
export const stylesheets = [];
export const fonts = [];
