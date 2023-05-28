import { Frontmatter } from "../types";

export interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: Frontmatter };
    }[];
  };
}

interface GroupPages {
  query: DocsQuery;

  order: readonly string[];
  group: string;
}

export function getDocsData(query: DocsQuery) {
  console.log(query);
}
