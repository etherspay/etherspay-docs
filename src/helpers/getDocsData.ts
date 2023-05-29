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
  // Create a new groups object, every group will be an array of nodes
  // const groupedNodes = {
  //   groups: {} as { [group: string]: Node[] },
  // };

  const groups = {} as { [group: string]: Node[] };

  // Loop through all nodes
  nodes.forEach((node) => {
    // Get the group name from the node frontmatter
    const group = node.frontmatter.group;

    // If the node doesn't have a group, return
    if (!group) {
      return;
    }

    // If the group doesn't exist yet, create it
    if (!groups[group!]) {
      groups[group!] = [];
    }

    // Add the node to the group
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
