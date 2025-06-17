# CSSBattle Solutions

[![UI Visual Validation](https://github.com/eremeeveugene/CSSBattle/actions/workflows/ui-visual-validation.yml/badge.svg)](https://github.com/eremeeveugene/CSSBattle/actions/workflows/ui-visual-validation.yml)

## Overview

This repository contains my solutions to various challenges on [CSSBattle](https://cssbattle.dev). Each solution replicates a given visual target using pure HTML and CSS. The goal is to match the shape and layout as closely as possible, often aiming for a 100% match.

## Purpose

The primary objective of this project is to practice and improve my CSS skills — especially in layout, positioning, transforms, and minimal code techniques. These challenges also help refine my ability to reason visually and work within tight constraints.

## Technologies

- **[HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)**: The markup language used to structure the challenges.
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)**: The styling language used to visually replicate the target images in each challenge.
- **[Puppeteer](https://pptr.dev/)**: Used for rendering HTML files in a headless browser during CI to verify visual correctness.
- **[pixelmatch](https://github.com/mapbox/pixelmatch)**: A pixel-level image comparison library used to detect visual mismatches in challenge output.

## Tools

For developing and testing the solutions in this repository, I use the following tools:

- **[Visual Studio Code](https://code.visualstudio.com/)**: A lightweight and powerful source code editor optimized for web development. I use it to write and preview HTML and CSS for the CSS Battle challenges.
- **[Prettier](https://prettier.io/)**: A code formatter that ensures consistent styling and readability of HTML and CSS code throughout the project.

## Automation Jobs

This repository includes an automation job defined in the `ui-visual-validation.yml` file to ensure the visual correctness of CSSBattle challenge solutions. The job runs automatically on every pull request or push to the `develop` branch.

For each challenge, a screenshot is generated using a headless browser (via Puppeteer) and compared against a corresponding reference image located in the `ut-tests/expected-result/` folder using `pixelmatch`. The generated screenshots are saved to `ut-tests/actual-result/` during the CI run (but are not committed to the repository). If an expected image is missing, or if a visual mismatch **exceeding a small tolerance (up to 3 pixels)** is detected, the job will fail. This tolerance helps prevent false positives caused by rendering inconsistencies such as anti-aliasing or subpixel rounding.

This ensures all challenge solutions remain pixel-perfect (or nearly so) over time and guards against unintended visual regressions during development.

## Live Challenge Viewer

You can browse and preview all CSS Battle challenge solutions directly from the generated [index.html](https://eremeeveugene.github.io/CSSBattle/), which is automatically deployed via GitHub Pages.

This page is regenerated and published on every push to `develop`. It displays all challenges in the `source/challenges/` folder using iframes for easy side-by-side viewing and comparison.

## CSSBattle Profile

Check out my [CSSBattle](https://cssbattle.dev/player/eremeeveugene) profile to see more about my problem-solving journey.

## Solutions

<details>
  <summary><strong>Solutions</strong></summary>
  <p>

- [Simply Square](https://cssbattle.dev/play/1)
- [Carrom](https://cssbattle.dev/play/2)
- [Push Button](https://cssbattle.dev/play/3)
- [Ups n Downs](https://cssbattle.dev/play/4)
- [Acid Rain](https://cssbattle.dev/play/5)
- [Missing Slice](https://cssbattle.dev/play/6)
- [Tesseract](https://cssbattle.dev/play/9)
- [Totally Triangle](https://cssbattle.dev/play/13)
- [Fidget Spinner](https://cssbattle.dev/play/17)
- [Boxception](https://cssbattle.dev/play/23)
- [Switches](https://cssbattle.dev/play/24)
- [Blossom](https://cssbattle.dev/play/25)
- [Smiley](https://cssbattle.dev/play/26)
- [Lock Up](https://cssbattle.dev/play/27)
- [Cups & Balls](https://cssbattle.dev/play/28)
- [Suffocate](https://cssbattle.dev/play/29)
- [Horizon](https://cssbattle.dev/play/30)
- [Equals](https://cssbattle.dev/play/31)
- [Christmass Tree](https://cssbattle.dev/play/34)
- [Ice Cream](https://cssbattle.dev/play/35)
- [Interleaved](https://cssbattle.dev/play/36)
- [Tunnel](https://cssbattle.dev/play/37)
- [Not Simply Square](https://cssbattle.dev/play/38)
- [Wash Your Hands](https://cssbattle.dev/play/48)
- [Stay at Home](https://cssbattle.dev/play/49)
- [Pastel Logo](https://cssbattle.dev/play/53)
- [Windmill](https://cssbattle.dev/play/55)
- [Earth](https://cssbattle.dev/play/59)
- [Sunset](https://cssbattle.dev/play/62)
- [Balanced](https://cssbattle.dev/play/227)
- [Another Tree](https://cssbattle.dev/play/228)
- [Flower](https://cssbattle.dev/play/229)
- [Watch](https://cssbattle.dev/play/9leyzc3mjABLZpgaVnzP)
- [Crosscurrents](https://cssbattle.dev/play/CvNROnWqTk2boFBkxy0A)
- [Quadracore Nexus](https://cssbattle.dev/play/2ZHacHNgLjfK91OZFvXX)
- [T Double O](https://cssbattle.dev/play/A3F5ZhYUXzPmVOm4pKkq)
- [Notched Stack](https://cssbattle.dev/play/qGccN77CCxzVGWGbzh0Q)
- [Quincunx](https://cssbattle.dev/play/8XWCV8kX9OqJVQsjbuQh)
- [Zigzag Staircase](https://cssbattle.dev/play/0vykyZTG2qnzn9FhibSo)
- [Nine](https://cssbattle.dev/play/rAF4Ler2ROggUKcCH38k)
- [Keyhole](https://cssbattle.dev/play/RMgZxsd0PkWq3vozkyPx)
- [Orbital Cross Pattern](https://cssbattle.dev/play/YIf3c1ujLXToXVns07TQ)
- [Framed Rosette](https://cssbattle.dev/play/oAJaNdW4iLhnPkP2dKt1)
- [Segmented Sun](https://cssbattle.dev/play/gjq9xO63UbMIoIpic7Fg)
- [Router](https://cssbattle.dev/play/jMuBUSMPP6d2aWgFhtuc)
- [Printer](https://cssbattle.dev/play/um7i7cUKqD7IVLYsP486)
- [Stylized Bridge](https://cssbattle.dev/play/rhgEVf1zxiUqU50PXgFU)
- [Stylized Light Bulb Icon](https://cssbattle.dev/play/Jeqm4CNTOuY14H2IsD7R)
- [Database Cards](https://cssbattle.dev/play/o5XdEViDmsXrAE0T80BY)
- [Stacked Halves](https://cssbattle.dev/play/E9dPyo7ZbeuFZFaO1mIn)
- [Golden Spiral Maze](https://cssbattle.dev/play/bT5gudVnaZSI0TN0lB5X)
- [Interlocking Arcs](https://cssbattle.dev/play/l9SS8rYUPMpsxlekbWIL)
- [Stripe Grid](https://cssbattle.dev/play/Qx1UkyqCHWB3kxPMHxHq)
- [Cornerplay](https://cssbattle.dev/play/i2Xtvrnt48vJsZOEyL1G)
- [Grid Core](https://cssbattle.dev/play/j8oIHllnFNB1EED2LAYL)

  </p>
</details>

## License

This project is licensed under a custom license. See the [LICENSE](LICENSE) file for details.
