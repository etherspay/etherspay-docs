import React from "react";
import { DEFAULT_THEME, ScrollArea, rem } from "@mantine/core";
import NavbarMainLink from "./NavbarMainLink/NavbarMainLink";
import useStyles from "./Navbar.styles";
import {
  IconRocket,
  IconStar,
  IconCode,
  IconHandRock,
} from "@tabler/icons-react";
import Icon from "../Icon";

const mainLinks = [
  {
    to: "/pages/welcome/",
    label: "Welcome",
    color: "teal",
    icon: IconHandRock,
  },
  {
    to: "/pages/getting-started/",
    label: "Getting started",
    color: "teal",
    icon: IconRocket,
  },
  {
    to: "/pages/contributing/",
    label: "Contribute",
    color: "teal",
    icon: IconCode,
  },
  {
    to: "/pages/about/",
    label: "Etherspay Wallet",
    color: "teal",
    icon: (props: any) => <Icon />,
  },
];

interface NavbarProps {
  //   data: ReturnType<typeof getDocsData>;
  data: any;
  opened: boolean;
  onClose(): void;
}

export default function Navbar({ data, opened, onClose }: NavbarProps) {
  const { classes, cx } = useStyles();

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.color}
      icon={<item.icon size={rem(18)} stroke={2} />}
      onClick={onClose}
    >
      {item.label}
    </NavbarMainLink>
  ));

  // const docs = data.map((group) => (
  //   <NavbarDocsCategory group={group} key={group.group} onLinkClick={onClose} />
  // ));

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: opened })}>
      <ScrollArea h="100vh" type="scroll">
        <div className={classes.body}>
          {main}
          {/* <div className={classes.docs}>{docs}</div> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ut.
          Quidem itaque eaque obcaecati eveniet at excepturi natus dolor
          dignissimos qui reprehenderit quisquam omnis rem, et reiciendis
          debitis quasi illo! Ut, accusantium hic! Architecto ullam qui tenetur
          accusamus voluptates quo quos officia amet aspernatur quaerat,
          nesciunt obcaecati consequuntur reiciendis mollitia voluptatibus
          labore adipisci eos sit ducimus quasi culpa! Eos, dolorum! Harum cum
          dolores exercitationem hic nulla doloremque, repellat labore ducimus
          animi neque adipisci consectetur modi. Dolore, reprehenderit nulla,
          repudiandae accusamus tempore error nam ut ab consectetur id,
          architecto pariatur veniam. Totam inventore, nemo nobis eligendi
          quisquam velit quos odio corrupti! Quo facere autem quaerat earum
          dolor illo repellat incidunt molestiae voluptatibus repellendus, eos
          amet saepe nemo consequuntur nostrum quidem officia. Eum non optio
          reiciendis ut dolores dolore minima nesciunt perferendis!
          Reprehenderit modi, eum molestiae commodi eaque, aspernatur in, nam
          totam amet obcaecati atque corrupti consequatur corporis ipsa!
          Accusamus, autem laudantium. Id error, ratione repellendus ut veniam,
          porro ipsam maiores officiis sequi ipsum similique aliquam at cumque
          saepe asperiores quas! Eveniet a unde, fugiat ipsum natus eligendi
          autem iste provident esse! Necessitatibus facilis aspernatur non
          perspiciatis doloremque illum dolor doloribus adipisci nostrum,
          officia vitae, rerum repellat eveniet, possimus corrupti consectetur
          ducimus. Harum numquam deserunt doloremque quisquam ullam voluptates
          veniam aperiam minima! Labore vitae distinctio esse nam quos
          dignissimos excepturi nihil vel commodi iusto natus illum, ipsa
          voluptatem nobis et earum unde dolor in eum reiciendis ut voluptas
          voluptates! Debitis, recusandae necessitatibus. Consectetur similique,
          est consequuntur natus eaque fuga odio commodi facere ipsum amet
          tenetur necessitatibus a impedit tempora minima dicta. Iure animi
          fugit nostrum numquam, exercitationem mollitia consequatur natus
          perferendis eaque. Natus illum neque molestiae adipisci quos hic id
          saepe eveniet reprehenderit praesentium soluta, corrupti, placeat
          omnis nihil laborum magnam in earum quasi perspiciatis delectus
          distinctio quis iste fuga? Ullam, officiis.
        </div>
      </ScrollArea>
    </nav>
  );
}
