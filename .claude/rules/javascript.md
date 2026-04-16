---
paths:
  - "js/**/*.js"
---

# JavaScript ルール

## アーキテクチャ

**単一ファイル構成:** `js/main.js`（モジュールなし、Vanilla ES6+）

## 主要機能

- `initMobileMenu()` - モバイルハンバーガーメニュー、サブメニュー展開
- `initDropdownMenu()` - デスクトップドロップダウン（ホバー/クリック）
- `initScrollToTop()` - トップへ戻るボタン、サイドバー表示制御
- `initSmoothScroll()` - アンカーリンクのスムーススクロール
- `initPlanCardAnimations()` - IntersectionObserverアニメーション
- `initFacilityGallery()` - 施設ギャラリー（サムネイル切り替え、フェード）
- `initFuneralInfo()` - FAQアコーディオン、タイムライン
- `initFormValidation()` - フォームバリデーション、ハニーポット対策
- `initAccessibilityFeatures()` - モーション制御、キーボードナビ、ARIA
- `initPerformanceOptimizations()` - 遅延読み込み、WebP、Core Web Vitals

## ユーティリティ

- `throttle(func, limit)` / `debounce(func, wait)` - イベント最適化
- `isMobile()` / `isTablet()` / `isDesktop()` - レスポンシブ判定

## 開発ルール

- 新関数は`js/main.js`の最下部に追加
- `DOMContentLoaded`リスナー内で初期化関数を呼び出し
- IntersectionObserver使用時は`rootMargin`と`threshold`を既存パターンに合わせる
- 条件分岐で各ページの初期化関数を呼び出し（`if (typeof initXxx === 'function')`）
