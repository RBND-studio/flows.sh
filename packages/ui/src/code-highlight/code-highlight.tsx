import { Fragment, type FC, type ReactElement } from "react";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { CodeHighlightDiv, CodeHighlightWrapper } from "./code-highlight-div";
import { CodeTabs } from "./tabs-client";
import { CopyButton } from "./copy-button";
import { css } from "@flows/styled-system/css";

type Props = {
  children: string | { code: string; filename: string; lang: BundledLanguage }[];
  className?: string;
  lineNumbers?: boolean;
  lang: BundledLanguage;
  hideCopyButton?: boolean;
};

const formatCode = ({ code, lang }: { code: string; lang: BundledLanguage }): Promise<string> => {
  return codeToHtml(code, {
    lang,
    defaultColor: "light-dark()",
    themes: {
      light: "github-light-default",
      dark: "github-dark-dimmed",
    },
  });
};

export const CodeHighlight: FC<Props> = async ({
  lineNumbers = true,
  children,
  lang,
  hideCopyButton,
  ...props
}: Props): Promise<ReactElement> => {
  if (typeof children === "string") {
    return (
      <CodeHighlightWrapper className={props.className}>
        <CodeHighlightDiv
          lineNumbers={lineNumbers}
          dangerouslySetInnerHTML={{ __html: await formatCode({ code: children, lang }) }}
        />
        {!hideCopyButton && <CopyButton code={children} />}
      </CodeHighlightWrapper>
    );
  }

  return (
    <CodeHighlightWrapper className={props.className}>
      <CodeTabs tabs={children.map((c) => c.filename)}>
        {await Promise.all(
          children.map(async (c) => {
            const out = await formatCode({ code: c.code, lang: c.lang });
            return (
              <Fragment key={c.filename}>
                <CodeHighlightDiv
                  lineNumbers={lineNumbers}
                  dangerouslySetInnerHTML={{ __html: out }}
                />
                {!hideCopyButton && (
                  <CopyButton
                    code={c.code}
                    className={css({
                      // 10px + Tab List height 32px
                      top: "42px!",
                    })}
                  />
                )}
              </Fragment>
            );
          }),
        )}
      </CodeTabs>
    </CodeHighlightWrapper>
  );
};
