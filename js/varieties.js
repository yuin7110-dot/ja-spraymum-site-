/* ============================================
   JAひまわりスプレーマム部会 - Varieties
   ============================================ */

const detailUrl = id => `varieties/detail.html?id=${id}`;

const VARIETIES = [
  {
    id: 'nadal',
    name: 'ナダル',
    color: '緑',
    shipMonths: [],
    tags: ['グリーン', '緑'],
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
  },
  {
    id: 'furio',
    name: 'フリオ',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: 'すっきりとした白色のスプレーマムです。',
    image: 'images/varieties/furio.jpg',
    url: detailUrl('furio')
  },
  {
    id: 'kaguya',
    name: 'カグヤ',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: '明るい黄色が印象的なスプレーマムです。',
    image: 'images/varieties/kaguya.jpg',
    url: detailUrl('kaguya')
  },
  {
    id: 'lapretty',
    name: 'ラプリティ',
    color: 'オレンジ',
    shipMonths: [],
    tags: ['オレンジ'],
    summary: 'あたたかみのあるオレンジ色のスプレーマムです。',
    image: 'images/varieties/lapretty.jpg',
    url: detailUrl('lapretty')
  },
  {
    id: 'lemoniaresu',
    name: 'レモニアレス',
    color: '黄色',
    shipMonths: [],
    tags: ['レモン色', '黄色'],
    summary: 'やわらかなレモン色のスプレーマムです。',
    image: 'images/varieties/lemoniaresu.jpg',
    url: detailUrl('lemoniaresu')
  },
  {
    id: 'nabona',
    name: 'ナボーナ',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: '淡く華やかなピンク色のスプレーマムです。',
    image: 'images/varieties/nabona.jpg',
    url: detailUrl('nabona')
  },
  {
    id: 'ariel',
    name: 'アリエル',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: '清潔感のある白色のスプレーマムです。',
    image: 'images/varieties/ariel.jpg',
    url: detailUrl('ariel')
  },
  {
    id: 'pisano',
    name: 'ピサーノ',
    color: '緑',
    shipMonths: [],
    tags: ['グリーン', '緑'],
    summary: '鮮やかなグリーンが目を引くスプレーマムです。',
    image: 'images/varieties/pisano.jpg',
    url: detailUrl('pisano')
  },
  {
    id: 'rocket',
    name: 'ロケット',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: '白系のアレンジに使いやすいスプレーマムです。',
    image: 'images/varieties/rocket.jpg',
    url: detailUrl('rocket')
  },
  {
    id: 'oceania',
    name: 'オーシア',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: '落ち着いた白色のスプレーマムです。',
    image: 'images/varieties/oceania.jpg',
    url: detailUrl('oceania')
  },
  {
    id: 'lula',
    name: 'ルーラ',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: 'やさしいピンク色のスプレーマムです。',
    image: 'images/varieties/lula.jpg',
    url: detailUrl('lula')
  },
  {
    id: 'doria-salmon',
    name: 'ドリアサーモン',
    color: 'サーモン',
    shipMonths: [],
    tags: ['サーモン', 'オレンジ'],
    summary: 'サーモン系のやわらかな色合いのスプレーマムです。',
    image: 'images/varieties/doria-salmon.jpg',
    url: detailUrl('doria-salmon')
  },
  {
    id: 'relius',
    name: 'レリアス',
    color: '桃色',
    shipMonths: [],
    tags: ['桃色', 'ピンク'],
    summary: '桃色が映えるスプレーマムです。',
    image: 'images/varieties/relius.jpg',
    url: detailUrl('relius')
  },
  {
    id: 'enzell-heart',
    name: 'エンゼルハート',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: 'やわらかいピンク色のスプレーマムです。',
    image: 'images/varieties/enzell-heart.jpg',
    url: detailUrl('enzell-heart')
  },
  {
    id: 'kirk',
    name: 'カーク',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: 'はっきりとした黄色が目を引くスプレーマムです。',
    image: 'images/varieties/kirk.jpg',
    url: detailUrl('kirk')
  },
  {
    id: 'rockabilly',
    name: 'ロカビリー',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: '明るいピンク色のスプレーマムです。',
    image: 'images/varieties/rockabilly.jpg',
    url: detailUrl('rockabilly')
  },
  {
    id: 'matisse',
    name: 'マティス',
    color: '複色',
    shipMonths: [],
    tags: ['複色', '淡色'],
    summary: '淡い色合いが重なる複色系のスプレーマムです。',
    image: 'images/varieties/matisse.jpg',
    url: detailUrl('matisse')
  },
  {
    id: 'saba-purple',
    name: 'サーバ',
    color: '複色',
    shipMonths: [],
    tags: ['複色', '紫', 'ピンク'],
    summary: '紫がかった複色のスプレーマムです。',
    image: 'images/varieties/saba-purple.jpg',
    url: detailUrl('saba-purple')
  },
  {
    id: 'momoko',
    name: 'モモコ',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク', '桃色'],
    summary: '丸みのあるピンク色のスプレーマムです。',
    image: 'images/varieties/momoko.jpg',
    url: detailUrl('momoko')
  },
  {
    id: 'match-point',
    name: 'マッチポイント',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: '白系の花色が使いやすいスプレーマムです。',
    image: 'images/varieties/match-point.jpg',
    url: detailUrl('match-point')
  },
  {
    id: 'laporta',
    name: 'ラポルタ',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: '白色のまとまりが美しいスプレーマムです。',
    image: 'images/varieties/laporta.jpg',
    url: detailUrl('laporta')
  },
  {
    id: 'cabrera',
    name: 'カブレラ',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: '華やかなピンク色のスプレーマムです。',
    image: 'images/varieties/cabrera.jpg',
    url: detailUrl('cabrera')
  },
  {
    id: 'emblem',
    name: 'エンブレ',
    color: '桃色',
    shipMonths: [],
    tags: ['桃色', 'ピンク'],
    summary: '桃色の発色が印象的なスプレーマムです。',
    image: 'images/varieties/emblem.jpg',
    url: detailUrl('emblem')
  },
  {
    id: 'bomber-g',
    name: 'ボンバーG',
    color: '緑',
    shipMonths: [],
    tags: ['グリーン', '緑'],
    summary: '鮮やかなグリーン系のスプレーマムです。',
    image: 'images/varieties/bomber-g.jpg',
    url: detailUrl('bomber-g')
  },
  {
    id: 'repos',
    name: 'レポス',
    color: '緑',
    shipMonths: [],
    tags: ['グリーン', '緑'],
    summary: '明るいグリーンが特徴のスプレーマムです。',
    image: 'images/varieties/repos.jpg',
    url: detailUrl('repos')
  },
  {
    id: 'cero',
    name: 'セロ',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: 'やさしいピンク色のスプレーマムです。',
    image: 'images/varieties/cero.jpg',
    url: detailUrl('cero')
  },
  {
    id: 'elsa',
    name: 'エルサ',
    color: '白',
    shipMonths: [],
    tags: ['白'],
    summary: '白色の表情がきれいなスプレーマムです。',
    image: 'images/varieties/elsa.jpg',
    url: detailUrl('elsa')
  },
  {
    id: 'remidas',
    name: 'レミダス',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: '明るく元気な印象の黄色いスプレーマムです。',
    image: 'images/varieties/remidas.jpg',
    url: detailUrl('remidas')
  },
  {
    id: 'mileny',
    name: 'ミレニ',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: '濃淡のあるピンク色が印象的なスプレーマムです。',
    image: 'images/varieties/mileny.jpg',
    url: detailUrl('mileny')
  },
  {
    id: 'mari-kazaguruma',
    name: 'まり風車',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: '風車のような表情が楽しいピンク系のスプレーマムです。',
    image: 'images/varieties/mari-kazaguruma.jpg',
    url: detailUrl('mari-kazaguruma')
  },
  {
    id: 'pial',
    name: 'ピアル',
    color: '桃色',
    shipMonths: [],
    tags: ['桃色', 'ピンク'],
    summary: '桃色の花色がやわらかい印象のスプレーマムです。',
    image: 'images/varieties/pial.jpg',
    url: detailUrl('pial')
  },
  {
    id: 'drew',
    name: 'ドリュー',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: '黄色の発色が明るいスプレーマムです。',
    image: 'images/varieties/drew.jpg',
    url: detailUrl('drew')
  },
  {
    id: 'veldon',
    name: 'ヴェルドン',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: 'ピンク色の花色が上品なスプレーマムです。',
    image: 'images/varieties/veldon.jpg',
    url: detailUrl('veldon')
  },
  {
    id: 'saba-peach',
    name: 'サーバ',
    color: '桃色',
    shipMonths: [],
    tags: ['桃色', 'ピンク'],
    summary: '桃色のやさしい色合いのスプレーマムです。',
    image: 'images/varieties/saba-peach.jpg',
    url: detailUrl('saba-peach')
  },
  {
    id: 'harper',
    name: 'ハーパー',
    color: 'オレンジ',
    shipMonths: [],
    tags: ['オレンジ'],
    summary: 'あたたかみのあるオレンジ色のスプレーマムです。',
    image: 'images/varieties/harper.jpg',
    url: detailUrl('harper')
  },
  {
    id: 'seron',
    name: 'セロン',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: 'やさしいピンク色のスプレーマムです。',
    image: 'images/varieties/seron/extra-3.jpg',
    url: detailUrl('seron')
  },
  {
    id: 'viking',
    name: 'バイキング',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: '黄色の花色に深みのある表情が入るスプレーマムです。',
    image: 'images/varieties/viking/extra-23.jpg',
    url: detailUrl('viking')
  },
  {
    id: 'dandy-yellow',
    name: 'ダンディイエロー',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: '明るい黄色と中心の深い色合いが印象的なスプレーマムです。',
    image: 'images/varieties/dandy-yellow/extra-26.jpg',
    url: detailUrl('dandy-yellow')
  },
  {
    id: 'idena',
    name: 'イデーナ',
    color: '白',
    shipMonths: [],
    tags: ['白', 'ホワイト'],
    summary: '清潔感のある白い花色のスプレーマムです。',
    image: 'images/varieties/idena/extra-29.jpg',
    url: detailUrl('idena')
  },
  {
    id: 'fireball',
    name: 'ファイヤーボール',
    color: 'オレンジ',
    shipMonths: [],
    tags: ['オレンジ', 'ポンポン'],
    summary: 'ころんとしたオレンジ色の花姿が目を引くスプレーマムです。',
    image: 'images/varieties/fireball/extra-38.jpg',
    url: detailUrl('fireball')
  },
  {
    id: 'toani-marine',
    name: 'トゥアニマリン',
    color: 'ピンク',
    shipMonths: [],
    tags: ['ピンク'],
    summary: '淡いピンク色の花びらがやわらかな印象のスプレーマムです。',
    image: 'images/varieties/toani-marine/extra-51.jpg',
    url: detailUrl('toani-marine')
  },
  {
    id: 'dutch-master',
    name: 'ダッチマスター',
    color: '黄色',
    shipMonths: [],
    tags: ['黄色', 'イエロー'],
    summary: '明るい黄色が華やかなスプレーマムです。',
    image: 'images/varieties/dutch-master/extra-60.jpg',
    url: detailUrl('dutch-master')
  },
  {
    id: 'north-star',
    name: 'ノースター',
    color: '白',
    shipMonths: [],
    tags: ['白', 'ホワイト'],
    summary: '白い花色がすっきりと映えるスプレーマムです。',
    image: 'images/varieties/north-star/extra-67.jpg',
    url: detailUrl('north-star')
  }
];

const VARIETY_GALLERIES = {
  seron: [1, 2, 3],
  remidas: [4, 5, 6, 7],
  drew: [8, 9],
  veldon: [10, 11, 12, 13],
  harper: [14, 15, 16],
  'doria-salmon': [17, 18, 19, 20],
  viking: [21, 22, 23, 24, 25],
  'dandy-yellow': [26],
  idena: [27, 28, 29],
  lapretty: [30, 31, 32, 33],
  fireball: [34, 35, 36, 37, 38],
  'mari-kazaguruma': [39, 40, 41, 42],
  mileny: [43, 44, 45],
  furio: [46, 47, 48],
  'toani-marine': [49, 50, 51, 52, 53],
  kaguya: [54, 55, 56, 57, 58, 59],
  'dutch-master': [60],
  lemoniaresu: [61, 62, 63, 64],
  'north-star': [65, 66, 67],
  nabona: [68, 69, 70],
  ariel: [71, 72, 73],
  oceania: [74, 75, 76],
  lula: [77, 78, 79],
  relius: [80, 81, 82],
  'enzell-heart': [83, 84, 85],
  matisse: [86, 87, 88, 89, 90],
  momoko: [91, 92],
  laporta: [93, 94, 95],
  cabrera: [96, 97, 98],
  rockabilly: [99, 100],
  'saba-purple': [101]
};

VARIETIES.forEach(variety => {
  const numbers = VARIETY_GALLERIES[variety.id] || [];
  variety.gallery = numbers.map(number => `images/varieties/${variety.id}/extra-${number}.jpg`);
});

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

function pageImagePath(image) {
  const inDetailPage = window.location.pathname.includes('/varieties/');
  return inDetailPage ? `../${image}` : image;
}

function createCard(variety) {
  const link = document.createElement('a');
  link.href = variety.url;
  link.className = 'card card-link';

  const img = document.createElement('img');
  img.className = 'card-img variety-img';
  img.src = pageImagePath(variety.image);
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
    grid.classList.add('visible');

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

function initVarietyDetailPage() {
  const root = document.getElementById('variety-detail-page');
  if (!root) return;

  const id = new URLSearchParams(window.location.search).get('id');
  const variety = VARIETIES.find(v => v.id === id);
  const title = variety ? `${variety.name}（${variety.color}）` : '品種情報';

  document.title = `${title} | 品種紹介 | JAひまわりスプレーマム部会`;
  document.querySelectorAll('[data-variety-name]').forEach(el => {
    el.textContent = variety ? variety.name : '品種が見つかりません';
  });
  document.querySelectorAll('[data-variety-title]').forEach(el => {
    el.textContent = title;
  });

  if (!variety) {
    root.innerHTML = `
      <div class="section-header fade-in visible">
        <p class="section-subtitle">Not Found / 未登録</p>
        <h2>品種が見つかりませんでした</h2>
        <p><a class="btn btn-accent" href="../varieties.html">品種一覧へ戻る</a></p>
      </div>
    `;
    return;
  }

  const image = pageImagePath(variety.image);
  const galleryImages = (variety.gallery || []).map(pageImagePath);
  const galleryMarkup = galleryImages.length ? `
    <div class="section-header fade-in visible mt-xl">
      <p class="section-subtitle">Gallery / 写真</p>
      <h2>${variety.name}の写真</h2>
      <p>追加写真を掲載しています。</p>
    </div>
    <div class="card-grid fade-in visible">
      ${galleryImages.map((src, index) => `
        <article class="card">
          <img class="card-img variety-img" src="${src}" alt="${title}の追加写真 ${index + 1}" loading="lazy">
        </article>
      `).join('')}
    </div>
  ` : '';
  const hero = document.getElementById('detail-hero-image');
  if (hero) {
    hero.src = image;
    hero.alt = `${title}のスプレーマム`;
  }

  root.innerHTML = `
    <div class="section-header fade-in visible">
      <p class="section-subtitle">Overview / 概要</p>
      <h2>基本情報</h2>
      <p>${variety.summary}</p>
    </div>
    <div class="card-grid fade-in visible">
      <article class="card">
        <img class="card-img variety-img" src="${image}" alt="${title}の写真">
        <div class="card-body">
          <h3>見た目の特徴</h3>
          <p>${variety.summary}</p>
          <div class="chip-row mt-lg" aria-label="タグ">
            <span class="chip">${variety.color}</span>
            ${(variety.tags || []).map(tag => `<span class="chip chip--soft">#${tag}</span>`).join('')}
          </div>
        </div>
      </article>
      <article class="card">
        <div class="card-body">
          <h3>仕様</h3>
          <table class="spec-table" aria-label="品種仕様">
            <tbody>
              <tr><th>花色</th><td>${variety.color}</td></tr>
              <tr><th>出荷時期</th><td>${shipLabel(variety.shipMonths)}</td></tr>
              <tr><th>品種名</th><td>${variety.name}</td></tr>
              <tr><th>備考</th><td>写真から読み取った品種情報です。詳しい規格は順次追加できます。</td></tr>
            </tbody>
          </table>
          <p class="muted mt-lg">※出荷時期や規格は未登録の項目があります。</p>
        </div>
      </article>
    </div>
    ${galleryMarkup}
    <div class="section-header fade-in visible mt-xl">
      <p class="section-subtitle">Next / 次に</p>
      <h2>品種一覧へ戻る</h2>
      <p><a class="btn btn-accent" href="../varieties.html">品種一覧を見る</a></p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initVarietiesPage();
  initVarietyDetailPage();
});
