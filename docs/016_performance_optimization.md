# 016: パフォーマンス最適化

## 概要
サイトの高速化とパフォーマンス向上

## 要件
- 画像の最適化
- コードの最小化
- 遅延読み込みの実装

## タスク

### TODO
- [ ] 画像最適化
  - [ ] 適切な画像フォーマットの選択
    - [ ] WebP形式への変換
    - [ ] JPEG/PNG圧縮
  - [ ] レスポンシブ画像の実装
    - [ ] srcset属性の使用
    - [ ] picture要素の活用
  - [ ] 遅延読み込み（lazy loading）
    - [ ] loading="lazy"属性
    - [ ] IntersectionObserverでの実装
  - [ ] 画像のプリロード（重要画像）
- [ ] CSS最適化
  - [ ] CSSの最小化（minify）
  - [ ] 不要なCSSの削除
  - [ ] Critical CSSの抽出
  - [ ] CSS変数の効率的な使用
  - [ ] メディアクエリの統合
- [ ] JavaScript最適化
  - [ ] JavaScriptの最小化
  - [ ] 不要なコードの削除
  - [ ] コード分割（必要に応じて）
  - [ ] 非同期読み込み（defer/async）
  - [ ] イベントリスナーの最適化
- [ ] フォント最適化
  - [ ] フォントのサブセット化
  - [ ] font-displayの設定
  - [ ] プリロードの実装
  - [ ] システムフォントの活用
- [ ] キャッシュ戦略
  - [ ] ブラウザキャッシュの設定
  - [ ] Service Worker（オプション）
  - [ ] リソースのバージョニング
- [ ] ネットワーク最適化
  - [ ] HTTPリクエストの削減
  - [ ] CDNの活用
  - [ ] Gzip/Brotli圧縮
  - [ ] HTTP/2の活用
- [ ] 測定とモニタリング
  - [ ] Lighthouse scoreの改善
  - [ ] Core Web Vitalsの最適化
    - [ ] LCP（Largest Contentful Paint）
    - [ ] FID（First Input Delay）
    - [ ] CLS（Cumulative Layout Shift）

### 完了条件
- Lighthouse scoreが90以上
- 初回表示が3秒以内
- スムーズなユーザー体験

## 参考
- REQUIREMENTS.md: セクション5.2（パフォーマンス）
- CLAUDE.md: CSS3/JavaScript Best Practices