    <!-- Fixed CTA Sidebar (PC) -->
    <aside class="fixed-sidebar" role="complementary" aria-label="固定アクションメニュー">
        <div class="fixed-sidebar__header">
            <span class="fixed-sidebar__title">24時間対応</span>
        </div>
        
        <a href="tel:0120-077-508" class="fixed-sidebar__item fixed-sidebar__item--phone" aria-label="今すぐお電話 0120-077-508">
            <div class="fixed-sidebar__icon">
                <i class="fas fa-phone"></i>
                <span class="pulse-ring"></span>
            </div>
            <div class="fixed-sidebar__content">
                <span class="fixed-sidebar__label">電話相談</span>
                <span class="fixed-sidebar__phone">0120-077-508</span>
            </div>
        </a>

        <a href="<?php echo home_url('/member/') ?>" class="fixed-sidebar__item fixed-sidebar__item--member" aria-label="会員登録">
            <div class="fixed-sidebar__icon">
                <i class="fas fa-crown"></i>
            </div>
            <div class="fixed-sidebar__content">
                <span class="fixed-sidebar__label">会員登録</span>
                <span class="fixed-sidebar__sub">特典多数</span>
            </div>
        </a>

        <a href="<?php echo home_url('/#contact'); ?>" class="fixed-sidebar__item fixed-sidebar__item--document" aria-label="無料資料請求">
            <div class="fixed-sidebar__icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <div class="fixed-sidebar__content">
                <span class="fixed-sidebar__label">資料請求</span>
                <span class="fixed-sidebar__sub">無料</span>
            </div>
        </a>

        <a href="<?php echo home_url('/#plans'); ?>" class="fixed-sidebar__item fixed-sidebar__item--plans" aria-label="プラン一覧を見る">
            <div class="fixed-sidebar__icon">
                <i class="fas fa-list-alt"></i>
            </div>
            <div class="fixed-sidebar__content">
                <span class="fixed-sidebar__label">プラン</span>
                <span class="fixed-sidebar__sub">料金確認</span>
            </div>
        </a>

        <button class="fixed-sidebar__item fixed-sidebar__item--scroll" id="backToTop" aria-label="ページトップへ戻る">
            <div class="fixed-sidebar__icon">
                <i class="fas fa-arrow-up"></i>
            </div>
            <div class="fixed-sidebar__content">
                <span class="fixed-sidebar__label">TOP</span>
            </div>
        </button>
    </aside>

    <!-- Progress Bar -->
    <div class="progress-bar" id="progressBar"></div>
    
    <!-- Back to Top Button -->
    <button class="back-to-top" id="backToTop" aria-label="ページトップへ戻る">
        <i class="fas fa-chevron-up" aria-hidden="true"></i>
    </button>
    
    <!-- Fixed Bottom Bar (Mobile) -->
    <nav class="fixed-bottom-bar" role="navigation" aria-label="モバイル固定アクションバー">
        <a href="tel:0120-077-508" class="fixed-bottom-bar__item fixed-bottom-bar__item--phone" aria-label="今すぐ電話">
            <div class="fixed-bottom-bar__icon">
                <i class="fas fa-phone"></i>
                <span class="pulse-dot"></span>
            </div>
            <span class="fixed-bottom-bar__label">電話</span>
        </a>

        <a href="<?php echo home_url('/member/') ?>" class="fixed-bottom-bar__item fixed-bottom-bar__item--member" aria-label="会員登録">
            <div class="fixed-bottom-bar__icon">
                <i class="fas fa-crown"></i>
            </div>
            <span class="fixed-bottom-bar__label">会員登録</span>
        </a>

        <a href="<?php echo home_url('/#contact'); ?>" class="fixed-bottom-bar__item fixed-bottom-bar__item--document" aria-label="資料請求">
            <div class="fixed-bottom-bar__icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <span class="fixed-bottom-bar__label">資料請求</span>
        </a>

        <button class="fixed-bottom-bar__item fixed-bottom-bar__item--menu mobile-menu-toggle-bottom" aria-label="メニューを開く">
            <div class="fixed-bottom-bar__icon">
                <i class="fas fa-bars"></i>
            </div>
            <span class="fixed-bottom-bar__label">メニュー</span>
        </button>
    </nav>