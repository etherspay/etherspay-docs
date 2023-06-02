import React from "react";
import { ScrollArea, rem } from "@mantine/core";
import NavbarMainLink from "./NavbarMainLink/NavbarMainLink";
import useStyles from "./Navbar.styles";
import { IconRocket, IconCode, IconHandRock } from "@tabler/icons-react";
import NavbarGroup from "./NavbarDocsCategory/NavbarGroup";
import { Group } from "../../settings/types";
import { getDocsData } from "../../helpers/getDocsData";

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
  data: Group[];
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

  // data var is an object with group name as key and array of docs as value, convert it to array of arrays

  const docs = data.map((group: Group) => (
    <NavbarGroup key={group.title} group={group} />
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
