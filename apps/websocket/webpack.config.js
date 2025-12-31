const swcDefaultConfig =
  require("@nestjs/cli/lib/compiler/defaults/swc-defaults").swcDefaultsFactory().swcOptions;
const nodeExternals = require("webpack-node-externals");

const nodeEnv = process.env.NODE_ENV ?? "development";

const workspacePackages = ["db", "shared", "shared-backend", "shared-private"];
const allowlistRegex = new RegExp(`^(${workspacePackages.join("|")})(/.*)?$`);

module.exports = {
  // We're not setting mode, because production mode will simplify DTO names which will result in errors
  // mode,
  optimization: {
    nodeEnv,
  },
  externals: [
    nodeExternals({
      allowlist: [allowlistRegex],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: swcDefaultConfig,
        },
      },
    ],
  },
};
