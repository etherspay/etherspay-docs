import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Code, Anchor, rem, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Link } from "gatsby";
import MdxTitle from "../MdxTitle/MdxTitle";
import DataTable from "../DataTable/DataTable";

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) =>
  <MdxTitle order={order} {...props} />;

export const components = {
  DataTable,
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  inlineCode: (props: any) => <Code {...props} />,
  a: (props: any) => {
    // IF link is external, use <Anchor> component, else use <Link> component
    if (!props.href.startsWith("https://docs.etherspay.com")) {
      return <Anchor {...props} />;
    } else {
      return <Link {...props} />;
    }
  },
  p: (props: any) => <p {...props} style={{ lineHeight: 1.55 }} />,
  ul: (props: any) => (
    <ul
      {...props}
      style={{ lineHeight: 1.65, marginBottom: rem(20), marginTop: rem(10) }}
    />
  ),
  li: (props: any) => <li {...props} style={{ marginTop: rem(4) }} />,
  pre: (props: any) => {
    const matches = (props.children.props.className || "").match(
      /language-(?<lang>.*)/
    );

    return (
      <Prism
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
        mb={20}
      >
        {props.children.props.children}
      </Prism>
    );
  },
};

export default function MdxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
