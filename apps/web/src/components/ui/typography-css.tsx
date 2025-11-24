import { css } from "@flows/styled-system/css";

// These styles are used for basic content pages like /privacy or /terms

export const paragraphCss = css({
  my: "space24",

  "& a": {
    color: "newFg.primary",
    textDecoration: "underline",
  },
});

export const bulletCss = css({
  marginLeft: "space16",
  mb: "space8",
});

export const ulCss = css({
  listStylePosition: "outside",
  listStyle: "disc",
});

export const olCss = css({
  listStylePosition: "outside",
  listStyle: "decimal",
});

export const headingCss = css({
  mt: "space40",
  mb: "space24",
});
