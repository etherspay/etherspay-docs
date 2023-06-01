import React, { useState, useEffect } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
  rem,
  Box,
  Container,
  Anchor,
  em,
} from "@mantine/core";
import { useHotkeys, useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
import { actions } from "../constants/SpotlightActions";
import Header from "../components/Header/Header";
import { HEADER_HEIGHT } from "../components/Header/HeaderDesktop.styles";
import { Footer } from "../components/Footer/Footer";
import { Link, graphql, useStaticQuery } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import { getDocsData } from "../helpers/getDocsData";
import {
  NAVBAR_BREAKPOINT,
  NAVBAR_WIDTH,
} from "../components/Navbar/Navbar.styles";
import MDXProvider from "../components/MdxPage/MdxProvider/MdxProvider";

const THEME_KEY = "mantine-color-scheme";

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            group
            slug
            description
            category
          }
        }
      }
    }
  }
`;

export interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideNavbar?: boolean;
  homePage?: boolean;
}

export default function Layout({
  children,
  hideFooter,
  hideNavbar,
  homePage,
}: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const [navBar, setNavBar] = useState(false);
  // const shouldRenderHeader = !shouldExcludeHeader(location.pathname);
  // const shouldRenderNavbar = !shouldExcludeNavbar(location.pathname) || navbarCollapsed;

  const data = getDocsData(useStaticQuery(query));

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
          primaryColor: "teal",
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
          <main>
            <Box
              sx={(theme) => ({
                position: "relative",
                zIndex: 1,
                boxShadow: hideFooter ? "" : theme.shadows.sm,
              })}
            >
              <Header
                navbarOpened={navBar}
                toggleNavbar={() => {
                  console.log("toggle navbar");
                  setNavBar((o) => !o);
                }}
              />
              {!hideNavbar && (
                <Navbar
                  data={data}
                  opened={navBar}
                  onClose={() => setNavBar(false)}
                />
              )}

              {navBar && (
                <Navbar
                  data={data}
                  opened={navBar}
                  onClose={() => setNavBar(false)}
                />
              )}

              <div
                style={{
                  marginTop: rem(HEADER_HEIGHT),
                  marginLeft: rem(
                    hideNavbar
                      ? 0
                      : useMediaQuery(`(max-width: ${em(NAVBAR_BREAKPOINT)})`)
                      ? 0
                      : NAVBAR_WIDTH
                  ),
                }}
              >
                {/* <LayoutInner location={location}>{children}</LayoutInner> */}

                {homePage ? (
                  children
                ) : (
                  <Container size={1100} pt={30} pb={rem(80)}>
                    <MDXProvider>{children}</MDXProvider>
                  </Container>
                )}
                {!hideFooter && <Footer />}
              </div>
            </Box>
          </main>
        </SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
