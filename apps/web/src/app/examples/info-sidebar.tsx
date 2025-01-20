import { css } from "@flows/styled-system/css";
import { Flex, Wrap } from "@flows/styled-system/jsx";
import { Environment16, GitHub16 } from "icons";
import { type ReactNode } from "react";
import { Badge, Icon, Text } from "ui";

export type InfoSidebarProps = {
  links: {
    liveDemo: string;
    sourceCode: string;
  };
  framework: ReactNode;
  tags: string[];
};

export const InfoSidebar = ({ links, framework, tags }: InfoSidebarProps): ReactNode => {
  return (
    <Flex flexDirection="column" width="100%" md={{ maxWidth: 220 }}>
      <Flex flexDirection="column" gap="space8">
        <Link icon={Environment16} href={links.liveDemo}>
          Open in new tab
        </Link>
        <Link icon={GitHub16} href={links.sourceCode}>
          View source code
        </Link>
      </Flex>

      <Text as="h2" mt="space24" mb="space4" variant="titleM">
        Framework
      </Text>
      {framework}

      <Text as="h2" mt="space24" mb="space4" variant="titleM">
        Tags
      </Text>
      <Wrap gap="space4">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </Wrap>
    </Flex>
  );
};

const Link = ({ href, children, icon }): ReactNode => {
  return (
    <Flex textWrap="nowrap" alignItems="center" gap="space8">
      <Icon color="newFg" icon={icon} />
      <a target="_blank" className={css({ textStyle: "bodyM" })} href={href} rel="noopener">
        {children}
      </a>
    </Flex>
  );
};
