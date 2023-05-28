import React from "react";
import { Container, Text, Group, Button, TextInput } from "@mantine/core";
import { TwitterButton, DiscordButton } from "@mantine/ds";
import { LinksGroup } from "./LinksGroup/LinksGroup";
import { FOOTER_LINKS_DATA } from "./data";
import useStyles from "./Footer.styles";
import Logo from "../Logo";

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const { classes, cx } = useStyles();
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

  return (
    <>
      {/* <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}> */}
      <div className={cx(classes.wrapper)}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Logo />
              <Text className={classes.description} size="sm">
                Unified Web3 solutions for the modern internet
              </Text>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Copyright &copy; {new Date().getFullYear()} Etherspay, All
                rights reserved.
              </Text>

              <div>
                <Text color="dimmed" size="xs">
                  Signup for developer updates
                </Text>
                <div className={classes.controls}>
                  <TextInput
                    type="email"
                    placeholder="Your email"
                    classNames={{
                      input: classes.input,
                      root: classes.inputWrapper,
                    }}
                  />
                  <Button className={classes.control} variant="default">
                    Signup
                  </Button>
                </div>
              </div>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}
