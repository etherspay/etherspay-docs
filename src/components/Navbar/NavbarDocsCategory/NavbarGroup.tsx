import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { IconChevronDown } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { useLocation } from "@reach/router";
import { getDocsData } from "../../../helpers/getDocsData";
import useStyles from "./NavbarGroup.styles";
import { HEADER_HEIGHT } from "../../Header/HeaderDesktop.styles";
import { Group } from "../../../settings/types";

interface NavbarGroupCategoryProps {
  group: Group[];
  onLinkClick(): void;
}

export default function NavbarGroup({
  group,
  onLinkClick,
}: NavbarGroupCategoryProps) {
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const itemRefs = useRef<Record<string, HTMLElement>>({});

  // useEffect(() => {
  //   if (hasActiveLink(group, pathname) && itemRefs.current[pathname]) {
  //     const element = itemRefs.current[pathname];
  //     const height = typeof window !== "undefined" ? window.innerHeight : 0;
  //     const { top, bottom } = element.getBoundingClientRect();

  //     if (top < HEADER_HEIGHT || bottom > height) {
  //       element.scrollIntoView({ block: "center" });
  //     }
  //   }
  // }, [pathname]);

  // const uncategorized = (

  //     : group.uncategorized
  // ).map((link: any) => (
  //   <Link
  //     key={link.slug}
  //     className={classes.link}
  //     activeClassName={classes.linkActive}
  //     to={link.slug}
  //     onClick={onLinkClick}
  //     ref={(r: any) => {
  //       itemRefs.current[link.slug] = r;
  //     }}
  //   >
  //     {link.title}
  //   </Link>
  // ));

  const categorized = !Array.isArray(group.pages)
    ? []
    : group.groups.map((part: any) => {
        if (!part || !Array.isArray(part.pages)) {
          return null;
        }
        const links = part.pages.map((link: any) => (
          <Link
            key={link.slug}
            className={classes.link}
            activeClassName={classes.linkActive}
            to={link.slug}
            onClick={onLinkClick}
            ref={(r: any) => {
              itemRefs.current[link.slug] = r;
            }}
          >
            {link.title}
          </Link>
        ));

        return (
          <div className={classes.innerCategory} key={part.category.title}>
            <Text className={classes.innerCategoryTitle}>
              <part.category.icon className={classes.innerCategoryIcon} />
              {part.category.title}
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
          {group.group.replace("-", " ")}
        </Text>
      </button>
      {!collapsed && uncategorized}
      {!collapsed && categorized}
    </div>
  );
}
