import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  titleXxl: {
    value: {
      fontStyle: "normal",
      fontWeight: { base: "750", md: "800" },
      fontSize: { base: "40px", sm: "50px", md: "76px" },
      lineHeight: { base: "52px", sm: "64px", md: "80px" },
      fontFamily: "var(--font-mona-sans)",
    },
  },
  titleXl: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "34px", sm: "42px", md: "60px" },
      lineHeight: { base: "44px", sm: "56px", md: "76px" },
      fontFamily: "var(--font-mona-sans)",
    },
  },
  titleL: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "30px", sm: "34px", md: "48px" },
      lineHeight: { base: "40px", sm: "44px", md: "60px" },
      fontFamily: "var(--font-mona-sans)",
    },
  },
  titleM: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "26px", sm: "28px", md: "38px" },
      lineHeight: { base: "32px", sm: "32px", md: "48px" },
      fontFamily: "var(--font-mona-sans)",
    },
  },
  titleS: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "24px", sm: "24px", md: "30px" },
      lineHeight: { base: "32px", sm: "32px", md: "40px" },
      fontFamily: "var(--font-mona-sans)",
    },
  },
  titleXs: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "20px", sm: "20px", md: "24px" },
      lineHeight: { base: "28px", sm: "28px", md: "32px" },
      fontFamily: "var(--font-mona-sans)",
    },
  },
  subtitleL: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: "18px",
      lineHeight: "28px",
      fontFamily: "var(--font-mona-sans)",
    },
  },
  subtitleM: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "var(--font-mona-sans)",
    },
  },
  subtitleS: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "var(--font-mona-sans)",
    },
  },
  bodyL: {
    value: {
      fontStyle: "normal",
      fontWeight: "450",
      fontSize: "18px",
      lineHeight: "28px",
      fontFamily: "var(--font-mona-sans)",
    },
  },
  bodyM: {
    value: {
      fontStyle: "normal",
      fontWeight: "450",
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "var(--font-mona-sans)",
    },
  },
  bodyS: {
    value: {
      fontStyle: "normal",
      fontWeight: "450",
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "var(--font-mona-sans)",
    },
  },
});
