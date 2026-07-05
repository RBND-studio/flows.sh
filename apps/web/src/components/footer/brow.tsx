import { StatusBadge } from "components/status-badge";
import { ThemeSwitch } from "./theme-switch";
import { Text } from "ui";
import { links } from "lib/links";
import { css } from "@flows/styled-system/css";
import { Section } from "components/ui/section";

export const Brow = () => {
  return (
    <Section
      sideBorders
      decorator="corner"
      backgroundColor="pane.bg.web"
      borderBottomWidth={1}
      borderBottomColor="border.neutral"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="space24"
      px={{ base: "space24", md: "space40" }}
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: "space24", md: "space8" }}
      position="relative"
    >
      <StatusBadge />
      <ThemeSwitch />
      <Text color="fg.neutral.subtle" variant="bodyS">
        © {new Date().getFullYear()}{" "}
        <a
          target="_blank"
          href={links.rbnd}
          rel="noopener"
          className={css({ fontWeight: "600", _hover: { textDecoration: "underline" } })}
        >
          RBND studio s.r.o.
        </a>
      </Text>
    </Section>
  );
};
