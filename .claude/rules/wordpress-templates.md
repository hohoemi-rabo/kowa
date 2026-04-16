---
paths:
  - "*.php"
  - "header.php"
  - "footer.php"
  - "sidebar.php"
  - "front-page.php"
  - "functions.php"
  - "page-*.php"
---

# WordPress テンプレートルール

## テンプレート構造

- **共通**: `header.php`, `footer.php`, `sidebar.php`, `front-page.php`, `index.php`, `functions.php`
- **固定ページ**: `page-family.php`, `page-ippansou.php`, `page-flower.php`, `page-soudan.php`, `page-member.php`, `page-company.php`, `page-contact.php`, `page-privacy.php`
- **静的HTML**: `*.html` は参照用（実際には使用されない）
- `page-flowchart.php`は存在しない（トップページの`#flow`セクションで表示）

## テンプレート関数パターン

- `get_header()` / `get_footer()` / `get_sidebar()` でテンプレート読み込み
- `get_theme_file_uri('path')` でテーマ内ファイルのURL取得
- `wp_head()` / `wp_footer()` / `wp_body_open()` でフック出力
- `home_url('/#section')` で別ページからトップページセクションへのアンカーリンク
- `esc_url()` でURL出力時のエスケープ

## functions.php 実装済み機能

1. **テーマサポート**: `title-tag`, `post-thumbnails`, `html5`
2. **CSS/JS読み込み** (`kowa_enqueue_assets`): 共通CSS全ページ読み込み、ページ固有CSSを`is_front_page()`/`is_page('slug')`で条件分岐、`filemtime()`キャッシュバスティング
3. **DNS Prefetch** (`kowa_dns_prefetch`)
4. **セキュリティ**: WPバージョン非表示、XML-RPC無効化、セキュリティヘッダー、ファイル編集無効化、ログインエラー統一、バージョン情報削除
5. **カスタムbodyクラス** (`kowa_custom_body_classes`): `.page-ippansou`等のページ固有クラス自動追加

**重要:**
- CSS/JS読み込みは全て`wp_enqueue_*`で管理（header/footerに直接記述しない）
- `<body <?php body_class(); ?>>`形式でbody_class()を使用
- 新ページ追加時: functions.phpの`kowa_enqueue_assets()`と`kowa_custom_body_classes()`に追加

## 新規ページ作成テンプレート

```php
<?php get_header(); ?>
<main id="main-content" tabindex="-1">
    <!-- コンテンツ -->
</main>
<?php get_sidebar(); get_footer(); ?>
```

## sidebar.php 固定UI要素

1. **固定サイドバー（PC 768px以上）**: 電話/会員登録/資料請求/プラン一覧/TOPへ戻る
2. **プログレスバー**: スクロール進行度表示
3. **固定下部バー（モバイル 1023px以下）**: 電話/会員登録/資料請求/メニュー

## Contact Form 7

- ショートコード: `[contact-form-7 id="2017a2e" title="お問い合わせ"]`
- 既存CSSクラス（`.club-form`, `.form-group`, `.btn`）を維持
- Cloudflare Turnstile連携済み
