import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../layouts/Layout";

const MdxPage: React.FC = ({ data, children }: any) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export const Head = ({ data }: any) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default MdxPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
