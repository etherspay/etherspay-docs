import { meta } from "../../constants/meta";
import { LinksGroupProps } from "./LinksGroup/LinksGroup";

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: "Help",
    data: [
      {
        type: "link",
        label: "Contact sales",
        link: "https://etherspay.com/contact/sales",
      },
      { type: "gatsby", label: "About Mantine", link: "/pages/about/" },
      { type: "gatsby", label: "Changelog", link: "/pages/changelog/" },
    ],
  },

  {
    title: "Community",
    data: [
      { type: "link", label: "Chat on Discord", link: meta.discordLink },
      { type: "link", label: "Follow on Twitter", link: meta.twitterLink },
      {
        type: "link",
        label: "Follow on Github",
        link: "https://github.com/etherspay",
      },
      {
        type: "link",
        label: "GitHub discussions",
        link: "https://github.com/etherspay/discussions",
      },
    ],
  },
  {
    title: "Developers",
    data: [
      { type: "link", label: "", link: meta.uiLink },
      { type: "link", label: "Documentation", link: meta.docsLink },
      {
        type: "link",
        label: "Github organization",
        link: meta.gitHubLinks.organization,
      },
      { type: "link", label: "npm organization", link: meta.npmLink },
    ],
  },
];
