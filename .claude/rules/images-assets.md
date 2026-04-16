---
paths:
  - "images/**/*"
  - "front-page.php"
  - "footer.php"
  - "header.php"
---

# 画像・アセット管理ルール

## 画像ディレクトリ構造

```
images/
├── facilities/main-hall/   # メインホール（4枚）
├── facilities/middle-hall/ # 中ホール（4枚）
├── facilities/multi-hall/  # 多目的ホール（4枚）
├── facilities/parking/     # 駐車場（1枚）
├── facilities/flowers/     # 生花（3枚: 12.jpg, 13.JPG, 14.jpg）
├── hikari.png / nagomi.png # プラン内容図
├── favicon.png             # ファビコン・Apple Touch Icon
├── logo.png                # ヘッダーロゴマーク
├── logo_kowa.png           # ヘッダー「光和」ロゴ文字
├── logo_2.png              # フッターロゴ
├── olive.png               # オリーブ少額短期保険バナー
├── zensouren.gif           # 全日本葬祭業協同組合連合会バナー
├── if-logo.jpg             # IF共済会バナー
├── ambassador1_compressed.jpg  # アンバサダー画像1（圧縮済み）
├── ambassador2_compressed.jpg  # アンバサダー画像2（圧縮済み）
└── ambassador3_compressed.jpg  # アンバサダー画像3（圧縮済み）
```

## 画像パスルール

- 全てのパスは`get_theme_file_uri('images/...')`を使用
- 出力時は`esc_url()`でエスケープ
- 遅延読み込み: `loading="lazy"` を付与

## プレースホルダー

画像未配置箇所は CSS + Font Awesome でプレースホルダー実装:
- `.plan-card__image--placeholder` (home.css, plan.css)
- `.hall-card__gallery--placeholder`

## バナー配置ルール

- 外部リンクバナー: `target="_blank" rel="noopener noreferrer"` を付与
- ヒーロー: zensouren.gif（左）、olive.png（右）、下にアンバサダー画像
- フッター: 4列グリッド（zensouren/olive/IF共済会 + 全葬連カード）、下にアンバサダー3枚

## 本番環境TODO

- プレースホルダー画像を実画像に差し替え
- 施設ギャラリー画像を準備（元コードはHTMLコメントで保持）
