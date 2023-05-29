import React from "react";
import {
  Container,
  Text,
  Title,
  SimpleGrid,
  Group,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import useStyles from "./BrowseServices.styles";
import { Link } from "gatsby";
import { IconLink } from "@tabler/icons-react";
import { services } from "../../../constants/services";

export default function BrowseServices() {
  const { classes, theme } = useStyles();

  const links = services.map((item, index) => (
    <UnstyledButton
      component="a"
      href={item.href}
      className={classes.subLink}
      key={index}
    >
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" color="teal" radius="md">
          <item.icon
            size={rem(22)}
            color={
              theme.colorScheme === "dark"
                ? theme.colors.teal[6]
                : theme.colors.teal[7]
            }
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Container size={1100} pb={100}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
          width: "fit-content",
        }}
        to="#browse"
      >
        <Title order={2} id="browse">
          Browse services <IconLink size={16} />
        </Title>
      </Link>
      <SimpleGrid
        cols={3}
        my={20}
        breakpoints={[
          { maxWidth: "62rem", cols: 3, spacing: "md" },
          { maxWidth: "48rem", cols: 2, spacing: "sm" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
      >
        {links}
      </SimpleGrid>
    </Container>
  );
}
