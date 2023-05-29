import React from "react";
import { ScrollArea, rem } from "@mantine/core";
import NavbarMainLink from "./NavbarMainLink/NavbarMainLink";
import useStyles from "./Navbar.styles";
import { IconRocket, IconCode, IconHandRock } from "@tabler/icons-react";
import NavbarDocsCategory from "./NavbarDocsCategory/NavbarDocsCategory";

const mainLinks = [
  {
    to: "/pages/welcome/",
    label: "Welcome",
    color: "teal",
    icon: IconHandRock,
  },
  {
    to: "/pages/getting-started/",
    label: "Getting started",
    color: "teal",
    icon: IconRocket,
  },
  {
    to: "/pages/contributing/",
    label: "Contribute",
    color: "teal",
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
      icon={<item.icon size={rem(18)} stroke={2} />}
      onClick={onClose}
    >
      {item.label}
    </NavbarMainLink>
  ));

  // const docs = data.map((group) => (
  //   <NavbarDocsCategory group={group} key={group.group} onLinkClick={onClose} />
  // ));

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: opened })}>
      <ScrollArea h="100vh" type="scroll">
        <div className={classes.body}>
          {main}
          {/* <div className={classes.docs}>{docs}</div> */}
        </div>
      </ScrollArea>
    </nav>
  );
}
