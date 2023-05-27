import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Documentation" />
      <main>Hello World</main>
    </>
  );
};

export default IndexPage;
