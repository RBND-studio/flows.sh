// Keeps SVG markup in the repo minified, so it doesn't drift back to editor-exported precision
// (2 decimals is invisible at the sizes these render at).
//
// Covers every git-tracked (or new, non-ignored) file under the given paths:
//   *.svg  whole file is run through svgo
//   *.tsx  files with inline `<svg>` JSX get their path data (`d="..."`) minified
//
// Paths are relative to the current working directory and default to the whole repo, so a
// workspace can check just itself with `.` (keeps turbo's per-package test cache correct).
//
// `node optimize-svgs.mjs [paths...]`          rewrites files
// `node optimize-svgs.mjs --check [paths...]`  fails if any file isn't optimized yet
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { optimize } from "svgo";

const repoRoot = join(import.meta.dirname, "../../..");

const optimizePathData = (source) =>
  source.replace(/\bd="([^"]+)"/g, (match, d) => {
    const { data } = optimize(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg>`, {
      multipass: true,
      floatPrecision: 2,
      plugins: [{ name: "convertPathData", params: { floatPrecision: 2, transformPrecision: 3 } }],
    });
    const optimized = data.match(/ d="([^"]*)"/)?.[1];
    return optimized ? `d="${optimized}"` : match;
  });

const optimizeSvgFile = (source) => optimize(source, { multipass: true, floatPrecision: 2 }).data;

const optimizers = {
  ".svg": optimizeSvgFile,
  ".tsx": optimizePathData,
};

const args = process.argv.slice(2);
const check = args.includes("--check");
const paths = args.filter((arg) => arg !== "--check");
const prefixes = paths.length
  ? paths.map((path) => relative(repoRoot, resolve(path)).replace(/(?<=.)$/, "/"))
  : [""];
const pathspecs = prefixes.flatMap((prefix) =>
  Object.keys(optimizers).map((ext) => `:(glob)${prefix}**/*${ext}`),
);

const files = execFileSync(
  "git",
  [
    "ls-files",
    "--cached",
    "--others",
    "--exclude-standard",
    "--deduplicate",
    "-z",
    "--",
    ...pathspecs,
  ],
  { cwd: repoRoot, encoding: "utf8" },
)
  .split("\0")
  .filter(Boolean);

let checked = 0;
const changed = [];
for (const file of files) {
  const path = join(repoRoot, file);
  let source;
  try {
    source = readFileSync(path, "utf8");
  } catch {
    continue; // deleted from the working tree but still in the index
  }
  if (file.endsWith(".tsx") && !source.includes("<svg")) continue;
  checked++;
  const output = optimizers[file.slice(file.lastIndexOf("."))](source);
  if (output === source) continue;
  changed.push(file);
  if (!check) writeFileSync(path, output);
}

if (check && changed.length) {
  console.error(`SVG markup is not optimized in:\n  ${changed.join("\n  ")}`);
  console.error("Run `pnpm icons optimize` to fix it.");
  process.exit(1);
}

const changedTsx = changed.filter((file) => file.endsWith(".tsx"));
if (changedTsx.length) {
  // Shorter path data can change how oxfmt wraps the JSX
  execFileSync("pnpm", ["exec", "oxfmt", ...changedTsx], { cwd: repoRoot, stdio: "inherit" });
}
console.log(
  check
    ? `All ${checked} SVG file(s) are optimized.`
    : `Optimized ${changed.length} of ${checked} SVG file(s).`,
);
