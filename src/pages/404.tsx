import React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../layouts/Layout";
import Seo from "../components/Seo";
import { Title, Container, Text, Button, Group } from "@mantine/core";

const PageNotFound: React.FC<PageProps> = () => {
  return (
    <Layout hideFooter>
      <Container size={1100} py={50}>
        <Title order={1}>Page not found</Title>
        <Text my={15}>
          You've found a completely secret place on the Etherspay Documentation.
          Unfortunately, this is only a 404 page. If you've landed on this page
          from a link on the Etherspay Documentation, please create an issue.
        </Text>
        <Group spacing={10}>
          <Button variant="default" component={Link} to="/">
            Take me home
          </Button>
          <Button
            variant="light"
            component="a"
            href="https://github.com/etherspay/docs/issues/new"
          >
            Create an issue
          </Button>
        </Group>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Page not found" />;
export default PageNotFound;
