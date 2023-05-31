import { IconCurrencyBitcoin } from "@tabler/icons-react";
import { SERVICES_CATEGORIES } from "../settings/categories/services";
import { Category, MdxNode } from "../settings/types";

export interface DocsQuery {
  allMdx: {
    edges: {
      node: MdxNode;
    }[];
  };
}

export interface Group {
  title: string;
  categories: Category[];
}

function groupDocs(nodes: MdxNode[]) {
  const groups: Group[] = [];

  nodes.forEach((node) => {
    const group = node.frontmatter.group;

    // If the node doesn't have a group, return
    if (!group) {
      return;
    }

    // If the group doesn't exist yet, create it
    if (!groups.some((g) => g.title === group)) {
      groups.push({
        title: group,
        categories: [],
      });
    }

    // Get the category of the node
    const category = node.frontmatter.category;

    // If the category doesn't exist yet, TODO
    if (!category) {
      return;
    }

    groups
      .find((g) => g.title === group)!
      .categories.push({
        title: category,
        icon: IconCurrencyBitcoin,
        nodes: [node],
      });
  });

  return groups;
}

export function getDocsData(query: DocsQuery) {
  const nodes = query.allMdx.edges.map((edge) => edge.node);
  const data = groupDocs(nodes);
  return data;
}
