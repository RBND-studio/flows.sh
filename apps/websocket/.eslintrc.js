module.exports = {
  extends: ["custom/library", "plugin:drizzle/all"],
  plugins: ["drizzle"],
  rules: {
    "@typescript-eslint/no-extraneous-class": "off",
    camelcase: "off",
  },
};
