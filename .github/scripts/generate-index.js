#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const CHALLENGES_DIR = path.resolve("source/challenges");
const OUTPUT_FILE = path.resolve("source/index.html");

/**
 * Build the full HTML page with a grid of iframes.
 * @param {string[]} fileNames
 * @returns {string}
 */
function buildHtml(fileNames) {
  const cards = fileNames
    .map((file) => {
      const name = path.basename(file, ".html");
      const iframeSrc = path.posix.join(
        path
          .relative(path.dirname(OUTPUT_FILE), CHALLENGES_DIR)
          .replace(/\\/g, "/"),
        file
      );
      return `
    <div class="card">
      <div class="card-title">${name}</div>
      <iframe class="card-frame" src="${iframeSrc}"></iframe>
    </div>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CSS Battle Challenge Viewer</title>
  <style>
    body { font-family: sans-serif; margin:0; padding:20px; background:#f7f7f7; }
    h1   { text-align:center; margin-bottom:20px; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:20px; }
    .card { background:white; padding:10px; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);
             display:flex; flex-direction:column; align-items:center; }
    .card-title { margin-bottom:8px; font-weight:bold; font-size:14px; text-transform:capitalize; }
    .card-frame { border:1px solid #ccc; border-radius:6px; width:100%; height:300px; background:white; }
  </style>
</head>
<body>
  <h1>CSS Battle Challenge Viewer</h1>
  <div class="grid">
${cards}
  </div>
</body>
</html>`;
}

(async () => {
  if (!(await fs.pathExists(CHALLENGES_DIR))) {
    console.error(`Challenges directory not found: ${CHALLENGES_DIR}`);
    process.exit(1);
  }

  const htmlFiles = (await fs.readdir(CHALLENGES_DIR)).filter((file) =>
    file.toLowerCase().endsWith(".html")
  );

  if (htmlFiles.length === 0) {
    console.warn("⚠️  No HTML files found in source/challenges/");
    process.exit(0);
  }

  const pageHtml = buildHtml(htmlFiles);
  await fs.outputFile(OUTPUT_FILE, pageHtml);

  console.log(
    `✅ Generated ${OUTPUT_FILE} with ${htmlFiles.length} challenges.`
  );
})();
