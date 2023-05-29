import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface IconProps {
  width?: number;
  height?: number;
}

export default function Icon() {
  return (
    <StaticImage src="../images/icon.png" alt="Etherspay Icon" width={48} />
  );
}
