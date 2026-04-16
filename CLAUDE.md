# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

株式会社光和の公式 Web サイト - 長野県飯田市の葬儀場向けの WordPress テーマ。「ご葬儀からご創儀へ」をコンセプトとした和モダンデザイン。

**プロジェクトステータス:** 静的HTMLからWordPressへの移行完了（全ページPHP化済み）

**技術スタック:** WordPress Theme / HTML5 / CSS3（モジュール構造） / Vanilla JS ES6+（単一main.js） / PHP 8.0+ / Font Awesome 6.5.1 / Google Fonts (Noto Sans JP & Noto Serif JP)

**ターゲット:** 50-60代以上、高齢者にも配慮した大きめフォントサイズと視認性の高いデザイン

**会社情報:**
- 正式名称: 株式会社光和
- 設立: 1993年4月26日
- フリーダイヤル: 0120-077-508 / TEL: 0265-53-2111
- 住所: 〒395-0821 長野県飯田市松尾新井6544-1
- 資格: 全日本葬祭業協同組合連合会認定の専門相談員在籍
- 宿泊: 可能（通夜室・仮眠室、バスルーム、パウダールーム、キッチン完備）

## コミットメッセージ形式

- 💄 `:lipstick:` デザイン修正
- ✨ `:sparkles:` 新機能追加
- 🐛 `:bug:` バグ修正
- ♻️ `:recycle:` リファクタリング
- 🎨 `:art:` コード構造改善
- 📝 `:memo:` ドキュメント更新

## 開発環境

- テーマパス: `/home/masayuki/wordpress/kowa/wp-content/themes/kowa_theme`
- フロントページ: `http://localhost/`
- 管理画面: `http://localhost/wp-admin/`
- デバッグログ: `wp-content/debug.log`
- デプロイ: GitHub Actions + FTP（mainプッシュで自動デプロイ → ロリポップ）

## ルール構成 (.claude/rules/)

詳細なルールはファイル種別ごとに `.claude/rules/` に分離しています。関連ファイルを編集する際に自動で読み込まれます：

- `wordpress-templates.md` — PHPテンプレート・functions.php・sidebar関連（*.php）
- `css-architecture.md` — CSSモジュール構造・ブレークポイント・設計方針（css/**/*.css）
- `javascript.md` — JS機能一覧・開発ルール（js/**/*.js）
- `page-details.md` — ページ別の特記事項・フッター構成（front-page.php, page-*.php, css/pages/*.css）
- `images-assets.md` — 画像管理・バナー配置・プレースホルダー（images/**/*）
