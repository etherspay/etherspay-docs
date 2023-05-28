import React, { useState, useEffect } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
  rem,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
import { actions } from "../constants/SpotlightActions";

const THEME_KEY = "mantine-color-scheme";

export default function Layout({ children, location }: any) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    const gatsbyFocusWrapper = document.getElementById("gatsby-focus-wrapper");
    if (gatsbyFocusWrapper) {
      gatsbyFocusWrapper.removeAttribute("style");
      gatsbyFocusWrapper.removeAttribute("tabIndex");
    }
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          headings: { fontFamily: "Greycliff CF, sans serif" },
        }}
      >
        <SpotlightProvider shortcut="mod + K" actions={actions}>
          <Global
            styles={(theme) => ({
              body: {
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[1]
                    : theme.colors.gray[8],
                fontSize: rem(15),
              },
            })}
          />
          <div>
            {/* <LayoutInner location={location}>{children}</LayoutInner> */}
            {children}
          </div>
        </SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
