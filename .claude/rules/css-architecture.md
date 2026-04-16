---
paths:
  - "css/**/*.css"
  - "style.css"
---

# CSS アーキテクチャルール

## モジュール構造

```
css/
├── base/variables.css    # CSS変数（カラー、タイポグラフィ、スペーシング）
├── base/reset.css        # リセットCSS、基本タイポグラフィ
├── layout/container.css  # コンテナ、グリッドシステム
├── layout/header.css     # ヘッダー、ナビゲーション、ドロップダウン
├── layout/footer.css     # フッター
├── layout/sidebar.css    # 固定サイドバー（PC）
├── layout/mobile-bar.css # 固定下部バー（スマホ）
├── components/buttons.css, cards.css, forms.css, animations.css, accessibility.css
├── pages/home.css, plan.css, company.css, contact.css, flowchart.css, flower.css, member.css, privacy.css, soudan.css
└── style.css             # レガシー統合CSS（後方互換用）
```

## 読み込み順序（重要）

1. base/variables.css → base/reset.css
2. layout/*.css (container → header → footer → sidebar → mobile-bar)
3. components/*.css
4. pages/{ページ名}.css

## 編集ルール

- 汎用スタイル → `components/` または `layout/`
- ページ固有スタイル → `pages/{ページ名}.css`
- CSS変数変更 → `base/variables.css`
- 新CSSファイル追加時は必ず`functions.php`の`kowa_enqueue_assets()`に追加

## レスポンシブブレークポイント

- モバイル: 0-767px
- タブレット: 768-1023px
- デスクトップ: 1024px以上

## CSS設計方針

- **グリッドレイアウト**: カード数に合わせて`repeat(N, 1fr)`固定（auto-fit/auto-fillは使わない）
- CSS変数: `--color-primary`, `--color-accent`, `--font-family-sans` 等を`base/variables.css`で一元管理
- モバイルメニュー: transform: translateX方式（横スクロール防止のためhtml/bodyにoverflow-x: hidden）
