import React from "react";
import { DefaultProps, Group, Tooltip } from "@mantine/core";
import DiscordControl from "./DiscordControl";
import GithubControl from "./GithubControl";
import { meta } from "../../../constants/meta";
import ColorSchemeControl from "./ColorSchemeControl";
import SearchControl from "./SearchControl";

interface HeaderControlsProps extends DefaultProps {
  onSearch(): void;
}

export default function HeaderControls({
  onSearch,

  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group spacing="xs" {...others}>
        <SearchControl onClick={onSearch} />
        <DiscordControl />
        <GithubControl link={meta.gitHubLinks.organization} />

        <ColorSchemeControl />
      </Group>
    </Tooltip.Group>
  );
}
