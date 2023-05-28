import React from "react";
import { DEFAULT_THEME, ScrollArea, rem } from "@mantine/core";
import NavbarMainLink from "./NavbarMainLink/NavbarMainLink";
import NavbarDocsCategory from "./NavbarDocsCategory/NavbarDocsCategory";
import useStyles from "./Navbar.styles";
import { MantineLogo } from "@mantine/ds";
import { IconRocket, IconStar, IconCode } from "@tabler/icons-react";

const mainLinks = [
  {
    to: "/pages/getting-started/",
    label: "Getting started",
    color: DEFAULT_THEME.colors.blue[5],
    icon: IconRocket,
  },
  {
    to: "/pages/basics/",
    label: "Learn the basics",
    color: DEFAULT_THEME.colors.violet[5],
    icon: IconStar,
  },
  {
    to: "/pages/about/",
    label: "About Mantine",
    color: DEFAULT_THEME.colors.indigo[5],
    icon: (props: any) => <MantineLogo type="mark" {...props} />,
    rawIcon: true,
  },
  {
    to: "https://ui.mantine.dev/",
    label: "Mantine UI",
    color: DEFAULT_THEME.colors.cyan[5],
    icon: (props: any) => (
      <MantineLogo type="mark" variant="ui.mantine.dev" {...props} />
    ),
    rawIcon: true,
  },
  {
    to: "/pages/contributing/",
    label: "Contribute",
    color: "#000",
    icon: IconCode,
  },
];

interface NavbarProps {
  //   data: ReturnType<typeof getDocsData>;
  data: any;
  opened: boolean;
  onClose(): void;
}

export default function Navbar({ data, opened, onClose }: NavbarProps) {
  const { classes, cx } = useStyles();

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.color}
      icon={<item.icon size={rem(item.rawIcon ? 30 : 18)} stroke={2.2} />}
      onClick={onClose}
      rawIcon={item.rawIcon}
    >
      {item.label}
    </NavbarMainLink>
  ));

  const docs = data.map((group) => (
    <NavbarDocsCategory group={group} key={group.group} onLinkClick={onClose} />
  ));

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: opened })}>
      <ScrollArea h="100vh" type="scroll">
        <div className={classes.body}>
          {main}
          <div className={classes.docs}>{docs}</div>
        </div>
      </ScrollArea>
    </nav>
  );
}
