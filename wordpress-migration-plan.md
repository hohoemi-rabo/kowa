# WordPress移行計画書
## メモリアルホール光和 - WordPressテーマ化

---

## 移行概要

### 目的
静的HTMLサイトをWordPressに移行し、コンテンツ管理の効率化を図る

### メリット
- **コンテンツ管理**: 管理画面から簡単更新
- **SEO機能**: プラグインによる高度なSEO対策
- **拡張性**: 機能追加の柔軟性
- **セキュリティ**: 定期アップデートによる脆弱性対応

---

## 移行方針

### 1. テーマ開発アプローチ
- **カスタムテーマ**: 既存デザインを完全再現
- **レスポンシブ**: 既存のレスポンシブデザイン維持
- **パフォーマンス**: 最適化された軽量テーマ
- **アクセシビリティ**: 既存のアクセシビリティ機能継承

### 2. コンテンツ構成
```
WordPress構成:
├── トップページ (front-page.php)
├── 固定ページ
│   ├── 会社案内 (page-company.php)
│   ├── アクセス (page-access.php)
│   └── プライバシーポリシー (page-privacy.php)
├── 投稿
│   ├── お知らせ (news)
│   └── お客様の声 (voice)
└── カスタム投稿タイプ
    ├── 葬儀プラン (funeral-plan)
    └── 施設案内 (facility)
```

---

## 技術仕様

### WordPress要件
- **バージョン**: 6.4+
- **PHP**: 8.0+
- **MySQL**: 5.7+ または MariaDB 10.3+
- **サーバー**: Apache/Nginx + SSL

### 使用技術
- **HTML5**: セマンティックマークアップ
- **CSS3**: カスタムプロパティ、Grid、Flexbox
- **JavaScript**: ES6+、IntersectionObserver API
- **WordPress**: カスタムフィールド、カスタム投稿タイプ

---

## ファイル構成

### テーマディレクトリ構成
```
wp-content/themes/memorial-kowa/
├── style.css                 # メインスタイル
├── functions.php             # テーマ機能
├── index.php                 # メインテンプレート
├── front-page.php            # トップページ
├── header.php                # ヘッダー
├── footer.php                # フッター
├── sidebar.php               # サイドバー
├── single.php                # 単一投稿
├── page.php                  # 固定ページ
├── archive.php               # アーカイブ
├── 404.php                   # エラーページ
├── searchform.php            # 検索フォーム
├── inc/
│   ├── customizer.php        # カスタマイザー
│   ├── custom-fields.php     # カスタムフィールド
│   └── enqueue-scripts.php   # スクリプト読み込み
├── template-parts/
│   ├── hero-section.php      # ヒーローセクション
│   ├── plans-section.php     # プランセクション
│   ├── facilities-section.php # 施設セクション
│   └── contact-section.php   # お問い合わせセクション
├── assets/
│   ├── css/
│   │   └── style.css         # コンパイル後CSS
│   ├── js/
│   │   └── main.js           # メインJS
│   └── images/
│       └── (各種画像)
└── languages/
    └── ja.po                 # 日本語翻訳
```

---

## 移行手順

### Phase 1: 環境準備 (1-2日)
1. **WordPressインストール**
   - 本番環境にWordPress導入
   - 必要なプラグインインストール
   - 基本設定完了

2. **開発環境構築**
   - ローカル開発環境セットアップ
   - Git リポジトリ作成
   - 開発ワークフロー確立

### Phase 2: テーマ開発 (5-7日)
1. **基本テンプレート作成**
   ```php
   // functions.php の基本実装
   <?php
   function memorial_kowa_setup() {
       // テーマサポート
       add_theme_support('post-thumbnails');
       add_theme_support('title-tag');
       add_theme_support('custom-logo');
       
       // メニュー登録
       register_nav_menus(array(
           'primary' => 'メインメニュー',
           'footer' => 'フッターメニュー',
       ));
   }
   add_action('after_setup_theme', 'memorial_kowa_setup');
   ```

2. **静的ファイルの移植**
   - HTML → PHP テンプレート化
   - CSS の WordPress 対応
   - JavaScript の WordPress 対応

3. **カスタム投稿タイプ作成**
   ```php
   // 葬儀プランのカスタム投稿タイプ
   function create_funeral_plan_post_type() {
       register_post_type('funeral_plan', array(
           'labels' => array(
               'name' => '葬儀プラン',
               'singular_name' => '葬儀プラン',
           ),
           'public' => true,
           'has_archive' => true,
           'supports' => array('title', 'editor', 'thumbnail'),
           'menu_icon' => 'dashicons-heart',
       ));
   }
   add_action('init', 'create_funeral_plan_post_type');
   ```

### Phase 3: 機能実装 (3-4日)
1. **カスタムフィールド実装**
   - Advanced Custom Fields Pro 使用
   - プラン詳細フィールド
   - 施設情報フィールド

2. **フォーム機能**
   - Contact Form 7 設定
   - カスタムバリデーション
   - 既存JavaScript機能の移植

3. **SEO対策**
   - Yoast SEO 設定
   - 構造化データの移植
   - サイトマップ生成

### Phase 4: テスト・調整 (2-3日)
1. **機能テスト**
   - 全ページ表示確認
   - フォーム動作確認
   - 管理画面動作確認

2. **パフォーマンス最適化**
   - 画像最適化プラグイン設定
   - キャッシュプラグイン設定
   - Core Web Vitals 測定

3. **セキュリティ設定**
   - Wordfence 設定
   - バックアッププラグイン設定
   - ユーザー権限設定

### Phase 5: 本番移行 (1日)
1. **データ移行**
   - コンテンツインポート
   - 画像ファイルアップロード
   - 設定の最終確認

2. **最終テスト**
   - 全機能動作確認
   - パフォーマンステスト
   - セキュリティチェック

---

## 必要プラグイン

### 必須プラグイン
1. **Advanced Custom Fields Pro** - カスタムフィールド
2. **Contact Form 7** - フォーム機能
3. **Yoast SEO** - SEO最適化
4. **Wordfence Security** - セキュリティ

### 推奨プラグイン
1. **W3 Total Cache** - キャッシュ最適化
2. **Smush** - 画像最適化
3. **UpdraftPlus** - バックアップ
4. **WP Rocket** - パフォーマンス向上（有料）

### 不要プラグインの最小化
- プラグインは必要最小限に抑制
- 機能重複の避ける
- 定期的な見直し実施

---

## カスタマイザー設定

### 設定項目
```php
// カスタマイザー設定例
function memorial_kowa_customize_register($wp_customize) {
    // 会社情報セクション
    $wp_customize->add_section('company_info', array(
        'title' => '会社情報',
        'priority' => 30,
    ));
    
    // 電話番号
    $wp_customize->add_setting('phone_number');
    $wp_customize->add_control('phone_number', array(
        'label' => '電話番号',
        'section' => 'company_info',
        'type' => 'text',
    ));
    
    // 営業時間
    $wp_customize->add_setting('business_hours');
    $wp_customize->add_control('business_hours', array(
        'label' => '営業時間',
        'section' => 'company_info',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'memorial_kowa_customize_register');
```

---

## SEO設定継承

### 構造化データの移植
```php
// JSON-LD 構造化データの出力
function memorial_kowa_structured_data() {
    if (is_front_page()) {
        $structured_data = array(
            '@context' => 'https://schema.org',
            '@type' => 'LocalBusiness',
            'name' => get_bloginfo('name'),
            'description' => get_bloginfo('description'),
            'telephone' => get_theme_mod('phone_number'),
            // 既存の構造化データを移植
        );
        
        echo '<script type="application/ld+json">';
        echo json_encode($structured_data, JSON_UNESCAPED_UNICODE);
        echo '</script>';
    }
}
add_action('wp_head', 'memorial_kowa_structured_data');
```

---

## パフォーマンス最適化

### WordPress最適化
```php
// 不要な機能を無効化
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// CSS/JS最適化
function memorial_kowa_enqueue_scripts() {
    // メインスタイルシート
    wp_enqueue_style('memorial-kowa-style', 
        get_template_directory_uri() . '/assets/css/style.css',
        array(), filemtime(get_template_directory() . '/assets/css/style.css')
    );
    
    // メインスクリプト
    wp_enqueue_script('memorial-kowa-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(), filemtime(get_template_directory() . '/assets/js/main.js'), true
    );
}
add_action('wp_enqueue_scripts', 'memorial_kowa_enqueue_scripts');
```

---

## セキュリティ対策

### 基本セキュリティ
```php
// ログイン試行制限
function limit_login_attempts() {
    // Wordfence または独自実装
}

// ファイルアップロード制限
function restrict_file_types($mime_types) {
    unset($mime_types['exe']);
    unset($mime_types['php']);
    return $mime_types;
}
add_filter('upload_mimes', 'restrict_file_types');

// XMLRPCの無効化
add_filter('xmlrpc_enabled', '__return_false');
```

---

## 運用・保守

### 定期メンテナンス
- **WordPress本体**: 月1回更新
- **プラグイン**: 週1回更新確認
- **テーマ**: 必要に応じて更新
- **バックアップ**: 日次自動バックアップ

### コンテンツ管理
- **お知らせ更新**: 管理画面から随時
- **プラン変更**: カスタムフィールド編集
- **画像管理**: メディアライブラリで一元管理

### モニタリング
- **稼働監視**: Uptime監視サービス
- **セキュリティ監視**: Wordfence
- **パフォーマンス監視**: Google PageSpeed Insights

---

## 移行スケジュール

| Phase | 期間 | 主要作業 |
|-------|------|----------|
| Phase 1 | 1-2日 | 環境準備、WordPress設定 |
| Phase 2 | 5-7日 | テーマ開発、テンプレート作成 |
| Phase 3 | 3-4日 | 機能実装、カスタムフィールド |
| Phase 4 | 2-3日 | テスト、最適化 |
| Phase 5 | 1日 | 本番移行 |
| **合計** | **12-17日** | **完全移行** |

---

## 成功指標

### 技術指標
- **ページ読み込み速度**: < 3秒維持
- **Core Web Vitals**: Good評価維持
- **アップタイム**: 99.9%以上
- **セキュリティ**: 脆弱性0件

### 運用指標
- **コンテンツ更新**: 作業時間50%短縮
- **管理効率**: ユーザー満足度向上
- **拡張性**: 新機能追加の容易さ

---

## リスク対策

### 主要リスク
1. **データ損失**: 完全バックアップ取得
2. **ダウンタイム**: 段階的移行実施
3. **SEO影響**: URL構造維持、リダイレクト設定
4. **機能不具合**: 十分なテスト期間確保

### 緊急時対応
- **ロールバック計画**: 元サイトへの即座復旧
- **緊急連絡先**: 技術サポート体制確保
- **代替手段**: 静的サイトでの一時運用

---

**移行計画承認**: ✅  
**開始予定日**: [日付を記入]  
**完了予定日**: [日付を記入]  
**プロジェクト責任者**: [担当者名を記入]