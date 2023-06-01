import React from "react";
import { Title, rem } from "@mantine/core";
import useStyles from "./MdxTitle.styles";

export default function MdxTitle({
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const { classes } = useStyles();

  const uId = children!
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
      <div id={uId} className={classes.offset} />
      <Title
        order={order}
        className={classes.title}
        sx={{ fontWeight: 600 }}
        {...others}
      >
        <a className={classes.link} href={`#${uId}`}>
          {children}
        </a>
      </Title>
    </>
  );
}
