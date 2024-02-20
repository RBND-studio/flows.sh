import { css } from "@flows/styled-system/css";

export const DocsBanner = (): JSX.Element => {
  return (
    <>
      Flows docs are in early stages and not everything is documented yet. If you have any
      questions, please reach out to us{" "}
      <a
        className={css({
          textDecoration: "underline!",
          fontWeight: "700!",
        })}
        href="mailto:hello@flows.sh"
      >
        hello@flows.sh
      </a>
      .
    </>
  );
};
