# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

メモリアルホール光和の公式 Web サイト - 長野県飯田市の葬儀場向けの WordPress テーマ。「ご葬儀からご創儀へ」をコンセプトとした和モダンデザイン。

**プロジェクトステータス:** 静的 HTML サイトから WordPress への移行完了（HTML→PHP移行済み）

**技術スタック:**

- WordPress Theme (カスタムテーマ)
- HTML5 (セマンティックマークアップ、構造化データ、OGP 完備)
- CSS3 (モジュール構造、カスタムプロパティ、アニメーション)
- Vanilla JavaScript ES6+ (モジュールなし、単一 main.js)
- PHP 8.0+
- Font Awesome 6.5.1 (CDN)
- Google Fonts: Noto Sans JP & Noto Serif JP

**ターゲット:** 50-60 代以上、高齢者にも配慮した大きめのフォントサイズと視認性の高いデザイン

**重要な実装状況:**
- ✅ functions.php: CSS/JS enqueue機能実装済み（WordPress標準に準拠）
- ✅ 全HTMLページ: WordPressテンプレート（page-*.php）に移行完了
- ✅ アンカーリンク: 別ページからトップページのセクションへのリンク対応済み
- ✅ タイトルタグ: WordPress自動生成に切り替え済み（ページごとに動的変更）
- ✅ body_class(): ページ固有のbodyクラスを自動出力（カスタムbodyクラス機能実装）
- ✅ セキュリティ対策: functions.phpに実装済み（詳細は下記参照）

## WordPress テーマアーキテクチャ

### テーマ構成の特徴

このプロジェクトは**完全なWordPress構成**です：

- **共通テンプレート**: `header.php`, `footer.php`, `sidebar.php`, `front-page.php`, `index.php`, `functions.php`
- **固定ページテンプレート**: `page-family.php`, `page-ippansou.php`, `page-flower.php`, `page-soudan.php`, `page-member.php`, `page-company.php`, `page-contact.php`, `page-privacy.php`
- **静的 HTML ファイル**: `*.html` (参照用として残存、実際には使用されない)

### 現在のテンプレート構造

```
テーマルート/
├── header.php              # WordPress ヘッダーテンプレート
├── footer.php              # WordPress フッターテンプレート
├── sidebar.php             # 固定サイドバー・モバイルバー
├── front-page.php          # トップページ (index.html から移行済み)
├── index.php               # メインテンプレート (空)
├── functions.php           # テーマ機能（CSS/JS enqueue実装済み）
├── style.css               # テーマ定義ファイル (Theme Name: kowa)
│
├── *.html                  # 参照用静的HTMLファイル（実際には使用されない）
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

### functions.php の実装済み機能

`functions.php` には以下の機能が実装されています：

**1. テーマサポート機能** (`kowa_theme_support`)
- `title-tag`: WordPressによる自動タイトルタグ生成
- `post-thumbnails`: アイキャッチ画像サポート
- `html5`: HTML5マークアップサポート

**2. CSS/JS読み込み** (`kowa_enqueue_assets`)
- 共通CSS（base、layout、components）を全ページで読み込み
- ページ固有CSSを条件分岐で読み込み（`is_front_page()`, `is_page('slug')`）
- キャッシュバスティング：`filemtime()`でファイル更新時に自動的にバージョン更新
- CDNリソース（Google Fonts、Font Awesome）

**3. DNS Prefetch** (`kowa_dns_prefetch`)
- 外部リソースのDNSプリフェッチでパフォーマンス向上

**4. セキュリティ対策** (複数の関数)
- WordPressバージョン情報の非表示
- XML-RPC無効化
- セキュリティヘッダー追加（X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy）
- 管理画面でのファイル編集無効化（DISALLOW_FILE_EDIT）
- ログインエラーメッセージの統一
- CSS/JSからバージョン情報削除

**5. カスタムbodyクラス** (`kowa_custom_body_classes`)
- ページ固有のクラスを自動追加（例: `.page-ippansou`, `.page-family`）
- CSSのページ固有スタイルに必要（plan.cssなど）

**重要:** header.phpとfooter.phpからCSS/JS読み込みは削除済み。全て`wp_enqueue_*`で管理。
**重要:** header.phpの`<body>`タグは`<body <?php body_class(); ?>>`形式でbody_class()を使用。

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

### ページ構造（移行完了）

```
✅ front-page.php        # トップページ
✅ page-family.php       # 家族葬プラン
✅ page-ippansou.php     # 一般葬プラン
✅ page-flower.php       # 献花・供花
✅ page-soudan.php       # 事前相談
✅ page-member.php       # 会員登録
✅ page-company.php      # 会社案内
✅ page-contact.php      # お問い合わせ
✅ page-privacy.php      # プライバシーポリシー
```

**注意:** `page-flowchart.php`（葬儀の流れ）は、トップページの`#flow`セクションで表示されるため、個別ページテンプレートは存在しません。

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

### プラン間リンクセクション（plan.css）

**`.other-plan-link`** - プランページ間の相互リンクボタンセクション

- **使用箇所**: page-ippansou.php（一般葬プラン）⇄ page-family.php（家族葬プラン）
- **デザイン**: グラデーション背景、円形アイコン、中央揃えレイアウト
- **バリエーション**:
  - `.other-plan-link` - 家族葬プランへのリンク（グリーン系背景）
  - `.other-plan-link--ippansou` - 一般葬プランへのリンク（オレンジ/ゴールド系背景）
- **レスポンシブ**: モバイルではボタンが全幅表示

### 固定 UI 要素の実装（sidebar.php）

sidebar.php には 3 つの固定 UI 要素が含まれています：

1. **固定サイドバー（PC 版 768px 以上）** - `.fixed-sidebar`

   - 電話相談: `tel:0120-077-508`
   - 会員登録: `<?php echo home_url('/member/'); ?>` へのリンク
   - 資料請求: `<?php echo home_url('/#contact'); ?>` アンカーリンク（トップページ）
   - プラン一覧: `<?php echo home_url('/#plans'); ?>` アンカーリンク（トップページ）
   - TOP へ戻る: `#backToTop` ボタン（300px 以上スクロールで表示）

2. **プログレスバー** - `.progress-bar` (スクロール進行度表示)

3. **固定下部バー（モバイル版 767px 以下）** - `.fixed-bottom-bar`
   - 電話: `tel:0120-077-508`
   - 会員登録: `<?php echo home_url('/member/'); ?>` へのリンク
   - 資料請求: `<?php echo home_url('/#contact'); ?>` アンカーリンク（トップページ）
   - メニュー: `.mobile-menu-toggle-bottom` (モバイルメニュー開閉)

**重要:**
- `sidebar.php`は`get_sidebar()`で読み込まれ、すべてのページで表示されます
- アンカーリンクは`home_url('/#section')`形式で、別ページからでもトップページのセクションに移動可能

## アクセシビリティ実装

- ARIA 属性完備（`aria-expanded`, `aria-label`, `aria-current`, `aria-live`）
- キーボードナビゲーション対応（Tab、Enter、Escape、矢印キー）
- `prefers-reduced-motion` 検出とアニメーション無効化
- LocalStorage によるユーザー設定保存
- スキップリンク（`.skip-link`）
- セマンティック HTML（`<nav>`, `<main>`, `<article>`, `<section>`）

## フォームとバリデーション

**実装済みフォーム:**

- お問い合わせフォーム (`page-contact.php`) - Contact Form 7実装済み
- 資料請求フォーム (`#requestForm`) - トップページに実装
- 会員登録フォーム (`page-member.php`)
- 事前相談フォーム (`page-soudan.php`)

**Contact Form 7 統合（page-contact.php）:**

- ショートコード: `[contact-form-7 id="2017a2e" title="お問い合わせ"]`
- 既存のCSSデザインを維持（`.club-form`, `.form-group`, `.btn`クラス）
- バリデーションはContact Form 7のデフォルト機能を使用
- 必須項目: 名前、フリガナ、メール、電話、お問い合わせ内容、プライバシーポリシー同意
- **メール設定:** 本番環境でWP Mail SMTPプラグインを使用推奨（ローカルでは不要）

**カスタムバリデーション（js/main.js）:**

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

1. ✅ **header.php の変数置換** - 修正完了
   - OGP画像、Twitter Card画像、Apple Touch Icon、JSON-LDロゴ: すべて`get_theme_file_uri()`と`esc_url()`で正しく出力

2. **header.phpのナビゲーション**
   - デスクトップナビゲーション: 「トップ」リンクはコメントアウト済み（ロゴクリックでトップに戻る想定）
   - モバイルメニュー: 「トップ」リンクはコメントアウト済み
   - アクセシビリティコントロール（アニメーション停止ボタン）: 削除済み

### 本番環境への注意

1. **画像パス:** 本番環境では `/images/` を `get_theme_file_uri('images/')` に完全変換
2. **電話番号:** `0120-077-508` は実際の番号
3. **住所情報:** `〒395-0821 長野県飯田市松尾新井6544-1`
4. **フォーム送信:** Contact Form 7 を使用（page-contact.php実装済み）、その他のフォームは独自実装が必要
5. **プレースホルダー画像:** 本番前に実画像に差し替え（plan-card\_\_image--placeholder クラスを削除）
6. **宿泊不可:** 近隣に宿泊施設なし、調べて案内可能。お迎えサービスは提供していない

### 完了済みの最適化

- ✅ **CSS/JS読み込み**: functions.phpの`wp_enqueue_*`で管理（WordPress標準に準拠）
- ✅ **キャッシュバスティング**: `filemtime()`でファイル更新時に自動的にバージョン管理
- ✅ **ページ固有CSS**: 条件分岐で必要なページのみ読み込み（パフォーマンス向上）
- ✅ **DNS Prefetch**: 外部リソース（Google Fonts、Font Awesome、CDN）のDNSプリフェッチ実装
- ✅ **タイトルタグ**: WordPressによる自動生成（SEO最適化）
- ✅ **Contact Form 7統合**: お問い合わせページにContact Form 7実装済み（既存デザイン維持）
- ✅ **ヒーロー画像**: flower/companyページにbackground-image + オーバーレイ実装
- ✅ **セキュリティ対策**: functions.phpに包括的なセキュリティ機能を実装
- ✅ **bodyクラス機能**: ページ固有のCSSを適用するためのカスタムbodyクラス自動出力
- ✅ **プラン間リンク**: page-ippansou.php ⇄ page-family.php で相互リンクボタン実装

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

### 開発時の重要なポイント

1. **アンカーリンクの形式**: 別ページからトップページのセクションへのリンクは`<?php echo home_url('/#section'); ?>`形式を使用
2. **CSS/JSの追加**: 新しいCSS/JSファイルを追加する場合は、必ずfunctions.phpの`kowa_enqueue_assets()`に追加
3. **ページ固有CSS**: 新しい固定ページを作成する場合、functions.phpに条件分岐（`is_page('slug')`）を追加
4. **タイトルタグ**: header.phpに手動で`<title>`タグを追加しない（WordPressが自動生成）
5. **パスの統一**: 画像やアセットのパスは必ず`get_theme_file_uri()`を使用
6. **bodyクラス**: 新しいページを追加する場合、functions.phpの`kowa_custom_body_classes()`にページ固有のクラスを追加
7. **Contact Form 7**: フォーム実装時は既存のCSSクラス（`.club-form`, `.form-group`, `.btn`）を使用して統一感を維持
8. **ヒーロー画像**: 背景画像を使用する場合は`::before`疑似要素でオーバーレイを追加し、テキストの可読性を確保
9. **プラン間リンク**: plan.cssの`.other-plan-link`セクションを使用して、関連プランへの誘導ボタンを配置可能

### テスト手順

```bash
# WordPressサイトにアクセス
# ブラウザ: http://localhost/ または設定されたドメイン

# エラーログ確認
tail -f wp-content/debug.log

# テーマファイルの変更は即座に反映される（キャッシュクリアが必要な場合あり）
```
