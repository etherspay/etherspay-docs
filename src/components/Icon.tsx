import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface IconProps {
  width?: number;
  height?: number;
}

export default function Logo({ width, height }: IconProps) {
  return (
    <StaticImage
      src="../images/icon.png"
      alt="Etherspay Icon"
      width={width}
      height={height}
    />
  );
}
