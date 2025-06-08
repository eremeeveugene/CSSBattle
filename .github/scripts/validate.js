#!/usr/bin/env node
const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const path = require("path");
const pixelmatch = require("pixelmatch");
const { PNG } = require("pngjs");
const { pathToFileURL } = require("url");

// Directories and settings
const CHALLENGES_DIR = path.resolve("source/challenges");
const EXPECTED_DIR = path.resolve("ut-tests/expected-result");
const ACTUAL_DIR = path.resolve("ut-tests/actual-result");
const VIEWPORT = { width: 400, height: 300 };
const THRESHOLD = 0.1;
const MAX_CONCURRENT = 3;

/**
 * Compare one HTML file’s rendered screenshot against the expected PNG.
 * @param {import('puppeteer').Page} page
 * @param {string} htmlFileName
 * @returns {Promise<boolean>}
 */
async function compareFile(page, htmlFileName) {
  const htmlPath = path.join(CHALLENGES_DIR, htmlFileName);
  const fileUrl = pathToFileURL(htmlPath).href;
  const actualPngPath = path.join(
    ACTUAL_DIR,
    htmlFileName.replace(/\.html$/i, ".png")
  );
  const expectedPngPath = path.join(
    EXPECTED_DIR,
    htmlFileName.replace(/\.html$/i, ".png")
  );

  console.log(`Testing: ${htmlFileName}`);
  await page.goto(fileUrl, { waitUntil: "load" });
  await page.screenshot({ path: actualPngPath });

  if (!(await fs.pathExists(expectedPngPath))) {
    console.error(`Missing expected image: ${expectedPngPath}`);
    return false;
  }

  const [actualBuffer, expectedBuffer] = await Promise.all([
    fs.readFile(actualPngPath),
    fs.readFile(expectedPngPath),
  ]);

  const actualImg = PNG.sync.read(actualBuffer);
  const expectedImg = PNG.sync.read(expectedBuffer);

  if (
    actualImg.width !== expectedImg.width ||
    actualImg.height !== expectedImg.height
  ) {
    console.error(`Dimension mismatch: ${htmlFileName}`);
    return false;
  }

  const diff = new PNG({
    width: expectedImg.width,
    height: expectedImg.height,
  });

  const diffPixels = pixelmatch(
    expectedImg.data,
    actualImg.data,
    diff.data,
    expectedImg.width,
    expectedImg.height,
    { threshold: THRESHOLD }
  );

  if (diffPixels > 0) {
    const diffPath = path.join(
      ACTUAL_DIR,
      htmlFileName.replace(/\.html$/i, ".diff.png")
    );
    await fs.writeFile(diffPath, PNG.sync.write(diff));
    console.error(
      `Visual diff in ${htmlFileName}: ${diffPixels} pixels differ`
    );
    return false;
  }

  console.log(`${htmlFileName} matches`);
  return true;
}

(async () => {
  if (!(await fs.pathExists(CHALLENGES_DIR))) {
    console.error(`Challenges directory not found: ${CHALLENGES_DIR}`);
    process.exit(1);
  }

  // Ensure output directories exist
  await fs.ensureDir(ACTUAL_DIR);
  await fs.ensureDir(EXPECTED_DIR);

  // Grab all .html files
  const htmlFiles = (await fs.readdir(CHALLENGES_DIR)).filter((file) =>
    file.toLowerCase().endsWith(".html")
  );

  if (htmlFiles.length === 0) {
    console.warn("⚠️  No HTML files found in source/challenges/");
    process.exit(0);
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  let allPassed = true;
  const queue = [...htmlFiles];

  // Run comparisons in parallel (max concurrent)
  await Promise.all(
    Array.from({ length: MAX_CONCURRENT }, async () => {
      while (queue.length) {
        const file = queue.shift();
        const success = await compareFile(page, file);
        if (!success) allPassed = false;
      }
    })
  );

  await browser.close();

  if (!allPassed) {
    console.error("\n❌ Some tests failed.");
    process.exit(1);
  }

  console.log("\n✅ All challenges match expected visuals.");
  process.exit(0);
})();
