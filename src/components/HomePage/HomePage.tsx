import * as React from "react";
import type { PageProps } from "gatsby";
import Seo from "../Seo";
import Header from "../Header/Header";
import Layout from "../../layouts/Layout";
import { Footer } from "../Footer/Footer";

export const HomePage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <Header
          navbarOpened
          toggleNavbar={() => {
            console.log("toggleNavbar");
          }}
        />
        <Footer />
      </Layout>
    </>
  );
};
