import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";

export default function Logo() {
  return (
    <Link to="/">
      <StaticImage
        src="../images/etherspay-logo-text.svg"
        alt="Etherspay Docs"
        width={130}
      />
    </Link>
  );
}
