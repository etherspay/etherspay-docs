import React from "react";
import type { PageProps } from "gatsby";
import Layout from "../../layouts/Layout";
import Hero from "./Hero/Hero";
import TryItOut from "./TryItOut/TryItOut";
import BrowseServices from "./BrowseServices/BrowseServices";
import { Waves } from "./Waves/Waves";

export const HomePage: React.FC<PageProps> = () => {
  return (
    <Layout hideNavbar homePage>
      <Hero />
      <Waves height={40} width={150} />
      <TryItOut />

      <BrowseServices />
    </Layout>
  );
};
