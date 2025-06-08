const fs = require("fs");
const path = require("path");

const challengesDir = path.join("source", "challenges");
const outputPath = path.join("source", "index.html");

const files = fs.readdirSync(challengesDir).filter((f) => f.endsWith(".html"));

if (files.length === 0) {
  console.warn("⚠️ No .html files found in source/challenges/.");
  process.exit(0);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CSS Battle Challenge Viewer</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background: #f7f7f7;
    }
    h1 {
      text-align: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .card {
      background: white;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .card-title {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 14px;
    }
    iframe {
      border: 1px solid #ccc;
      border-radius: 6px;
      width: 100%;
      height: 300px;
      background: white;
    }
  </style>
</head>
<body>
  <h1>CSS Battle Challenge Viewer</h1>
  <div class="grid">
    ${files
      .map((file) => {
        const name = file.replace(".html", "");
        return `
    <div class="card">
      <div class="card-title">${name}</div>
      <iframe src="challenges/${file}"></iframe>
    </div>`;
      })
      .join("\n")}
  </div>
</body>
</html>
`;

fs.writeFileSync(outputPath, html);
console.log(`✅ index.html generated with ${files.length} challenges.`);
