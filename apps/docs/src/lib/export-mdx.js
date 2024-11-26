/* eslint-disable no-console -- console script */
// Used to export MDX files to output.txt

const fs = require("node:fs");
const path = require("node:path");

const mdxDirectory = path.join(__dirname, "../pages");
const outputFilePath = path.join(__dirname, "output.txt");

const findMdxFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findMdxFiles(filePath, fileList);
    } else if (file.endsWith(".mdx")) {
      fileList.push(filePath);
    }
  });
  return fileList;
};

const extractContents = (fileList) => {
  let combinedContent = "";
  fileList.forEach((file) => {
    const relativePath = path.relative(mdxDirectory, file);
    const content = fs.readFileSync(file, "utf-8");
    combinedContent += `\n\n===\nFile: ${relativePath}\n\n${content}\n`;
    console.log(`Extracted content from ${file}`);
  });
  return combinedContent;
};

const main = () => {
  const mdxFiles = findMdxFiles(mdxDirectory);
  const combinedContent = extractContents(mdxFiles);
  fs.writeFileSync(outputFilePath, combinedContent);
  console.log(`Combined content written to ${outputFilePath}`);
};

main();
