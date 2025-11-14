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
- [Sunset Horizon](https://cssbattle.dev/play/39)
- [Fox Head](https://cssbattle.dev/play/41)
- [Wrench](https://cssbattle.dev/play/43)
- [Stripes](https://cssbattle.dev/play/44)
- [Mountains](https://cssbattle.dev/play/46)
- [Corona Virus](https://cssbattle.dev/play/47)
- [Wash Your Hands](https://cssbattle.dev/play/48)
- [Stay at Home](https://cssbattle.dev/play/49)
- [Pastel Logo](https://cssbattle.dev/play/53)
- [Windmill](https://cssbattle.dev/play/55)
- [Earth](https://cssbattle.dev/play/59)
- [Sunset](https://cssbattle.dev/play/62)
- [Command Key](https://cssbattle.dev/play/63)
- [Door Knob](https://cssbattle.dev/play/64)
- [Max Volume](https://cssbattle.dev/play/65)
- [Video Reel](https://cssbattle.dev/play/67)
- [Bell](https://cssbattle.dev/play/68)
- [PushOwl](https://cssbattle.dev/play/69)
- [Elephant](https://cssbattle.dev/play/71)
- [Sheep](https://cssbattle.dev/play/72)
- [Balanced](https://cssbattle.dev/play/227)
- [Another Tree](https://cssbattle.dev/play/228)
- [Flower](https://cssbattle.dev/play/229)
- [Crosshair](https://cssbattle.dev/play/231)
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
- [Mirrod E](https://cssbattle.dev/play/1mmGpHvUAIxTZ5xSLujV)
- [Chain Link](https://cssbattle.dev/play/hdoPphAyR3NsSqNXGESO)
- [Flag](https://cssbattle.dev/play/cWfGYKqrpqbCmDs1qoKx)
- [Fish](https://cssbattle.dev/play/S9P3lP0F98oHl7y6Iq2U)
- [Arrow Diamond](https://cssbattle.dev/play/nCkhRjSpKG3KerHDmAf4)
- [Abstract Blossom](https://cssbattle.dev/play/xOUPIcxfaYWRfFkJZbrd)
- [Magenta Blocks Grid](https://cssbattle.dev/play/7nlhjaKjtugzgYJHs0vU)
- [Quarter Fold](https://cssbattle.dev/play/xAWKZ9Br5dl280jldTfe)
- [Minimalist Elephant Ears](https://cssbattle.dev/play/i4qDcCUHlv4Ru78Bq6z9)
- [Red Corner Motif](https://cssbattle.dev/play/0jHOqAnxfqpeKfqeWDnU)
- [Crossed Bars](https://cssbattle.dev/play/b1PeaEWCOZkzMahgYXYA)
- [Puzzle Blocks](https://cssbattle.dev/play/nJyGqyDaZqTbG2DG8qrC)
- [Circle-Square Pattern Grid](https://cssbattle.dev/play/MDtNGE9Sev1z7Xa6QL0s)
- [Capsule Door](https://cssbattle.dev/play/EcElU81kiG5yf5xLUxlX)
- [Simple Bar Chart](https://cssbattle.dev/play/qoEpGLPxUTEkKY6uWqNX)
- [Checkerboard Pocket](https://cssbattle.dev/play/PotoXFjM1AAznqipNoIy)
- [Arch Bridge](https://cssbattle.dev/play/lj2GGgGMz8AYl16ORzpo)
- [Input Field](https://cssbattle.dev/play/9pmoNJO6U1Dl2415Kii0)
- [Geometric Bar Composition](https://cssbattle.dev/play/3KjaoKMq6bMg4yOmz6YJ)
- [Quarter Circle Overlay](https://cssbattle.dev/play/OUbgAQQpf5Yj5uNzu4lB)
- [Frame Shape](https://cssbattle.dev/play/OUbgAQQpf5Yj5uNzu4lB)
- [Monochrome Cross](https://cssbattle.dev/play/jj7YQvOtHuqRHcnRxYls)
- [Figure Five](https://cssbattle.dev/play/lE3H9aNN7mjyxaUAm7Ij)
- [Bubble Columns](https://cssbattle.dev/play/gBbQiWv1sfQdxJhkFrFY)
- [Grid Bridge](https://cssbattle.dev/play/zGV15jqNGthtIZSLT0KV)
- [Three Lines](https://cssbattle.dev/play/4K1nE3mlF0aqtgqqb2cE)
- [Blue Horns](https://cssbattle.dev/play/mQBoj1aRRGKFdqIMHsbz)
- [Three Dots Passage](https://cssbattle.dev/play/z2KAKTtg7X5PYRuGJTSn)
- [Green Spiral Eye](https://cssbattle.dev/play/LEktqIDBDMs00Xv8o10m)
- [Duplicate Stack](https://cssbattle.dev/play/zm1omIB70COQnFWceuh8)
- [Shy Guy](https://cssbattle.dev/play/yrokcicvRyxbayAtEl7n)
- [Pixel Bridge Structure](https://cssbattle.dev/play/jMQhLYgZgAqjEBG95Ea0)
- [Bouncy Blob](https://cssbattle.dev/play/ac2SNqo7qJxHBNMsyUA3)
- [Low Battery Icon](https://cssbattle.dev/play/SYYHh3iEq1fLX3reqRCU)
- [Pixel Toad](https://cssbattle.dev/play/Fd3vvZivSEbFOZFxa2bk)
- [Basket Grid](https://cssbattle.dev/play/JBC3QDsdqoOG3PEaKOC7)
- [Vial with Fluid](https://cssbattle.dev/play/PlTclcAbU9L9EWDvbTQE)
- [Pivot Tile](https://cssbattle.dev/play/scEetXQ8lEIi272ZMtnD)
- [Stacked Layers](https://cssbattle.dev/play/zZdnFSfyVpjtoIL6xahW)
- [Obscura Compass](https://cssbattle.dev/play/mgu74kr9zqCQqtm5ChaX)
- [Power Icon](https://cssbattle.dev/play/0HOdqfUIHZGpnRVQOQbx)
- [Totem](https://cssbattle.dev/play/3yXeriXrUcPNUbBsiG8t)
- [CL Monogram](https://cssbattle.dev/play/A0AAj875qBa7MGnH9aJM)
- [Four](https://cssbattle.dev/play/s5JJeOyW26MkBy88YSn9)
- [Asymmetric Bars](https://cssbattle.dev/play/7VPDufck7QT4Zjlh4CvT)
- [Calendar](https://cssbattle.dev/play/XB5N3yznafRYaug2oWEO)
- [Interlocking Squares](https://cssbattle.dev/play/G0Lcplh7vINRgrkIu56D)
- [Barbell Bridge](https://cssbattle.dev/play/XQCTM05gTxnoXXDMQ3rt)
- [Anaglyph 3D Glasses](https://cssbattle.dev/play/7dleRRSShJjeUasHRb1o)
- [Puzzle](https://cssbattle.dev/play/vQDkZK0jRWSfPOlM8eLB)
- [Puzzle Grid](https://cssbattle.dev/play/0VNq91mJTcvFqX8rrcAj)
- [Stacked Plates](https://cssbattle.dev/play/sgBf5laOGhuIRqqtieFL)
- [Letter M](https://cssbattle.dev/play/yuLGghavS4svI2C2XqmE)
- [Right Angle Ruler](https://cssbattle.dev/play/yT5lXIVMPINavklNk3hq)
- [Pinball](https://cssbattle.dev/play/Dt65i8CbiqEa3dtEsJ1f)
- [Percent](https://cssbattle.dev/play/mqb7m5IBWG7O0MUNeR1j)
- [Lock](https://cssbattle.dev/play/Wb6m4MiVqnfsc2APUzE6)
- [Balance Icon](https://cssbattle.dev/play/hE3hv2VTjJjoyVUsE4WJ)
- [Quoncet Hut](https://cssbattle.dev/play/ruupegQJjmffoyuMpSMs)
- [Arched Window](https://cssbattle.dev/play/YBxqvS1odgHQqqZLULTu)
- [Minimalist Penguin Face](https://cssbattle.dev/play/RY8iqhWYxlPpAhPYVVG0)
- [Minimalist Bus](https://cssbattle.dev/play/Bk5hytqhhsXsuac7U51B)
- [Pixel Star](https://cssbattle.dev/play/ftyzL7ZK1Istn928KBRt)
- [Four-Petaled Flower](https://cssbattle.dev/play/85q9Sojc2ESQgfPdccqx)
- [The Connector](https://cssbattle.dev/play/JVSLmW0FRnZGZgGxMo8o)
- [Makeshift Bridge](https://cssbattle.dev/play/meqzxoysSSjCTt6NVx5H)
- [Bubble Heart](https://cssbattle.dev/play/cOFdYyNGYDjt0EAAiXu6)
- [Neutral Stump](https://cssbattle.dev/play/b150AE1x633kzUxkl6cC)
- [Accordion Echo](https://cssbattle.dev/play/LiUDbxhA7vRZq2x621DE)
- [Mighty Blue Treat](https://cssbattle.dev/play/gxtEvJvbsCzxQk3cVeW0)
- [Pivot Mark](https://cssbattle.dev/play/Ybm5yqlaYrriKz9LOImm)
- [Square Spiral](https://cssbattle.dev/play/VZPXcTouLP7bfcYAPFGa)
- [Reflex F](https://cssbattle.dev/play/nmGK2p23ItHW1FI85JPe)
- [Looped Frame](https://cssbattle.dev/play/ZiqvLe1OqThdaLBZJL1Z)
- [Offset Steps](https://cssbattle.dev/play/YXrg5XBlp9HveJEWqYQi)
- [Power Button](https://cssbattle.dev/play/XYRTS1X3AQZbscxt5sSv)
- [Target Cross](https://cssbattle.dev/play/qq0MyvlrWpqzr4uvnfSi)
- [Double Diamonds](https://cssbattle.dev/play/8aTBQl5mjg6xyBSQBXtL)
- [Rotated Frames](https://cssbattle.dev/play/bfj4QN1ZXrfVFgbEKgW2)
- [Techno Hammer](https://cssbattle.dev/play/rcy0TxAZx0Tb6kAQdUAh)
- [Pixel Bat Emblem](https://cssbattle.dev/play/W9YmA3nTXJV1qSqb7K1o)
- [Twin Stair Steps](https://cssbattle.dev/play/Eec4Lu4jHQeMKhlkhhTK)
- [QR Corner](https://cssbattle.dev/play/Gk3nzMSKdjcAWWyWXq7d)
- [Chevron](http://cssbattle.dev/play/1UsNSfamUsiKsDiRCKi1)
- [Golden Bridge](https://cssbattle.dev/play/sOG7BeRyAFcytZbdqmX5)
- [Clock](https://cssbattle.dev/play/S777cDYs3i8iZJ2UqSNJ)
- [Ring of Blocks](https://cssbattle.dev/play/74qJGiNEE80krdJNMMfp)
- [Traffic Lights on Tracks](https://cssbattle.dev/play/8Y18ZBfe1ZMUo5dnVEsR)
- [ICI Logo](https://cssbattle.dev/play/kyF75pkUNfm7tkADFdKO)
- [Stickman](https://cssbattle.dev/play/3EpeZDvdlN0EBthTnoNu)
- [Gemini Eclipse](https://cssbattle.dev/play/iv9lcjL9TuCndTIaWMNI)
- [Taxi Roof Sign](https://cssbattle.dev/play/2VbWKLNikqxQBKDTX57b)
- [Download Icon](https://cssbattle.dev/play/kd1vG0vrlkplA76QfqPg)
- [Tilted Candies](https://cssbattle.dev/play/5DLn67b60dPtr0qUsJWT)
- [Beads](https://cssbattle.dev/play/otGhmtVlOzmtMHEgsqWr)
- [Graveyard Cross](https://cssbattle.dev/play/upBqtFnN4DS23SAHgFdV)
- [Bed Frame](https://cssbattle.dev/play/xmaTBk6K7VFRqdAH2lgu)
- [Stacked Mosaic](https://cssbattle.dev/play/WiYLuR5Ml0BikzqL5B5S)
- [Rotating Arrows](https://cssbattle.dev/play/5kZ868tNphYkHSBsWH9q)
- [Window with Curtains](https://cssbattle.dev/play/4rn3OujQguFV5FpcmH0f)
- [Lego Brick](https://cssbattle.dev/play/GyItQV5v1RXiLURkpd75)
- [Purple Envelope](https://cssbattle.dev/play/qVS4RQQTFZPZVXvx5e8S)
- [Profile Avatar](https://cssbattle.dev/play/H0AoZgbNjtdO6czvvcPU)
- [Pixel Staircase](https://cssbattle.dev/play/Kyu8JDW0V39c8sZOlo63)
- [Three Droplets](https://cssbattle.dev/play/knbARQUoiEOEPbK7iRKa)
- [Ghost with Headphones](https://cssbattle.dev/play/3yzGbToCiX03M5ANhtv6)
- [Crosswalk](https://cssbattle.dev/play/hZkio3ODFpCZbJfiLe92)
- [Camera Sensor](https://cssbattle.dev/play/ql4S4Pg1Gr9DrcCuZK4x)
- [Northlight Orb](https://cssbattle.dev/play/jtkTuDKSIzeMig3roFbO)
- [White Slash](https://cssbattle.dev/play/abNemelD1dcMFPGh7PeU)
- [Passageway](https://cssbattle.dev/play/hTcOgzNi1XUkGiJVQFXG)
- [Equalized](https://cssbattle.dev/play/7vDkVGXDYLSjAqjAE5uN)
- [Pencil G](https://cssbattle.dev/play/JifHruTv42KU6VSBoAKy)
- [Post Bin](https://cssbattle.dev/play/PzmEXsY1eugUMixsItto)
- [Candy Conveyor](https://cssbattle.dev/play/8GV4THuZMLIMu3I3dVnZ)
- [Window Knob](https://cssbattle.dev/play/fbimhT07ru2sqJij84L5)
- [Mixer Sliders](https://cssbattle.dev/play/ubljsaQJpxYXhX0KqGrq)
- [Podcast Icon](https://cssbattle.dev/play/pk2LcVhnft5kikcKxebc)
- [2025-10-15](https://cssbattle.dev/play/HSIfqqpJuqlxA03biI0m)
- [2025-10-16](https://cssbattle.dev/play/MV6r17xbvSiWNq3K5knT)
- [2025-10-17](https://cssbattle.dev/play/I9Ratam49dRSf0WGLZP9)
- [2025-10-18](https://cssbattle.dev/play/BNqeBbXB31LayJyfmGNA)
- [2025-10-19](https://cssbattle.dev/play/Erlsgg51Llyj70O5OS1a)
- [2025-10-20](https://cssbattle.dev/play/xOAlsj8pyAHbSppU5qKW)
- [2025-10-21](https://cssbattle.dev/play/JbFsn74UUaRTxB4KiRIN)
- [2025-10-22](https://cssbattle.dev/play/PzMePcB4kuRd0ZzD83TC)
- [2025-10-23](https://cssbattle.dev/play/Yv1JZLM6PDU5KklqdmEz)
- [2025-10-24](https://cssbattle.dev/play/yjOl71XF3Zo8MpJlkpN4)
- [2025-10-25](https://cssbattle.dev/play/a6r4OOqfeWMT0GuP5Mf6)
- [2025-10-26](https://cssbattle.dev/play/oq2fo0yqm2f7MEQvOUoX)
- [2025-10-27](https://cssbattle.dev/play/a4LxPSzgbqCAQnrm5RLP)
- [2025-10-28](https://cssbattle.dev/play/vyMd5ST49aqoom2DkjKr)
- [2025-10-29](https://cssbattle.dev/play/vfpXSL1MXAQjK5o4cXRa)
- [2025-10-30](https://cssbattle.dev/play/8SRTkAguDNQ3qvVK322W)
- [2025-10-31](https://cssbattle.dev/play/YEQNjn1SCZNiEFG89TBU)
- [2025-11-01](https://cssbattle.dev/play/96tU27l7tvqLGeORRmq8)
- [2025-11-02](https://cssbattle.dev/play/oYsAGOqde8BHhH0tJA1E)
- [2025-11-03](https://cssbattle.dev/play/eGXPg2QDiu0FBm8AqJFj)
- [2025-11-04](https://cssbattle.dev/play/tRh3L59qSLA4fqIE7jxr)
- [2025-11-05](https://cssbattle.dev/play/MEhbimBcvGGOQUbgS7tB)
- [2025-11-06](https://cssbattle.dev/play/9HjbFREQJgvRpVEv1XJD)
- [2025-11-07](https://cssbattle.dev/play/odJAJh3HJe3xMHpvQogt)
- [2025-11-08](https://cssbattle.dev/play/2qWE0ANpQnAkjdd2lht5)
- [2025-11-09](https://cssbattle.dev/play/4QYPrdduN1r6DhCGVuuX)
- [2025-11-10](https://cssbattle.dev/play/IYhmS4eOH9V65VfprhH0)
- [2025-11-11](https://cssbattle.dev/play/81oY2i4INFJNZIYBRkuT)
- [2025-11-12](https://cssbattle.dev/play/fBpKM6PKNpl0aUjyeWK3)
- [2025-11-13](https://cssbattle.dev/play/nCqCtEkddTqOjBVcC6gi)
- [2025-11-14](https://cssbattle.dev/play/YakXbvaG93yjoBB6KxN4)

  </p>
</details>

## License

This project is licensed under a custom license. See the [LICENSE](LICENSE) file for details.
