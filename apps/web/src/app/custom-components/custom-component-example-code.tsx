import { css } from "@flows/styled-system/css";
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
      extensions={[]}
      lang="jsx"
      className={css({
        borderRadius: "0!",
        border: "none!",
        margin: "0!",
        "& pre": {
          backgroundColor: "transparent!",
        },
      })}
      codeClassName={css({
        fontSize: "12px",
      })}
    >
      {codeExample}
    </CodeHighlight>
  );
};
