import type { JSX } from "react";
import { CodeHighlight } from "ui/server";

const codeExample = `export const Banner = (props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        {!props.hideCloseButton && (
          <button onClick={props.close}>
            Close
          </button>
        )}
      </div>
      <div>
        <p>{props.description}</p>
        <a href={props.buttonLink}>
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};
`;

export const CustomComponentExampleCode = (): JSX.Element => {
  return (
    <CodeHighlight
      lineNumbers
      lang="jsx"
      hideCopyButton
      css={{
        borderRadius: "0",
        borderWidth: "0",
        my: "0",
        "& pre": {
          // shiki sets the background as an inline style
          backgroundColor: "transparent!",
        },
      }}
    >
      {codeExample}
    </CodeHighlight>
  );
};
