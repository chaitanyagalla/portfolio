// Ambient declarations for side-effect CSS imports.
// Next.js handles global CSS at the build level and does not provide these
// type declarations, so TypeScript reports ts(2882) without them.
declare module "*.css";
declare module "@fontsource/*";
declare module "@fontsource-variable/*";
