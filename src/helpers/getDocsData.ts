import { IconCurrencyBitcoin } from "@tabler/icons-react";
import { SERVICES_CATEGORIES } from "../settings/categories/services";
import { Category, Group, MdxNode } from "../settings/types";
import { categorized } from "../settings";

export interface DocsQuery {
  allMdx: {
    edges: {
      node: MdxNode;
    }[];
  };
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
        uncategorized: [],
      });
    }

    // Get the category of the node
    const category = node.frontmatter.category;

    // If the category doesn't exist yet, TODO
    if (!category) {
      return;
    }

    // If the category already exists, add the node to it
    if (
      // The category exists in the group
      groups
        .find((g) => g.title === group)!
        .categories.some((c) => c.title === category)
    ) {
      groups
        .find((g) => g.title === group)!
        .categories.find((c) => c.title === category)!
        .nodes.push(node);
      return;
    }

    // If there isn't a category, return uncategorized node
    if (!category || !categorized[group].categories[category]) {
      groups.find((g) => g.title === group)!.uncategorized?.push(node);

      return;
    }

    groups
      .find((g) => g.title === group)!
      .categories.push({
        title: category,
        icon: categorized[group].categories[category].icon,
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
