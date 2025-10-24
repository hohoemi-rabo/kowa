# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

メモリアルホール光和の公式 Web サイト - 長野県飯田市の葬儀場向けの WordPress テーマ。「ご葬儀からご創儀へ」をコンセプトとした和モダンデザイン。

**プロジェクトステータス:** 静的 HTML サイトから WordPress への移行中

**技術スタック:**

- WordPress Theme (カスタムテーマ開発中)
- HTML5 (セマンティックマークアップ、構造化データ、OGP 完備)
- CSS3 (モジュール構造、カスタムプロパティ、アニメーション)
- Vanilla JavaScript ES6+ (モジュールなし、単一 main.js)
- PHP 8.0+
- Font Awesome 6.5.1 (CDN)
- Google Fonts: Noto Sans JP & Noto Serif JP

**ターゲット:** 50-60 代以上、高齢者にも配慮した大きめのフォントサイズと視認性の高いデザイン

## WordPress テーマアーキテクチャ

### テーマ構成の特徴

このプロジェクトは**ハイブリッド構成**です：

- **WordPress テンプレート**: `header.php`, `footer.php`, `sidebar.php`, `front-page.php`, `index.php`, `functions.php`
- **静的 HTML ファイル**: `family.html`, `ippansou.html`, `flowchart.html`, `flower.html`, `soudan.html`, `member.html`, `company.html`, `contact.html`, `privacy.html` (移行待ち)

### 現在のテンプレート構造

```
テーマルート/
├── header.php              # WordPress ヘッダーテンプレート
├── footer.php              # WordPress フッターテンプレート
├── sidebar.php             # 固定サイドバー・モバイルバー
├── front-page.php          # トップページ (index.html から移行済み)
├── index.php               # メインテンプレート (空)
├── functions.php           # テーマ機能 (現在空)
├── style.css               # テーマ定義ファイル (Theme Name: kowa)
│
├── *.html                  # 移行待ち静的HTMLファイル
│
├── css/                    # モジュール化されたCSS
├── js/                     # JavaScript (main.js)
└── images/                 # 画像アセット
```

### WordPress テンプレート関数の使用パターン

**header.php:**

- `<?php wp_head(); ?>` - WordPress ヘッダーフック (line 186)
- `<?php wp_body_open(); ?>` - ボディオープンフック (line 189)
- `<?php echo get_theme_file_uri('path'); ?>` - アセット URL 取得

**footer.php:**

- `<?php echo get_theme_file_uri('path'); ?>` - アセット URL 取得
- `<?php wp_footer(); ?>` - WordPress フッターフック (line 146)

**front-page.php:**

- `<?php get_header(); ?>` - ヘッダー読み込み (line 1)
- `<?php get_sidebar(); ?>` - サイドバー読み込み (line 1332)
- `<?php get_footer(); ?>` - フッター読み込み (line 1334)
- `<?php echo get_theme_file_uri('images/...'); ?>` - 画像パス取得

### 重要: functions.php は現在空

`functions.php` は存在するが、現在コンテンツがありません。以下の実装が必要です：

```php
<?php
// テーマサポート機能
function kowa_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'kowa_theme_support');

// CSS/JSの読み込み
function kowa_enqueue_assets() {
    // 既存のCSSモジュール構造を維持
    wp_enqueue_style('kowa-variables', get_theme_file_uri('css/base/variables.css'));
    wp_enqueue_style('kowa-reset', get_theme_file_uri('css/base/reset.css'));
    // ... (その他のCSS)

    wp_enqueue_script('kowa-main', get_theme_file_uri('js/main.js'), array(), null, true);
}
add_action('wp_enqueue_scripts', 'kowa_enqueue_assets');
```

## WordPress 開発ワークフロー

### 静的 HTML ファイルから WordPress テンプレートへの移行手順

1. **HTML ファイルの構造を理解**

   - 既存の `*.html` ファイルを確認
   - セクション構造を把握（ヘッダー、メインコンテンツ、フッター）

2. **WordPress テンプレートファイル作成**

   ```php
   <?php
   /**
    * Template Name: [ページ名]
    */
   get_header();
   ?>

   <main>
       <!-- HTMLの<main>内容をここに移植 -->
   </main>

   <?php
   get_sidebar();
   get_footer();
   ?>
   ```

3. **パス変換**

   - 画像パス: `images/` → `<?php echo get_theme_file_uri('images/...'); ?>`
   - CSS パス: `css/` → `<?php echo get_theme_file_uri('css/...'); ?>`
   - リンク: `xxx.html` → 固定ページのパーマリンクまたは `xxx.php`

4. **CSS 読み込み位置の調整**
   - header.php にページ固有の CSS 追加、または
   - functions.php で条件分岐して enqueue

### ページ構造（移行ステータス）

```
✅ front-page.php        # トップページ (index.html から移行済み)
⏳ page-family.php       # 家族葬プラン (family.html 移行待ち)
⏳ page-ippansou.php     # 一般葬プラン (ippansou.html 移行待ち)
⏳ page-flowchart.php    # 葬儀の流れ (flowchart.html 移行待ち)
⏳ page-flower.php       # 献花・供花 (flower.html 移行待ち)
⏳ page-soudan.php       # 事前相談 (soudan.html 移行待ち)
⏳ page-member.php       # 会員登録 (member.html 移行待ち)
⏳ page-company.php      # 会社案内 (company.html 移行待ち)
⏳ page-contact.php      # お問い合わせ (contact.html 移行待ち)
⏳ page-privacy.php      # プライバシーポリシー (privacy.html 移行待ち)
```

### CSS アーキテクチャ (モジュール構造)

```
css/
├── base/
│   ├── variables.css      # CSS変数（カラー、タイポグラフィ、スペーシング）
│   └── reset.css          # リセットCSS、基本タイポグラフィ
├── layout/
│   ├── container.css      # コンテナ、グリッドシステム
│   ├── header.css         # ヘッダー、ナビゲーション、ドロップダウン
│   ├── footer.css         # フッター
│   ├── sidebar.css        # 固定サイドバー（PC）
│   └── mobile-bar.css     # 固定下部バー（スマホ）
├── components/
│   ├── buttons.css        # 各種ボタンスタイル
│   ├── cards.css          # カードコンポーネント
│   ├── forms.css          # フォーム要素
│   ├── animations.css     # アニメーション定義
│   └── accessibility.css  # アクセシビリティ機能
├── pages/              # ページ固有のスタイル
│   ├── home.css
│   ├── plan.css
│   ├── company.css
│   ├── contact.css
│   ├── flowchart.css
│   ├── flower.css
│   ├── member.css
│   ├── privacy.css
│   └── soudan.css
└── style.css           # レガシー統合CSS（後方互換用）
```

**CSS 読み込み順序（重要）:**

1. base/variables.css → base/reset.css
2. layout/\*.css (container → header → footer → sidebar → mobile-bar)
3. components/\*.css
4. pages/{ページ名}.css

### JavaScript アーキテクチャ

**単一ファイル構成:** `js/main.js` (2282 行)

**主要機能モジュール:**

- `initMobileMenu()` - モバイルハンバーガーメニュー、サブメニュー展開
- `initDropdownMenu()` - デスクトップドロップダウン（ホバー/クリック）
- `initScrollToTop()` - トップへ戻るボタン、サイドバー表示制御
- `initSmoothScroll()` - アンカーリンクのスムーススクロール
- `initPlanCardAnimations()` - プランカードの IntersectionObserver アニメーション
- `initFacilityGallery()` - 施設ギャラリー、ライトボックス
- `initFuneralInfo()` - FAQ アコーディオン、タイムライン
- `initFormValidation()` - フォームバリデーション、ハニーポット対策
- `initAccessibilityFeatures()` - モーション制御、キーボードナビゲーション、ARIA Live Regions
- `initPerformanceOptimizations()` - 遅延読み込み、WebP 対応、Core Web Vitals 測定

**ユーティリティ関数:**

- `throttle(func, limit)` - スクロールイベント最適化
- `debounce(func, wait)` - リサイズイベント最適化
- `isMobile()`, `isTablet()`, `isDesktop()` - レスポンシブ判定

## 開発ワークフロー

### ファイルの編集方法

1. **新規ページ追加時:**

   - HTML ファイルを作成（既存ページのヘッダー/フッター構造をコピー）
   - `css/pages/{ページ名}.css` を作成
   - HTML の `<head>` に該当 CSS を読み込み
   - 必要に応じて `js/main.js` に初期化関数を追加

2. **CSS 編集時:**

   - 汎用的なスタイル → `components/` または `layout/`
   - ページ固有のスタイル → `pages/{ページ名}.css`
   - CSS 変数の変更 → `base/variables.css`

3. **JavaScript 機能追加時:**
   - `js/main.js` の最下部に新関数を追加
   - `DOMContentLoaded` リスナー内で初期化関数を呼び出し
   - IntersectionObserver 使用時は `rootMargin` と `threshold` を既存パターンに合わせる

### レスポンシブブレークポイント

```javascript
// js/main.js より
const breakpoints = {
  mobile: 767, // 0-767px
  tablet: 1023, // 768-1023px
  desktop: 1024, // 1024px以上
};
```

### 固定 UI 要素の実装（sidebar.php）

sidebar.php には 3 つの固定 UI 要素が含まれています：

1. **固定サイドバー（PC 版 768px 以上）** - `.fixed-sidebar`

   - 電話相談: `tel:0120-077-508`
   - 会員登録: `member.html` へのリンク
   - 資料請求: `#contact` アンカーリンク
   - プラン一覧: `#plans` アンカーリンク
   - TOP へ戻る: `#backToTop` ボタン（300px 以上スクロールで表示）

2. **プログレスバー** - `.progress-bar` (スクロール進行度表示)

3. **固定下部バー（モバイル版 767px 以下）** - `.fixed-bottom-bar`
   - 電話: `tel:0120-077-508`
   - 会員登録: `member.html` へのリンク
   - 資料請求: `#contact` アンカーリンク
   - メニュー: `.mobile-menu-toggle-bottom` (モバイルメニュー開閉)

**重要:** `sidebar.php`は`get_sidebar()`で読み込まれ、すべてのページで表示されます。

## アクセシビリティ実装

- ARIA 属性完備（`aria-expanded`, `aria-label`, `aria-current`, `aria-live`）
- キーボードナビゲーション対応（Tab、Enter、Escape、矢印キー）
- `prefers-reduced-motion` 検出とアニメーション無効化
- LocalStorage によるユーザー設定保存
- スキップリンク（`.skip-link`）
- セマンティック HTML（`<nav>`, `<main>`, `<article>`, `<section>`）

## フォームとバリデーション

**実装済みフォーム:**

- お問い合わせフォーム (`#contactForm`)
- 資料請求フォーム (`#requestForm`)

**バリデーション:**

- リアルタイム検証（`input`、`blur` イベント）
- メール形式チェック（正規表現）
- 電話番号形式チェック
- ハニーポット対策（`.honeypot` フィールド）
- エラー表示（`.form-error` span）
- 送信成功モーダル (`#successModal`)

## パフォーマンス最適化

- 画像の遅延読み込み（`loading="lazy"`、IntersectionObserver）
- WebP 自動変換（Unsplash 画像）
- DNS prefetch（Google Fonts、Unsplash、CDN）
- Core Web Vitals 測定（LCP、FID、CLS）
- `requestAnimationFrame` によるスクロールイベント最適化
- `will-change-transform` の適切な使用

## 既知の技術的特徴

1. **JavaScript モジュールなし:** すべての機能が単一の `main.js` に集約。条件分岐で各ページの初期化関数を呼び出し（`if (typeof initXxx === 'function')`）

2. **CSS 変数の活用:** `--color-primary`, `--color-accent`, `--font-family-sans` など、`base/variables.css` で一元管理

3. **IntersectionObserver 多用:** スクロールアニメーション、遅延読み込み、カウンターアニメーションに使用

4. **モバイルメニュー:** スライドイン式（`.mobile-menu.show`）、オーバーレイクリックで閉じる、サブメニュー展開機能付き

5. **構造化データ:** JSON-LD 形式で Organization、LocalBusiness、WebSite、BreadcrumbList を実装

## 開発環境とデバッグ

### ローカル開発環境

このテーマは `/home/masayuki/wordpress/kowa/wp-content/themes/kowa_theme` にあります。

**WordPress URL 構造:**

- フロントページ: `http://localhost/` (または設定されたドメイン)
- 管理画面: `http://localhost/wp-admin/`

### デバッグの有効化

`wp-config.php`でデバッグモードを有効化：

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

エラーログ: `wp-content/debug.log`

### テーマのテスト

1. **WordPress 管理画面でテーマを有効化**

   - 外観 → テーマ → 「kowa」を有効化

2. **フロントページの確認**

   - 設定 → 表示設定 → 「フロントページの表示」を「固定ページ」に設定
   - または自動的に `front-page.php` が使用される

3. **ブラウザの開発者ツールで CSS/JS を確認**
   - CSS モジュールが正しく読み込まれているか
   - `js/main.js` が動作しているか

## WordPress 移行参考資料

- `wordpress-migration-plan.md` - 詳細な移行計画（プラグイン、カスタム投稿タイプなど）
- `deployment-guide.md` - デプロイメント手順

## コミットメッセージ形式

- `:lipstick:` (💄) - デザイン修正
- `:sparkles:` (✨) - 新機能追加
- `:bug:` (🐛) - バグ修正
- `:recycle:` (♻️) - リファクタリング
- `:art:` (🎨) - コード構造改善

## 画像管理とプレースホルダー

### 画像準備中プレースホルダー

画像が未配置の箇所には、CSS + Font Awesome によるプレースホルダーを実装：

```html
<div class="plan-card__image plan-card__image--placeholder">
  <i class="fas fa-image" aria-hidden="true"></i>
  <span>画像準備中</span>
</div>
```

**対応 CSS:**

- `home.css`: `.plan-card__image--placeholder` (index.html の葬儀プラン)
- `plan.css`: `.plan-card__image--placeholder` (ippansou.html, family.html)

### 実装済み画像配置

```
images/
├── facilities/
│   ├── main-hall/      # メインホール（4枚: main.jpg, altar.jpg, seating.jpg, interior.jpg）
│   ├── middle-hall/    # 中ホール（4枚）
│   ├── multi-hall/     # 多目的ホール（4枚）
│   ├── parking/        # 駐車場（1枚: overview.jpg）
│   └── flowers/        # 生花（3枚: 12.jpg, 13.JPG, 14.jpg）
├── hikari.png          # 光プラン内容図
├── nagomi.png          # 和みプラン内容図
├── logo.png            # ヘッダーロゴ
└── logo_2.png          # フッターロゴ
```

## UI/UX の特徴的な実装

### 固定サイドバー（PC）のホバー展開

**css/layout/sidebar.css:**

- 通常時: 幅 60px（アイコンのみ）
- ホバー時: 幅 160px（テキスト表示）
- 15 インチ以下の画面でもメインコンテンツに被らない設計

### 施設ギャラリーのサムネイル切り替え

**js/main.js - initFacilityGallery():**

- 各ホール 4 枚のサムネイル（main.jpg, altar.jpg, seating.jpg, interior.jpg）
- クリックで大画像切り替え（フェードアニメーション）
- 拡大ボタンは削除済み（ライトボックス不要）

### よくある質問（FAQ）のインタラクティブリンク

**home.css - .faq-link:**

- FAQ 内の内部リンクに専用スタイル適用
- ホバー時に Font Awesome アイコン（右矢印）が横移動
- 例: 「葬儀の費用」→「葬儀プラン一覧」へスクロール

## ページ別の特記事項

### index.html

- 葬儀プラン 3 カード: プレースホルダー画像使用中
- 施設案内: 実画像配置済み（3 ホール + 駐車場）
- FAQ: 宿泊不可、近隣施設の案内可能（調べて紹介）

### ippansou.html

- 4 プランカード: すべてプレースホルダー画像

### family.html

- 2 プランカード（光・和み）: プレースホルダー画像

### flower.html

- 3 カードレイアウト（縦長画像対応）
- 画像高さ: 380px
- 実画像配置済み（12.jpg, 13.JPG, 14.jpg）

### company.html

- 社長写真: 削除済み（テキスト中央寄せレイアウト）
- スタッフ紹介: 削除済み

### soudan.html

- 相談員画像: 削除済み（中央寄せレイアウト）
- `.consultant-intro__content--centered` クラスで対応

## 既知の問題と注意事項

### WordPress 移行に関する問題

1. **header.php の不完全な変数置換**

   - Line 18: OGP画像のメタタグが不正 - `content="https://memorial-kowa.example.com/images/og-image.jpg'); ?>"` となっている
   - Line 29: Twitter Card画像も同様
   - Line 55: Apple Touch Iconのパスが不正 - `href="/apple-touch-icon.png'); ?>"` となっている
   - Line 68: JSON-LD内のロゴパスが不正 - `"logo": "https://memorial-kowa.example.com/images/logo.png'); ?>"` となっている

   **修正が必要:** これらの行では、静的URLとPHP関数が混在している。完全にPHPに変換するか、静的URLに統一する必要がある

2. **静的リンクの残存**

   - header.php と footer.php に `xxx.html` への静的リンクが多数残っている
   - WordPress の固定ページ作成後、`get_permalink(page_id)` または `home_url('/page-slug/')` に変更が必要

3. **functions.php が空**
   - CSS/JS の enqueue が実装されていない
   - テーマサポート機能が未実装
   - 現在は header.php で CDN/直接読み込みしているが、WordPress 標準に従うべき

### 本番環境への注意

1. **画像パス:** 本番環境では `/images/` を `get_theme_file_uri('images/')` に完全変換
2. **電話番号:** `0120-077-508` は実際の番号
3. **住所情報:** `〒395-0821 長野県飯田市松尾新井6544-1`
4. **フォーム送信:** 現在はコンソールログのみ、Contact Form 7 または独自実装が必要
5. **プレースホルダー画像:** 本番前に実画像に差し替え（plan-card\_\_image--placeholder クラスを削除）
6. **宿泊不可:** 近隣に宿泊施設なし、調べて案内可能。お迎えサービスは提供していない

### パフォーマンスの注意

- CSS は現在 header.php で個別に読み込まれているが、本来は functions.php で`wp_enqueue_style()`を使用すべき
- JavaScript は footer.php で defer 属性付きで読み込まれているが、`wp_enqueue_script()`を使用すべき
- CDN (Font Awesome, Google Fonts) は現在直接読み込み - これは許容される

## クイックリファレンス

### 新規ページを WordPress 化する場合

```bash
# 1. 既存HTMLを確認
cat [ページ名].html

# 2. 新しいWordPressテンプレートファイルを作成
# page-[slug].php または page-templates/[template-name].php

# 3. 構造を以下のように変換:
```

```php
<?php
/**
 * Template Name: [ページ名]
 */
get_header();
?>

<!-- ページ固有のCSSを追加 (header.phpまたはfunctions.php) -->
<link rel="stylesheet" href="<?php echo get_theme_file_uri('css/pages/[page].css'); ?>">

<main id="main-content" tabindex="-1">
    <!-- 元のHTMLの<main>内容をここにコピー -->
    <!-- すべての静的パスを <?php echo get_theme_file_uri('...'); ?> に変換 -->
</main>

<?php
get_sidebar();
get_footer();
?>
```

### よく使う WordPress 関数

- `get_header()` - header.php を読み込み
- `get_footer()` - footer.php を読み込み
- `get_sidebar()` - sidebar.php を読み込み
- `get_theme_file_uri('path')` - テーマ内ファイルの絶対 URL 取得
- `wp_head()` - ヘッダーフック（CSS やメタタグが出力される）
- `wp_footer()` - フッターフック（JS が出力される）
- `wp_body_open()` - body 開始タグ直後に実行するフック

### ファイル編集の優先順位

1. **functions.php を先に実装** - テーマの基本機能を定義
2. **header.php の PHP エラー修正** - 不正な閉じタグを修正
3. **残りの HTML ページを順次移行** - page-\*.php テンプレート作成
4. **静的リンクを WordPress リンクに変換** - `xxx.html` → WordPress パーマリンク
5. **CSS/JS enqueue を functions.php に移行** - WordPress 標準に準拠

### テスト手順

```bash
# WordPressサイトにアクセス
# ブラウザ: http://localhost/ または設定されたドメイン

# エラーログ確認
tail -f wp-content/debug.log

# テーマファイルの変更は即座に反映される（キャッシュクリアが必要な場合あり）
```
