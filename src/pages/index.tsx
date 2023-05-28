import * as React from "react";
import type { PageProps } from "gatsby";
import Seo from "../components/Seo";
import Header from "../components/Header/Header";
import Layout from "../layouts/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Documentation" />

      <Layout>
        <Header
          navbarOpened
          toggleNavbar={() => {
            console.log("toggleNavbar");
          }}
        />
      </Layout>
    </>
  );
};

export default IndexPage;
