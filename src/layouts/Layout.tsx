import React, { useState, useEffect } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
  rem,
  Box,
  Container,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
import { actions } from "../constants/SpotlightActions";
import Header from "../components/Header/Header";
import { HEADER_HEIGHT } from "../components/Header/HeaderDesktop.styles";
import { Footer } from "../components/Footer/Footer";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import { getDocsData } from "../helpers/getDocsData";
import { NAVBAR_WIDTH } from "../components/Navbar/Navbar.styles";

const THEME_KEY = "mantine-color-scheme";

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            category
            slug
            description
            product
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

  const [navBar, setNavBar] = useState(true);
  const [navbarOpened, setNavbarState] = useState(false);
  // const shouldRenderHeader = !shouldExcludeHeader(location.pathname);
  // const shouldRenderNavbar = !shouldExcludeNavbar(location.pathname) || navbarCollapsed;

  // const data = getDocsData(useStaticQuery(query));
  // getDocsData(useStaticQuery(query));

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
                  setNavBar(!navBar);
                }}
              />
              {hideNavbar ? null : (
                <Navbar
                  data={[]}
                  opened={navbarOpened}
                  onClose={() => setNavbarState(false)}
                />
              )}

              <div
                style={{
                  marginTop: rem(HEADER_HEIGHT),
                  marginLeft: rem(hideNavbar ? 0 : NAVBAR_WIDTH),
                }}
              >
                {/* <LayoutInner location={location}>{children}</LayoutInner> */}

                {homePage ? (
                  children
                ) : (
                  <Container size={1100} pt={30} pb={rem(80)}>
                    {children}
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
