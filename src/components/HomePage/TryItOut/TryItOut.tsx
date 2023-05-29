import React from "react";
import useStyles from "./TryItOut.styles";
import { DemoTabs } from "./DemoTabs/DemoTabs";
import {
  IconForms,
  IconCalendar,
  IconStack2,
  IconNotebook,
  IconBold,
  IconSlideshow,
  IconCurrencyBitcoin,
  IconBox,
  IconReceipt,
  IconLink,
  IconRecycle,
} from "@tabler/icons-react";
import StartPayment from "./Demos/StartPayment";

export default function TryItOut() {
  const { classes, cx } = useStyles();

  const data = [
    {
      demo: StartPayment,
      icon: IconCurrencyBitcoin,
      name: "Make a payment",
      description: "Initiate a payment",
    },
    {
      demo: StartPayment,
      icon: IconBox,
      name: "Products",
      description: "Create a new product programmatically",
    },
    {
      demo: StartPayment,
      icon: IconReceipt,
      name: "Coupons",
      description: "Issue a coupon to customers",
    },
    {
      demo: StartPayment,
      icon: IconNotebook,
      name: "Balance",
      description: "Fetch your project balance",
    },
    {
      demo: StartPayment,
      icon: IconLink,
      name: "Payment links",
      description: "Create customized payment links",
    },
    {
      demo: StartPayment,
      icon: IconRecycle,
      name: "Escrow session",
      description: "Create an escrow session",
    },
  ];

  return <DemoTabs data={data} />;
}
