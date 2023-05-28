import { createStyles, em, keyframes, rem } from "@mantine/core";

const fadeId = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(-${rem(20)}) scale(0.95) skewX(-2deg)`,
  },
  to: { opacity: 1, transform: "translateY(0) scale(1) rotate(0)" },
});

export default createStyles(
  (theme, { shouldAnimate }: { shouldAnimate: boolean }) => ({
    root: {
      paddingTop: rem(100),
      paddingBottom: rem(100),
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],

      [theme.fn.smallerThan("sm")]: {
        paddingTop: rem(60),
        paddingBottom: rem(60),
      },
    },

    controls: {
      position: "relative",
    },

    controlsIndicator: {
      pointerEvents: "none",
      position: "absolute",
      left: 0,
      right: 0,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      boxShadow: theme.shadows.md,
      borderRadius: theme.radius.md,
      transition: "transform 250ms ease",
      zIndex: 2,
    },

    control: {
      width: "100%",
      padding: `${theme.spacing.md} ${theme.spacing.lg}`,
      borderRadius: theme.radius.md,
      position: "relative",
      height: rem(80),

      "&:hover": theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors.dark[8], 0.5)
            : theme.colors.gray[1],
      }),

      [theme.fn.smallerThan("sm")]: {
        height: rem(60),
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      },
    },

    controlInner: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 3,
    },

    controlTitle: {
      fontWeight: 700,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      position: "relative",
      zIndex: 5,

      [theme.fn.smallerThan("sm")]: {
        fontSize: theme.fontSizes.sm,
      },
    },

    controlDescription: {
      [theme.fn.smallerThan("sm")]: {
        fontSize: theme.fontSizes.xs,
      },
    },

    controlIcon: {
      color: theme.colors.teal[6],
      marginRight: theme.spacing.md,
    },

    demo: {
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      animation: shouldAnimate ? `${fadeId} 300ms ease` : "none",

      [theme.fn.smallerThan("md")]: {
        paddingLeft: 0,
        paddingTop: theme.spacing.xl,
      },
    },

    title: {
      display: "inline-block",
      position: "relative",
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      fontSize: rem(42),
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      textAlign: "left",
      marginBottom: `calc(${theme.spacing.xl} * 2)`,
      letterSpacing: 1,
      marginLeft: rem(22),
      textTransform: "uppercase",
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [theme.fn.smallerThan("sm")]: {
        marginBottom: theme.spacing.md,
      },

      "&::before, &::after": {
        content: '""',
        position: "absolute",
        width: rem(10),
        height: rem(10),
      },

      "&::before": {
        top: rem(-14),
        left: rem(-22),
        borderLeft: `${rem(5)} solid transparent`,
        borderTop: `${rem(5)} solid transparent`,
      },

      "&::after": {
        bottom: rem(-14),
        right: rem(-22),
        borderRight: `${rem(5)} solid transparent`,
        borderBottom: `${rem(5)} solid transparent`,
      },

      [`@media (max-width: ${em(600)})`]: {
        fontSize: rem(28),
        marginLeft: 0,

        "&::before, &::after": {
          display: "none",
        },
      },
    },

    white: {
      color: theme.white,
      textShadow: `${rem(1)} ${rem(2)} ${rem(2)} rgba(0, 0, 0, .3)`,

      "&::before, &::after": {
        filter: `drop-shadow(${rem(1)} ${rem(2)} ${rem(2)} rgba(0, 0, 0, .3))`,
        borderColor: theme.white,
      },
    },

    default: {
      "&::before, &::after": {
        borderColor: "inherit",
      },
    },
  })
);
