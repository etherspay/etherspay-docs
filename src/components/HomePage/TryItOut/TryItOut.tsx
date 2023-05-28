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
} from "@tabler/icons-react";
import StartPayment from "./Demos/StartPayment";

export default function TryItOut() {
  const { classes, cx } = useStyles();

  const data = [
    {
      demo: StartPayment,
      icon: IconForms,
      name: "Inputs",
      description: "20+ input components",
    },
    {
      demo: StartPayment,
      icon: IconCalendar,
      name: "Date pickers",
      description: "Calendar, date pickers, time inputs",
    },
    {
      demo: StartPayment,
      icon: IconStack2,
      name: "Overlays & Navigation",
      description: "Modal, HoverCard, Tabs, Stepper",
    },
    {
      demo: StartPayment,
      icon: IconNotebook,
      name: "Content",
      description: "Accordion, Timeline",
    },
    {
      demo: StartPayment,
      icon: IconBold,
      name: "Rich text editor",
      description: "Tiptap based rich text editor",
    },
    {
      demo: StartPayment,
      icon: IconSlideshow,
      name: "Carousel",
      description: "Embla based carousel",
    },
  ];

  return <DemoTabs data={data} />;
}
