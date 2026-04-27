/* ============================================
   JAひまわりスプレーマム部会 - Varieties
   - 品種データはこのファイル上部に追加するだけでOK
   ============================================ */

const VARIETIES = [
  {
    id: 'nadal',
    name: 'ナダル',
    color: '緑',
    shipMonths: [],
    tags: ['グリーン'],
    summary: '深みのあるグリーンが特徴。情報は順次追加します。',
    image: 'images/varieties/nadal.jpg',
    url: 'varieties/nadal.html'
  },
  {
    id: 'poirel-pink',
    name: 'ポワルピンク',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: 'ピンクの発色が華やか。情報は順次追加します。',
    image: 'images/varieties/poirel-pink.jpg',
    url: 'varieties/poirel-pink.html'
  }
];

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function shipLabel(shipMonths) {
  if (!Array.isArray(shipMonths) || shipMonths.length === 0) return '未登録';
  const sorted = [...shipMonths].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  return min === max ? `${min}月` : `${min}〜${max}月`;
}

function normalize(text) {
  return String(text || '').trim().toLowerCase();
}

function matchesQuery(variety, query) {
  if (!query) return true;
  const haystack = [
    variety.name,
    variety.color,
    variety.summary,
    ...(variety.tags || [])
  ].map(normalize).join(' ');
  return haystack.includes(query);
}

function matchesColor(variety, color) {
  if (!color) return true;
  return variety.color === color;
}

function matchesMonth(variety, month) {
  if (!month) return true;
  const shipMonths = Array.isArray(variety.shipMonths) ? variety.shipMonths : [];
  if (month === 'unknown') return shipMonths.length === 0;
  return shipMonths.includes(month);
}

function createCard(variety) {
  const link = document.createElement('a');
  link.href = variety.url;
  link.className = 'card card-link';

  const img = document.createElement('img');
  img.className = 'card-img variety-img';
  img.src = variety.image;
  img.alt = `${variety.name}（${variety.color}）の写真`;
  img.loading = 'lazy';
  link.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h3');
  title.textContent = `${variety.name}（${variety.color}）`;
  body.appendChild(title);

  const desc = document.createElement('p');
  desc.textContent = variety.summary || '';
  body.appendChild(desc);

  const chips = document.createElement('div');
  chips.className = 'chip-row mt-lg';
  chips.setAttribute('aria-label', '品種情報');

  const chipColor = document.createElement('span');
  chipColor.className = 'chip';
  chipColor.textContent = `花色：${variety.color || '未登録'}`;
  chips.appendChild(chipColor);

  const chipShip = document.createElement('span');
  chipShip.className = 'chip';
  chipShip.textContent = `出荷：${shipLabel(variety.shipMonths)}`;
  chips.appendChild(chipShip);

  (variety.tags || []).slice(0, 3).forEach(tag => {
    const chipTag = document.createElement('span');
    chipTag.className = 'chip chip--soft';
    chipTag.textContent = `#${tag}`;
    chips.appendChild(chipTag);
  });

  body.appendChild(chips);
  link.appendChild(body);

  return link;
}

function initVarietiesPage() {
  const grid = document.getElementById('variety-grid');
  if (!grid) return;

  const keyword = document.getElementById('filter-keyword');
  const color = document.getElementById('filter-color');
  const month = document.getElementById('filter-month');
  const count = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');

  // Populate color options from data.
  const colors = uniq(VARIETIES.map(v => v.color)).sort((a, b) => a.localeCompare(b, 'ja'));
  colors.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    color.appendChild(opt);
  });

  const render = () => {
    const q = normalize(keyword?.value);
    const c = color?.value || '';
    const m = (() => {
      const v = month?.value;
      if (!v) return null;
      if (v === 'unknown') return 'unknown';
      return Number(v);
    })();

    const filtered = VARIETIES
      .filter(v => matchesQuery(v, q))
      .filter(v => matchesColor(v, c))
      .filter(v => matchesMonth(v, m));

    grid.innerHTML = '';
    filtered.forEach(v => grid.appendChild(createCard(v)));

    if (count) count.textContent = String(filtered.length);
    if (noResults) noResults.hidden = filtered.length !== 0;
  };

  ['input', 'change'].forEach(evt => {
    keyword?.addEventListener(evt, render);
    color?.addEventListener(evt, render);
    month?.addEventListener(evt, render);
  });

  render();
}

document.addEventListener('DOMContentLoaded', initVarietiesPage);
