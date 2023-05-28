import { createStyles, rem } from "@mantine/core";

export default createStyles((theme) => ({
  nav: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
}));
