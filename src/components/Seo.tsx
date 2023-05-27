import React from "react";

interface PageHeadProps {
  title: string;
  description?: string;
  disableTitleTemplate?: boolean;
}

export default function Seo({
  title,
  description,
  disableTitleTemplate,
}: PageHeadProps) {
  const metaDescription =
    description ||
    "Etherspay is a payment gateway that allows you to accept ERC20 payments on your website.";

  return (
    <>
      <title>{disableTitleTemplate ? title : `${title} | Etherspay`}</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta
        name="og:image"
        content="https://storage.googleapis.com/eth-payment-gateway.appspot.com/assets/etherspay-text.png"
      />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="640" />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@etherspay" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  );
}
