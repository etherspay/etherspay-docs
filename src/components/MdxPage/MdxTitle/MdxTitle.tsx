import React from "react";
import { Title, rem } from "@mantine/core";
import useStyles from "./MdxTitle.styles";

export default function MdxTitle({
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const { classes } = useStyles();

  // generate an id from the children, no spaces, all lowercase, and dashes instead of spaces

  const gId = children!
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  if (order === 1) {
    return (
      <Title
        className={classes.title}
        sx={{ fontWeight: 900, fontSize: rem(44) }}
      >
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={gId} className={classes.offset} />
      <Title
        order={order}
        className={classes.title}
        sx={{ fontWeight: 600 }}
        {...others}
      >
        <a className={classes.link} href={`#${gId}`}>
          {children}
        </a>
      </Title>
    </>
  );
}
