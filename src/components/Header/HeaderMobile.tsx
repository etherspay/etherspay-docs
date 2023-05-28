import React from "react";
import useStyles from "./HeaderMobile.styles";

import { Burger, Button, Group } from "@mantine/core";
import { ColorSchemeControl } from "@mantine/ds";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../Logo";

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export default function HeaderMobile({
  navbarOpened,
  toggleNavbar,
}: HeaderProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <Burger
          opened={navbarOpened}
          size="sm"
          onClick={toggleNavbar}
          aria-label="Toggle navbar"
        />
        <div className={classes.logo}>
          <Logo />
        </div>
        <Group position="right" spacing={5}>
          <ColorSchemeControl />
          <Button
            component="a"
            h={34}
            href="https://etherspay.com/dashboard"
            target="_blank"
            variant="default"
            radius="md"
            size="sm"
          >
            Dashboard
          </Button>
        </Group>
      </div>
    </div>
  );
}
