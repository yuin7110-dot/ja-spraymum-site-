品種の追加手順（運用メモ）

1) 画像を追加
- `images/varieties/` に写真を入れる（例: `images/varieties/<slug>.jpg`）

2) 一覧に追加（検索対象）
- `js/varieties.js` の `VARIETIES` に1件追加
  - `id`: `<slug>`（英数字とハイフン）
  - `name`: 品種名
  - `color`: 花色（例: `ピンク` / `緑`）
  - `shipMonths`: 出荷月の配列（例: `[7,8,9]`、未登録なら `[]`）
  - `tags`: 特徴タグ（例: `['仏花','大輪']`）
  - `summary`: 一覧に出す短い説明（1行）
  - `image`: `images/varieties/<slug>.jpg`
  - `url`: `varieties/<slug>.html`

3) 詳細ページを追加
- `varieties/poirel-pink.html` をコピーして `varieties/<slug>.html` を作る
- タイトル / 見出し / 画像パス / 表の項目（必要分）を更新

4) 確認
- `varieties.html` で検索・絞り込み、カード表示、詳細ページ遷移を確認

