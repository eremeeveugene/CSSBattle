const fs = require("fs");
const path = require("path");

const challengesDir = path.join("source", "challenges");
const outputPath = path.join("source", "index.html");

const battles = fs
  .readdirSync(path.join(challengesDir, "battles"))
  .filter((f) => f.endsWith(".html"));

const daily = fs
  .readdirSync(path.join(challengesDir, "daily"))
  .filter((f) => f.endsWith(".html"));

if (battles.length === 0 && daily.length === 0) {
  console.warn("⚠️ No .html files found in source/challenges/battles/ or daily/");
  process.exit(0);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CSS Battle Challenge Viewer</title>
  <style>
    :root {
      --bg: #f7f7f7;
      --surface: #ffffff;
      --text: #111111;
      --subtext: #444444;
      --border: #cccccc;
      --shadow: rgba(0,0,0,0.1);
      --nav-bg: #ffffff;
      --tab-active-bg: #111111;
      --tab-active-text: #ffffff;
    }
    [data-theme="dark"] {
      --bg: #1a1a1a;
      --surface: #2a2a2a;
      --text: #f0f0f0;
      --subtext: #aaaaaa;
      --border: #444444;
      --shadow: rgba(0,0,0,0.4);
      --nav-bg: #2a2a2a;
      --tab-active-bg: #f0f0f0;
      --tab-active-text: #111111;
    }
    body {
      font-family: sans-serif;
      padding: 20px;
      padding-top: 76px;
      background: var(--bg);
      color: var(--text);
      transition: background 0.2s, color 0.2s;
    }
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 56px;
      background: var(--nav-bg);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 2px 6px var(--shadow);
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 20px;
      z-index: 100;
      transition: background 0.2s, border-color 0.2s;
    }
    h1 {
      margin: 0;
      font-size: 18px;
      margin-right: 16px;
    }
    .tab {
      background: none;
      border: 1px solid var(--border);
      color: var(--subtext);
      border-radius: 20px;
      padding: 5px 16px;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }
    .tab.active {
      background: var(--tab-active-bg);
      color: var(--tab-active-text);
      border-color: var(--tab-active-bg);
    }
    .spacer { flex: 1; }
    .theme-toggle {
      position: relative;
      width: 56px;
      height: 28px;
    }
    .theme-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .theme-toggle .track {
      position: absolute;
      inset: 0;
      background: #b0c4de;
      border-radius: 28px;
      cursor: pointer;
      transition: background 0.3s;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px;
      font-size: 13px;
    }
    .theme-toggle input:checked + .track {
      background: #3a3a5c;
    }
    .theme-toggle .knob {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 22px;
      height: 22px;
      background: white;
      border-radius: 50%;
      transition: transform 0.3s;
      pointer-events: none;
    }
    .theme-toggle input:checked + .track + .knob {
      transform: translateX(28px);
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .grid.hidden { display: none; }
    .card {
      background: var(--surface);
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 6px var(--shadow);
      width: 400px;
      flex-shrink: 0;
    }
    .card-title {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 14px;
      color: var(--subtext);
    }
    iframe {
      border: 1px solid var(--border);
      border-radius: 6px;
      width: 400px;
      height: 300px;
      display: block;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <nav>
    <h1>CSS Battle</h1>
    <button class="tab active" onclick="switchTab('battles', this)">Battles</button>
    <button class="tab" onclick="switchTab('daily', this)">Daily</button>
    <div class="spacer"></div>
    <label class="theme-toggle" aria-label="Toggle theme">
      <input type="checkbox" id="theme-checkbox" onchange="toggleTheme(this)" />
      <span class="track"><span>☀️</span><span>🌙</span></span>
      <span class="knob"></span>
    </label>
  </nav>
  <div class="grid" id="grid-battles"></div>
  <div class="grid hidden" id="grid-daily"></div>
  <div id="sentinel" style="height:1px"></div>
  <script>
    (function() {
      const saved = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', saved);
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('theme-checkbox').checked = saved === 'dark';
      });
    })();

    function toggleTheme(cb) {
      const theme = cb.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }

    const data = {
      battles: ${JSON.stringify(battles)},
      daily: ${JSON.stringify(daily)},
    };

    const BATCH = 20;
    const state = { battles: 0, daily: 0 };
    let activeTab = 'battles';

    function renderBatch(tab) {
      const files = data[tab];
      const index = state[tab];
      const end = Math.min(index + BATCH, files.length);
      const grid = document.getElementById('grid-' + tab);
      const fragment = document.createDocumentFragment();
      for (let i = index; i < end; i++) {
        const file = files[i];
        const name = file.replace('.html', '');
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`<div class="card-title">\${name}</div><iframe src="challenges/\${tab}/\${file}" scrolling="no" loading="lazy"></iframe>\`;
        fragment.appendChild(card);
      }
      grid.appendChild(fragment);
      state[tab] = end;
    }

    function switchTab(tab, btn) {
      document.getElementById('grid-' + activeTab).classList.add('hidden');
      document.getElementById('grid-' + tab).classList.remove('hidden');
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      activeTab = tab;
      if (state[tab] === 0) renderBatch(tab);
    }

    renderBatch('battles');

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && state[activeTab] < data[activeTab].length) {
        renderBatch(activeTab);
      }
    }, { rootMargin: '400px' });
    observer.observe(document.getElementById('sentinel'));
  </script>
</body>
</html>
`;

fs.writeFileSync(outputPath, html);
console.log(`✅ index.html generated with ${battles.length} battles and ${daily.length} daily challenges.`);
