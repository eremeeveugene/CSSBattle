const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const path = require("path");
const pixelmatch = require("pixelmatch");
const { PNG } = require("pngjs");

const CHALLENGES_DIR = path.join("source", "challenges");
const EXPECTED_DIR = path.join("ut-tests", "expected-result");
const ACTUAL_DIR = path.join("ut-tests", "actual-result");
const VIEWPORT = { width: 400, height: 300 };
const THRESHOLD = 0.01;

(async () => {
  const htmlFiles = fs
    .readdirSync(CHALLENGES_DIR)
    .filter((f) => f.endsWith(".html"));

  if (htmlFiles.length === 0) {
    console.log("No HTML files found in challenges directory.");
    process.exit(0);
  }

  await fs.ensureDir(EXPECTED_DIR);
  await fs.ensureDir(ACTUAL_DIR);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  let hasMismatch = false;

  for (const file of htmlFiles) {
    const filePath = path.join(CHALLENGES_DIR, file);
    const fileUrl = `file://${path.resolve(filePath)}`;

    console.log(`🧪 Testing: ${file}`);
    await page.goto(fileUrl, { waitUntil: "load" });

    const screenshotPath = path.join(ACTUAL_DIR, file.replace(".html", ".png"));
    await page.screenshot({ path: screenshotPath });

    const expectedPath = path.join(EXPECTED_DIR, file.replace(".html", ".png"));

    if (!fs.existsSync(expectedPath)) {
      console.error(`❌ Missing expected result for ${file}: ${expectedPath}`);
      hasMismatch = true;
      continue;
    }

    const actualImg = PNG.sync.read(fs.readFileSync(screenshotPath));
    const expectedImg = PNG.sync.read(fs.readFileSync(expectedPath));

    if (
      actualImg.width !== expectedImg.width ||
      actualImg.height !== expectedImg.height
    ) {
      console.error(`❌ Dimension mismatch in ${file}`);
      hasMismatch = true;
      continue;
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
      hasMismatch = true;
      const diffPath = path.join(
        ACTUAL_DIR,
        file.replace(".html", ".diff.png")
      );
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
      console.error(
        `❌ Visual mismatch in ${file} – ${diffPixels} pixels differ`
      );
    } else {
      console.log(`✅ ${file} matches`);
    }
  }

  await browser.close();

  if (hasMismatch) {
    console.error("\n❌ Some challenges did not match the expected results.");
    process.exit(1);
  } else {
    console.log("\n✅ All challenges match expected visuals.");
    process.exit(0);
  }
})();
