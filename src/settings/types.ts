import React from "react";
import { Icon2fa } from "@tabler/icons-react";
import { Frontmatter } from "../types";

export interface MdxNode {
  frontmatter: Frontmatter;
  body: string;
}
export interface Category {
  title: string;
  icon: (props: React.ComponentProps<typeof Icon2fa>) => JSX.Element;
  nodes: MdxNode[];
}

export interface Group {
  title: string;
  categories: Category[];
  uncategorized?: MdxNode[];
}
