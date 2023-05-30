import { Frontmatter } from "../types";

export interface DocsQuery {
  allMdx: {
    edges: {
      node: { frontmatter: Frontmatter };
    }[];
  };
}

export interface Node {
  frontmatter: Frontmatter;
}

function groupDocs(nodes: Node[]) {
  const groups = {} as { [group: string]: Node[] };

  nodes.forEach((node) => {
    const group = node.frontmatter.group;

    // If the node doesn't have a group, return
    if (!group) {
      return;
    }

    // If the group doesn't exist yet, create it
    if (!groups[group!]) {
      groups[group!] = [];
    }

    groups[group!].push(node);
  });

  return groups;
}

export function getDocsData(query: DocsQuery) {
  const nodes = query.allMdx.edges.map((edge) => edge.node);
  const data = groupDocs(nodes);
  console.log(data);
  return data;
}
