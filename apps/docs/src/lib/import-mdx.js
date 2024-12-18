/* eslint-disable no-console -- console script */
// Used to import MDX files from output.txt

const fs = require("node:fs");
const path = require("node:path");

const mdxDirectory = path.join(__dirname, "../pages");
const inputFilePath = path.join(__dirname, "output.txt");

const parseCombinedFile = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const sections = content.split("\n===\n");
  const filesContent = [];

  sections.forEach((section) => {
    // eslint-disable-next-line prefer-named-capture-group -- simple script
    const match = section.match(/File: (.+)\n([\s\S]*)/);
    console.log(match, section);
    if (match) {
      const relativePath = match[1].trim();
      const fileContent = match[2].trim();
      filesContent.push({ relativePath, fileContent });
    }
  });

  return filesContent;
};

const writeToFile = (relativePath, content) => {
  const filePath = path.join(mdxDirectory, relativePath);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Written to ${filePath}`);
};

const main = () => {
  const filesContent = parseCombinedFile(inputFilePath);
  filesContent.forEach(({ relativePath, fileContent }) => {
    writeToFile(relativePath, fileContent);
  });
  console.log("All files have been written.");
};

main();
