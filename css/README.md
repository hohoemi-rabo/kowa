# CSS Modular Architecture

メモリアルホール光和のCSSファイルをWordPress開発に向けてモジュール化しました。

## ディレクトリ構造

```
css/
├── base/                   # 基礎スタイル
│   ├── variables.css      # CSS変数・デザインシステム
│   └── reset.css          # リセットCSS・基本タイポグラフィ
├── layout/                # レイアウトコンポーネント
│   ├── container.css      # コンテナ・グリッドシステム
│   ├── header.css         # ヘッダー・ナビゲーション
│   ├── footer.css         # フッター
│   └── sidebar.css        # サイドバー・固定メニュー
├── components/            # 再利用可能なコンポーネント
│   ├── buttons.css        # ボタンスタイル
│   ├── cards.css          # カードコンポーネント
│   ├── forms.css          # フォーム要素
│   └── animations.css     # アニメーション・エフェクト
├── pages/                 # ページ固有のスタイル
│   └── home.css           # ホームページ専用スタイル
├── style.css              # 元のCSSファイル（バックアップ用）
├── style-original-backup.css  # オリジナルのバックアップ
└── README.md              # この説明ファイル
```

## 使用方法

### 現在の構成（index.html）
```html
<!-- Modular CSS Architecture -->
<link rel="stylesheet" href="css/base/variables.css">
<link rel="stylesheet" href="css/base/reset.css">
<link rel="stylesheet" href="css/layout/container.css">
<link rel="stylesheet" href="css/layout/header.css">
<link rel="stylesheet" href="css/layout/footer.css">
<link rel="stylesheet" href="css/layout/sidebar.css">
<link rel="stylesheet" href="css/components/buttons.css">
<link rel="stylesheet" href="css/components/cards.css">
<link rel="stylesheet" href="css/components/forms.css">
<link rel="stylesheet" href="css/components/animations.css">
<link rel="stylesheet" href="css/pages/home.css">
<link rel="stylesheet" href="css/style.css">
```

## WordPressテーマ化に向けて

この構造により以下のメリットがあります：

1. **保守性の向上**: 各機能ごとにファイルが分かれているため、修正が容易
2. **キャッシュ効率**: HTTP/2環境では複数の小さなファイルの方が効率的
3. **WordPress統合**: テーマファイルでの条件分岐読み込みが可能
4. **チーム開発**: 複数人での並行作業が容易

## 注意事項

- レイアウトが崩れないよう、元の`style.css`も読み込まれています
- 他のHTMLファイル（club.html、contact.html等）の調整は別途必要です
- 本番環境では、パフォーマンスのため結合・圧縮を検討してください

## 抽出済みセクション

### base/variables.css
- CSS custom properties（変数）
- カラーパレット、タイポグラフィ、スペーシングなど

### base/reset.css  
- リセットCSS
- 基本的なHTML要素のスタイル
- タイポグラフィの基本設定

### layout/header.css
- ヘッダーレイアウト
- ナビゲーションメニュー
- モバイルハンバーガーメニュー

### layout/footer.css
- フッターの全スタイル
- 多階層フッター構成
- レスポンシブ対応

### layout/sidebar.css
- 固定サイドバー
- アニメーション効果
- スクロール連動表示

### components/buttons.css
- 全ボタンスタイル（primary、secondary、outline等）
- ホバー効果
- サイズバリエーション

### components/cards.css
- カードコンポーネント
- プランカード
- エレベーション効果

### components/forms.css
- フォーム要素スタイル
- バリデーション表示
- アクセシビリティ対応

### components/animations.css
- 各種アニメーション定義
- フェードイン・スケール効果
- パフォーマンス最適化

## 今後の展開

このモジュール構造により、WordPressテーマ化時に以下が可能になります：

- ページテンプレートごとの必要なCSSのみ読み込み
- カスタマイザーでの部分的なスタイル変更
- 子テーマでの安全なカスタマイズ
- プラグインとの競合回避