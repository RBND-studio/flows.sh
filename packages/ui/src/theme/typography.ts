import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  titleXxl: {
    value: {
      fontStyle: "normal",
      fontWeight: { base: "750", md: "800" },
      fontSize: { base: "40px", sm: "50px", md: "76px" },
      lineHeight: { base: "52px", sm: "64px", md: "80px" },
    },
  },
  titleXl: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "34px", sm: "42px", md: "60px" },
      lineHeight: { base: "44px", sm: "56px", md: "76px" },
    },
  },
  titleL: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "30px", sm: "34px", md: "48px" },
      lineHeight: { base: "40px", sm: "44px", md: "60px" },
    },
  },
  titleM: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "26px", sm: "28px", md: "38px" },
      lineHeight: { base: "32px", sm: "32px", md: "48px" },
    },
  },
  titleS: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "24px", sm: "24px", md: "30px" },
      lineHeight: { base: "32px", sm: "32px", md: "40px" },
    },
  },
  titleXs: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: { base: "20px", sm: "20px", md: "24px" },
      lineHeight: { base: "28px", sm: "28px", md: "32px" },
    },
  },
  subtitleL: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
  subtitleM: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  subtitleS: {
    value: {
      fontStyle: "normal",
      fontWeight: "750",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  bodyL: {
    value: {
      fontStyle: "normal",
      fontWeight: "450",
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
  bodyM: {
    value: {
      fontStyle: "normal",
      fontWeight: "450",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  bodyS: {
    value: {
      fontStyle: "normal",
      fontWeight: "450",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});
