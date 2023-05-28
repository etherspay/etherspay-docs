// Kill error TS2307: Cannot find module 'xxx' or its corresponding type declarations. for .svg files
declare module "*.svg" {
  const content: string;
  export default content;
}
