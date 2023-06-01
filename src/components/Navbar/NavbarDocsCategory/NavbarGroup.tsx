import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { IconChevronDown } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { useLocation } from "@reach/router";
import { getDocsData } from "../../../helpers/getDocsData";
import useStyles from "./NavbarGroup.styles";
import { HEADER_HEIGHT } from "../../Header/HeaderDesktop.styles";
import { Category, Group } from "../../../settings/types";

interface NavbarGroupCategoryProps {
  group: Group;
}

export default function NavbarGroup({ group }: NavbarGroupCategoryProps) {
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const itemRefs = useRef<Record<string, HTMLElement>>({});

  const categorized = group.categories?.map((category) => {
    const links = category.nodes.map((node) => (
      <Link
        key={node.frontmatter.slug}
        className={classes.link}
        activeClassName={classes.linkActive}
        to={node.frontmatter.slug}

        // ref={(r) => {
        //   itemRefs.current[node.frontmatter.slug] = r;
        // }}
      >
        {node.frontmatter.title}
      </Link>
    ));

    return (
      <div className={classes.innerCategory} key={category.title}>
        <Text className={classes.innerCategoryTitle} tt="capitalize">
          <category.icon className={classes.innerCategoryIcon} />
          {category.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <div
      className={cx(classes.category, {
        [classes.categoryCollapsed]: false,
      })}
    >
      <button
        className={classes.header}
        type="button"
        onClick={() => setCollapsed((c) => !c)}
      >
        <IconChevronDown
          className={cx(classes.icon, { [classes.iconCollapsed]: collapsed })}
        />
        <Text
          className={classes.title}
          weight={700}
          size="xs"
          transform="uppercase"
        >
          {group.title}
        </Text>
      </button>

      {categorized}
    </div>
  );
}
