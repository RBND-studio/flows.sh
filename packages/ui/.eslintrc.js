module.exports = {
  root: true,
  extends: ["custom"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "no-html-link-for-pages": 0,
        "@next/next/no-html-link-for-pages": 0,
      },
    },
  ],
};
