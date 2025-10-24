# メモリアルホール光和 - デプロイメントガイド

## 概要
このガイドは、メモリアルホール光和のウェブサイトを本番環境にデプロイするための手順書です。

---

## 前提条件

### 必要なファイル
- `index.html` - メインHTMLファイル
- `css/style.css` - スタイルシート
- `js/main.js` - JavaScript
- `sitemap.xml` - サイトマップ
- `robots.txt` - クローラー設定
- `favicon.ico` - ファビコン
- `apple-touch-icon.png` - Apple用アイコン

### サーバー要件
- **Webサーバー**: Apache 2.4+ または Nginx 1.18+
- **PHP**: 7.4+ (WordPress移行時)
- **HTTPS**: SSL証明書必須
- **Gzip/Brotli**: 圧縮対応推奨

---

## デプロイメント手順

### 1. ファイルアップロード

```bash
# FTP/SFTP でのアップロード例
scp -r /path/to/kowa/* user@server:/var/www/html/
```

#### アップロード対象ファイル
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── (各種画像ファイル)
├── fonts/
│   └── (カスタムフォント、必要な場合)
├── sitemap.xml
├── robots.txt
├── favicon.ico
└── apple-touch-icon.png
```

### 2. Webサーバー設定

#### Apache (.htaccess)
```apache
# HTTPS リダイレクト
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Gzip圧縮
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# ブラウザキャッシュ
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# セキュリティヘッダー
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Content Security Policy
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com data:; connect-src 'self'"
```

#### Nginx
```nginx
server {
    listen 443 ssl http2;
    server_name memorial-kowa.com www.memorial-kowa.com;
    
    root /var/www/html;
    index index.html;
    
    # SSL設定
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # Gzip圧縮
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    # セキュリティヘッダー
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    
    # Content Security Policy
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com data:; connect-src 'self'";
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # 静的ファイルのキャッシュ
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}

# HTTPからHTTPSへのリダイレクト
server {
    listen 80;
    server_name memorial-kowa.com www.memorial-kowa.com;
    return 301 https://$server_name$request_uri;
}
```

### 3. DNS設定

#### Aレコード
```
@ IN A 192.168.1.100
www IN A 192.168.1.100
```

#### CNAMEレコード (CDN使用時)
```
www IN CNAME memorial-kowa.com
cdn IN CNAME cdn-provider.com
```

### 4. SSL証明書設定

#### Let's Encrypt (推奨)
```bash
# Certbot インストール
sudo apt install certbot python3-certbot-apache

# 証明書取得
sudo certbot --apache -d memorial-kowa.com -d www.memorial-kowa.com

# 自動更新設定
sudo crontab -e
# 以下を追加
0 12 * * * /usr/bin/certbot renew --quiet
```

---

## 公開後の設定

### 1. Google Search Console
1. https://search.google.com/search-console/ にアクセス
2. プロパティを追加: `https://memorial-kowa.com`
3. HTML確認ファイルをアップロードまたはメタタグを追加
4. サイトマップを送信: `https://memorial-kowa.com/sitemap.xml`

### 2. Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. 構造化データテスト
- https://search.google.com/test/rich-results でテスト
- 修正が必要な場合はJSON-LDを調整

---

## 監視・メンテナンス

### パフォーマンス監視
- **Google PageSpeed Insights**: 月1回チェック
- **GTmetrix**: 週1回チェック
- **Uptime監視**: 外部サービス利用推奨

### セキュリティ監視
- **SSL証明書**: 有効期限チェック
- **脆弱性スキャン**: 月1回実施
- **ログ監視**: 不正アクセスチェック

### コンテンツ更新
- **お知らせ更新**: 定期的に実施
- **画像最適化**: 新規追加時に実施
- **ブラウザテスト**: 主要ブラウザ更新後に実施

---

## トラブルシューティング

### よくある問題

#### 1. CSS/JSが読み込まれない
- パスの確認（相対パス/絶対パス）
- ファイルのアップロード確認
- キャッシュクリア

#### 2. HTTPS混在コンテンツエラー
- 外部リソース（画像、フォント）のHTTPS化
- Content Security Policyの調整

#### 3. モバイルでの表示崩れ
- viewport メタタグの確認
- CSS メディアクエリの調整
- タッチイベントの動作確認

#### 4. フォーム送信エラー
- サーバーサイド処理の実装
- CSRFトークンの実装
- バリデーションの調整

---

## バックアップ・復旧

### バックアップ
```bash
# 定期バックアップスクリプト例
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/memorial-kowa"
SITE_DIR="/var/www/html"

# ファイルバックアップ
tar -czf ${BACKUP_DIR}/site_${DATE}.tar.gz ${SITE_DIR}

# 古いバックアップ削除（30日以上）
find ${BACKUP_DIR} -name "site_*.tar.gz" -mtime +30 -delete
```

### 復旧手順
1. バックアップファイルの確認
2. 該当ファイルの復元
3. パーミッション設定
4. 動作確認

---

## WordPress移行準備

### 必要な作業
1. **テーマ化**: HTML/CSS/JSをWordPressテーマに変換
2. **データベース**: MySQL/MariaDB設定
3. **プラグイン**: 必要最小限のプラグイン選定
4. **移行テスト**: ステージング環境での確認
5. **本番移行**: ダウンタイム最小化の計画

### おすすめプラグイン
- **Yoast SEO**: SEO最適化
- **W3 Total Cache**: キャッシュ最適化
- **Wordfence**: セキュリティ
- **Contact Form 7**: フォーム機能

---

## チェックリスト

### デプロイ前
- [ ] ファイル完全性確認
- [ ] テスト環境での動作確認
- [ ] バックアップ作成
- [ ] DNS設定確認

### デプロイ後
- [ ] 全ページ動作確認
- [ ] HTTPS動作確認
- [ ] フォーム動作確認
- [ ] パフォーマンス測定
- [ ] Google Search Console設定
- [ ] Google Analytics設定
- [ ] 監視設定

**デプロイ完了**: ✅  
**運用開始日**: [日付を記入]  
**担当者**: [担当者名を記入]