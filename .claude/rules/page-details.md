---
paths:
  - "front-page.php"
  - "page-*.php"
  - "css/pages/*.css"
---

# ページ別の特記事項

## front-page.php（トップページ）

- 葬儀プラン3カード: プレースホルダー画像使用中
- 施設案内: 画像準備中（元のギャラリーコードはHTMLコメントで保持）
- FAQ: 宿泊可能（通夜室・仮眠室、バスルーム完備）
- ヒーロー特徴: 24時間365日受付対応 / 即日対応可能 / 地域密着 真心の対応 / 明朗会計 安心のご提案
- ヒーローCTA: フリーダイヤル横に「プラン・料金を見る」「無料資料請求」ボタン（btn--sm）
- ヒーローバナー: zensouren.gif（左）、olive.png（右）、下にアンバサダー画像（キャプション+ホバー拡大）
- 葬儀の流れ: 15ステップ、3フェーズ区切り（7番・13番に--separation）
- FAQ事前相談: 回答末尾にCTAリンク（全日本葬祭業協同組合連合会認定の専門相談員）
- お客様の声: 2列×2行固定、地名は飯田市(上2枚)・喬木村・豊丘村

## page-ippansou.php（一般葬プラン）

- 4プランカード: プレースホルダー画像
- 基本サービス: 6カード横並び固定（flex-wrap: nowrap、flex: 1 1 0）
- おすすめPOINT 3: アイコン `fa-book-open`
- `.other-plan-link--ippansou` で家族葬へのリンク

## page-family.php（家族葬プラン）

- 2プランカード（光・和み）: プレースホルダー画像
- `.other-plan-link` で一般葬へのリンク

## page-flower.php（献花・供花）

- 3カード固定（repeat(3, 1fr)）、画像高さ450px、実画像配置済み

## page-company.php（会社案内）

- 社長写真・スタッフ紹介: 削除済み（テキスト中央寄せ）
- 事業内容: 14項目の番号付きリスト（`.business-list`）

## page-soudan.php（事前相談）

- 相談員画像: 削除済み（`.consultant-intro__content--centered`で中央寄せ）
- 相談カード: 2列×2行固定

## page-contact.php（お問い合わせ）

- Contact Form 7実装済み（既存CSSデザイン維持）

## フッターバナー

- `.footer__banners`（4列グリッド）: zensouren/olive/IF共済会 + 全葬連事前相談員カード（角丸囲み線）
- `.footer__ambassadors`: アンバサダー画像3枚横並び
