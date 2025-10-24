/**
 * メモリアルホール光和 - メインJavaScript
 */

// ブラウザのスクロール復元を有効化
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto';
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initDropdownMenu();
    initScrollToTop();
    initSmoothScroll();
    // initSkipLinks(); // スキップリンク機能を無効化
    
    // 追加機能の初期化
    if (typeof initCTATracking === 'function') {
        initCTATracking();
    }
    if (typeof initCTAHighlight === 'function') {
        initCTAHighlight();
    }
    // if (typeof initHeroAnimations === 'function') {
    //     initHeroAnimations();
    // }
    if (typeof initPlanCardAnimations === 'function') {
        initPlanCardAnimations();
    }
    if (typeof initFacilityGallery === 'function') {
        initFacilityGallery();
    }
    if (typeof initFacilityAnimations === 'function') {
        initFacilityAnimations();
    }
    if (typeof initFuneralInfo === 'function') {
        initFuneralInfo();
    }
    if (typeof initCompanyInfo === 'function') {
        initCompanyInfo();
    }
    if (typeof initCustomerVoices === 'function') {
        initCustomerVoices();
    }
    if (typeof initFormValidation === 'function') {
        initFormValidation();
    }
    if (typeof initAccessibilityFeatures === 'function') {
        initAccessibilityFeatures();
    }
    if (typeof initAnimationsAndInteractions === 'function') {
        initAnimationsAndInteractions();
    }
    if (typeof initPerformanceOptimizations === 'function') {
        initPerformanceOptimizations();
    }
    
    // 新しく追加したアニメーション関数
    if (typeof initNewsSection === 'function') {
        initNewsSection();
    }
    if (typeof initFAQAnimation === 'function') {
        initFAQAnimation();
    }
    if (typeof initContactFormsAnimation === 'function') {
        initContactFormsAnimation();
    }
    
    console.log('メモリアルホール光和 - サイトが読み込まれました');
});

/**
 * モバイルメニューの初期化
 */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.querySelector('.mobile-menu__close');
    const bottomToggle = document.querySelector('.mobile-menu-toggle-bottom');
    
    // メニューを開く
    function openMobileMenu() {
        if (mobileMenu && mobileMenuOverlay) {
            mobileMenu.classList.add('show');
            mobileMenuOverlay.classList.add('show');
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', 'true');
                toggleBtn.setAttribute('aria-label', 'メニューを閉じる');
            }
            
            // スクロールを無効化
            document.body.style.overflow = 'hidden';
            
            // 最初のメニューアイテムにフォーカス
            const firstMenuItem = mobileMenu.querySelector('.mobile-menu__link');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        }
    }
    
    // メニューを閉じる
    function closeMobileMenu() {
        if (mobileMenu && mobileMenuOverlay) {
            mobileMenu.classList.remove('show');
            mobileMenuOverlay.classList.remove('show');
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('aria-label', 'メニューを開く');
            }
            
            // スクロールを有効化
            document.body.style.overflow = '';
            
            // フォーカスをトグルボタンに戻す（存在する場合）
            if (toggleBtn) {
                toggleBtn.focus();
            } else if (bottomToggle) {
                // 下部のトグルボタンにフォーカス
                bottomToggle.focus();
            }
        }
    }
    
    // メインのトグルボタン
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // 下部バーのメニューボタン
    if (bottomToggle) {
        bottomToggle.addEventListener('click', function() {
            const isExpanded = mobileMenu && mobileMenu.classList.contains('show');
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // 閉じるボタン
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // オーバーレイクリックで閉じる
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Escキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('show')) {
            closeMobileMenu();
        }
    });
    
    // モバイルサブメニューの展開/折りたたみ
    const expandToggles = document.querySelectorAll('.mobile-menu__expand-toggle');
    console.log('展開ボタンの数:', expandToggles.length);
    
    expandToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            console.log('サブメニューボタンがクリックされました');
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            const submenu = document.getElementById(targetId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            console.log('ターゲットID:', targetId);
            console.log('サブメニュー要素:', submenu);
            console.log('現在の状態:', isExpanded);
            
            if (submenu) {
                if (isExpanded) {
                    submenu.classList.remove('show');
                    this.setAttribute('aria-expanded', 'false');
                    console.log('サブメニューを閉じました');
                } else {
                    submenu.classList.add('show');
                    this.setAttribute('aria-expanded', 'true');
                    console.log('サブメニューを開きました');
                }
            } else {
                console.log('サブメニュー要素が見つかりません');
            }
        });
    });
    
    // メニューリンククリック時にメニューを閉じる
    const menuLinks = document.querySelectorAll('.mobile-menu__link:not(.mobile-menu__expand-toggle), .mobile-submenu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
}

/**
 * ドロップダウンメニューの初期化
 */
function initDropdownMenu() {
    const dropdownToggles = document.querySelectorAll('.nav__dropdown-toggle');
    let openDropdown = null;
    let closeTimeout = null;
    
    dropdownToggles.forEach(toggle => {
        const dropdown = toggle.nextElementSibling;
        
        if (!dropdown || !dropdown.classList.contains('dropdown')) return;
        
        // ホバーで開く
        toggle.parentElement.addEventListener('mouseenter', function() {
            if (closeTimeout) {
                clearTimeout(closeTimeout);
                closeTimeout = null;
            }
            
            // 他のドロップダウンを閉じる
            if (openDropdown && openDropdown !== dropdown) {
                closeDropdown(openDropdown);
            }
            
            openDropdownFunc(dropdown, toggle);
        });
        
        // ホバー離脱で遅延クローズ
        toggle.parentElement.addEventListener('mouseleave', function() {
            closeTimeout = setTimeout(() => {
                closeDropdown(dropdown, toggle);
            }, 300);
        });
        
        // クリック/キーボードで開閉
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = dropdown.classList.contains('show');
            
            if (isOpen) {
                closeDropdown(dropdown, toggle);
            } else {
                if (openDropdown && openDropdown !== dropdown) {
                    closeDropdown(openDropdown);
                }
                openDropdownFunc(dropdown, toggle);
            }
        });
        
        // キーボードナビゲーション
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            } else if (e.key === 'ArrowDown' && dropdown.classList.contains('show')) {
                e.preventDefault();
                const firstItem = dropdown.querySelector('.dropdown__link');
                if (firstItem) firstItem.focus();
            }
        });
        
        // ドロップダウン内のキーボードナビゲーション
        const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');
        dropdownLinks.forEach((link, index) => {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextItem = dropdownLinks[index + 1] || dropdownLinks[0];
                    nextItem.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevItem = dropdownLinks[index - 1] || dropdownLinks[dropdownLinks.length - 1];
                    prevItem.focus();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    closeDropdown(dropdown, toggle);
                    toggle.focus();
                }
            });
        });
    });
    
    // ドロップダウンを開く
    function openDropdownFunc(dropdown, toggle) {
        dropdown.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
        openDropdown = dropdown;
    }
    
    // ドロップダウンを閉じる
    function closeDropdown(dropdown, toggle) {
        if (dropdown) {
            dropdown.classList.remove('show');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (openDropdown === dropdown) {
            openDropdown = null;
        }
    }
    
    // 外部クリックで閉じる
    document.addEventListener('click', function(e) {
        if (openDropdown && !openDropdown.parentElement.contains(e.target)) {
            closeDropdown(openDropdown);
        }
    });
    
    // Escキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && openDropdown) {
            const toggle = openDropdown.previousElementSibling;
            closeDropdown(openDropdown);
            if (toggle) toggle.focus();
        }
    });
}

/**
 * トップへ戻るボタンの初期化
 */
function initScrollToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    const sidebar = document.querySelector('.fixed-sidebar');
    
    console.log('InitScrollToTop - Sidebar element:', sidebar);
    console.log('Window width:', window.innerWidth);
    
    if (backToTopBtn && sidebar) {
        // デバッグ情報
        console.log('Sidebar initialized');
        
        // スクロール位置に応じてサイドバーを表示/非表示
        const handleScroll = throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // 300px以上スクロールしたらサイドバー全体を表示
            if (scrollTop > 300) {
                backToTopBtn.classList.add('show');
                if (!sidebar.classList.contains('show')) {
                    console.log('Adding show class to sidebar');
                    sidebar.classList.add('show');
                }
            } else {
                backToTopBtn.classList.remove('show');
                if (sidebar.classList.contains('show')) {
                    console.log('Removing show class from sidebar');
                    sidebar.classList.remove('show');
                }
            }
        }, 100);
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // クリックで上部へスクロール（確実に動作するバージョン）
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // シンプルで確実なスムーズスクロール
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // フォーカスをヒーローセクションまたは最初の要素に移動
            const heroElement = document.querySelector('.hero h1') || document.querySelector('h1');
            if (heroElement) {
                heroElement.focus();
            }
        });
        
        // キーボードサポート
        backToTopBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
}

/**
 * イージング関数
 */
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

/**
 * スムーススクロールの初期化
 */
function initSmoothScroll() {
    // アンカーリンクのスムーススクロール
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // # のみの場合はトップへ
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // 対象要素が存在する場合
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // getBoundingClientRectを使用して正確な位置を取得
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                // 現在のスクロール位置 + 要素の相対位置 - ヘッダーの高さ
                const targetPosition = scrollTop + rect.top - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * ユーティリティ関数: デバウンス
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * ユーティリティ関数: スロットル
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * レスポンシブ対応のユーティリティ
 */
const breakpoints = {
    mobile: 767,
    tablet: 1023,
    desktop: 1024
};

function isMobile() {
    return window.innerWidth <= breakpoints.mobile;
}

function isTablet() {
    return window.innerWidth > breakpoints.mobile && window.innerWidth <= breakpoints.tablet;
}

function isDesktop() {
    return window.innerWidth >= breakpoints.desktop;
}

// スキップリンク機能は削除されました

/**
 * 現在のページに対応するナビゲーションアイテムをハイライト
 */
function updateActiveNavigation() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // ナビゲーションリンクをチェック
    const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentHash && href === currentHash)) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// リサイズ時の処理
window.addEventListener('resize', debounce(function() {
    // モバイルメニューが開いているかチェック
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('show') && window.innerWidth >= 768) {
        // デスクトップサイズになったらモバイルメニューを閉じる
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const toggleBtn = document.querySelector('.mobile-menu-toggle');
        
        mobileMenu.classList.remove('show');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('show');
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.setAttribute('aria-label', 'メニューを開く');
        }
        document.body.style.overflow = '';
    }
    
    console.log('ウィンドウサイズが変更されました');
}, 250));

/**
 * CTA追跡とアナリティクス
 */
function initCTATracking() {
    // 電話ボタンのクリック追跡
    const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
    phoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Phone CTA clicked:', this.href);
            // Google Analytics等の追跡コードをここに追加可能
            // gtag('event', 'phone_click', { 'event_category': 'CTA' });
            
            // ユーザビリティ向上のための確認ダイアログ（オプション）
            if (isMobile()) {
                // モバイルでは直接発信
                return true;
            } else {
                // デスクトップでは電話番号を表示
                const phoneNumber = this.href.replace('tel:', '');
                if (confirm(`電話番号: ${phoneNumber}\nこの番号に電話をかけますか？`)) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    });
    
    // LINE ボタンのクリック追跡
    const lineButtons = document.querySelectorAll('a[href*="line.me"]');
    lineButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('LINE CTA clicked:', this.href);
            // gtag('event', 'line_click', { 'event_category': 'CTA' });
        });
    });
    
    // 資料請求ボタンのクリック追跡
    const documentButtons = document.querySelectorAll('a[href="#contact"], .fixed-sidebar__item--document, .fixed-bottom-bar__item--document');
    documentButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Document request CTA clicked');
            // gtag('event', 'document_request', { 'event_category': 'CTA' });
        });
    });
}

/**
 * CTA要素の動的強調表示
 */
function initCTAHighlight() {
    // 一定時間後にCTAを軽く強調
    setTimeout(() => {
        const phoneButtons = document.querySelectorAll('.fixed-sidebar__item--phone, .fixed-bottom-bar__item--phone');
        phoneButtons.forEach(button => {
            button.classList.add('highlight-pulse');
            
            // 5秒後に強調を停止
            setTimeout(() => {
                button.classList.remove('highlight-pulse');
            }, 5000);
        });
    }, 10000); // 10秒後に実行
    
    // スクロール深度に応じたCTA強調は無効化
    // window.addEventListener('scroll', throttle(() => {
    //     if (!hasHighlighted) {
    //         const scrollDepth = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
    //         if (scrollDepth > 50) { // 50%スクロールしたら
    //             const ctaButtons = document.querySelectorAll('.fixed-sidebar__item, .fixed-bottom-bar__item');
    //             ctaButtons.forEach(button => {
    //                 button.classList.add('scroll-highlight');
    //             });
    //             hasHighlighted = true;
                
    //             // 3秒後に停止
    //             setTimeout(() => {
    //                 ctaButtons.forEach(button => {
    //                     button.classList.remove('scroll-highlight');
    //                 });
    //             }, 3000);
    //         }
    //     }
    // }, 500), { passive: true });
}

/**
 * ヒーローセクションのスクロールアニメーション
 */
function initHeroAnimations() {
    const heroElements = {
        title: document.querySelector('.hero__title'),
        subtitle: document.querySelector('.hero__subtitle'),
        description: document.querySelector('.hero__description'),
        ctaGroup: document.querySelector('.hero__cta-group'),
        quickInfo: document.querySelectorAll('.hero__quick-info-item'),
        philosophyItems: document.querySelectorAll('.hero__philosophy-item'),
        newsItems: document.querySelectorAll('.hero__news-item')
    };

    // 要素の表示状態を監視するIntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px',
        threshold: 0.2
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                // 一度アニメーションしたら監視を停止
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // ヒーロー要素のアニメーション監視
    Object.values(heroElements).forEach(element => {
        if (element) {
            if (NodeList.prototype.isPrototypeOf(element)) {
                element.forEach(item => fadeInObserver.observe(item));
            } else {
                fadeInObserver.observe(element);
            }
        }
    });

    // パララックス効果は hero 要素のアニメーションと同様に削除
}

/**
 * プランカードのスクロールアニメーション
 */
function initPlanCardAnimations() {
    // セクションタイトルのアニメーション
    const planSectionTitle = document.querySelector('#plans-title');
    if (planSectionTitle) {
        planSectionTitle.style.opacity = '0';
        planSectionTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(planSectionTitle);
    }
    
    const planCards = document.querySelectorAll('.plan-card');
    
    if (planCards.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px',
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 遅延アニメーションクラスを追加
                const delayClass = `animate-delay-${Math.min(index % 6 + 1, 6)}`;
                entry.target.classList.add('animate-fade-in-up', delayClass);
                
                // 一度アニメーションしたら監視を停止
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 各プランカードを監視
    planCards.forEach(card => {
        cardObserver.observe(card);
    });
}

// 追加機能の初期化（最初のDOMContentLoadedに含める）
// initCTATracking();
// initCTAHighlight();
// initHeroAnimations();
// initPlanCardAnimations();
// initFacilityGallery();
// initFacilityAnimations();
// initFuneralInfo();
// initCompanyInfo();
// initCustomerVoices();
// initFormValidation();
// initAccessibilityFeatures();
// initAnimationsAndInteractions();
// initPerformanceOptimizations();

/**
 * 施設ギャラリー機能
 */
function initFacilityGallery() {
    const hallCards = document.querySelectorAll('.hall-card');

    hallCards.forEach(card => {
        const mainImage = card.querySelector('.hall-card__main-image img');
        const thumbnails = card.querySelectorAll('.hall-card__thumb');

        // サムネイルクリックで画像切り替え
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // アクティブクラスの切り替え
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // サムネイル画像のsrcを取得
                const thumbnailImg = this.querySelector('img');
                if (thumbnailImg) {
                    const newSrc = thumbnailImg.src;
                    const newAlt = thumbnailImg.alt;

                    // フェードアウト
                    mainImage.style.opacity = '0';

                    // 画像切り替え
                    setTimeout(() => {
                        mainImage.src = newSrc;
                        mainImage.alt = newAlt;
                        // フェードイン
                        mainImage.style.opacity = '1';
                    }, 200);
                }
            });
        });
    });
}

/**
 * 施設セクションのアニメーション
 */
function initFacilityAnimations() {
    // セクションタイトルのアニメーション
    const facilitiesSectionTitle = document.querySelector('#facilities-title');
    if (facilitiesSectionTitle) {
        facilitiesSectionTitle.style.opacity = '0';
        facilitiesSectionTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(facilitiesSectionTitle);
    }
    
    // ホールカードのアニメーション
    const hallCards = document.querySelectorAll('.hall-card');
    const equipmentItems = document.querySelectorAll('.equipment-item');
    const parkingInfo = document.querySelector('.parking-info');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px',
        threshold: 0.1
    };
    
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // スタッガーアニメーション
                setTimeout(() => {
                    entry.target.classList.add('animate-fade-in-up');
                }, index * 100);
                animateObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // ホールカードを監視
    hallCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        animateObserver.observe(card);
    });
    
    // 設備アイテムを監視（グリッドアニメーション）
    equipmentItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, (index % 4) * 100); // 4列ごとに遅延
                    itemObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        itemObserver.observe(item);
    });
    
    // 駐車場情報のアニメーション
    if (parkingInfo) {
        parkingInfo.style.opacity = '0';
        parkingInfo.style.transform = 'translateY(30px)';
        
        const parkingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    parkingObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        parkingObserver.observe(parkingInfo);
    }
    
    // セクションタイトルのアニメーション
    const sectionTitle = document.querySelector('.facilities .section-title');
    const facilitySubtitles = document.querySelectorAll('.facilities__subtitle');
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                titleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (sectionTitle) {
        sectionTitle.style.opacity = '0';
        titleObserver.observe(sectionTitle);
    }
    
    facilitySubtitles.forEach(subtitle => {
        subtitle.style.opacity = '0';
        titleObserver.observe(subtitle);
    });
}

// 葬儀情報セクションの初期化
function initFuneralInfo() {
    // セクションタイトルのアニメーション
    const funeralInfoTitle = document.querySelector('#funeral-info-title');
    if (funeralInfoTitle) {
        funeralInfoTitle.style.opacity = '0';
        funeralInfoTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(funeralInfoTitle);
    }
    
    const timelineItems = document.querySelectorAll('.timeline-flow__item');
    const mannerCards = document.querySelectorAll('.manner-card');
    const faqItems = document.querySelectorAll('.faq-item');
    
    // タイムラインのアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // スタガードアニメーション
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease';
        timelineObserver.observe(item);
    });
    
    // マナーカードのアニメーション
    const mannerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                mannerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    mannerCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        mannerObserver.observe(card);
    });
    
    // FAQアコーディオンの制御
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        const answer = item.querySelector('.faq-answer, .faq-item__answer');
        
        // 初期状態でアニメーション設定
        if (answer) {
            answer.style.transformOrigin = 'top';
            
            // toggle イベントを使用してアニメーションを制御
            item.addEventListener('toggle', () => {
                if (item.open) {
                    answer.style.animation = 'expandFaq 0.3s ease';
                } else {
                    // 閉じる時のアニメーションは CSS transition で処理
                }
            });
        }
        
        // オプション: 他の開いているFAQを閉じる
        summary.addEventListener('click', () => {
            // 他のFAQアイテムを閉じる
            const parentCategory = item.closest('.faq-category, .faq-container');
            if (parentCategory) {
                const otherItems = parentCategory.querySelectorAll('.faq-item');
                otherItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
    
    // セクション全体のフェードイン
    const funeralInfoSections = document.querySelectorAll('.funeral-info__timeline, .funeral-info__manners, .funeral-info__faq');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -100px 0px'
    });
    
    funeralInfoSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        sectionObserver.observe(section);
    });
}

// CSSアニメーション追加
const style = document.createElement('style');
style.textContent = `
    @keyframes collapseFaq {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// 会社案内セクションの初期化
function initCompanyInfo() {
    const philosophySection = document.querySelector('.company-philosophy');
    const overviewSection = document.querySelector('.company-overview');
    const ceoMessage = document.querySelector('.ceo-message');
    const staffCards = document.querySelectorAll('.staff-card');
    const accessSection = document.querySelector('.company-access');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // 企業理念のアニメーション
    if (philosophySection) {
        philosophySection.style.opacity = '0';
        philosophySection.style.transform = 'translateY(30px)';
        
        const philosophyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    philosophyObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        philosophyObserver.observe(philosophySection);
    }
    
    // 会社概要のアニメーション
    if (overviewSection) {
        const tableRows = overviewSection.querySelectorAll('tr');
        tableRows.forEach((row, index) => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                const rowObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.transition = 'all 0.5s ease';
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                            rowObserver.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                rowObserver.observe(row);
            }, index * 50);
        });
    }
    
    // 代表挨拶のアニメーション
    if (ceoMessage) {
        ceoMessage.style.opacity = '0';
        ceoMessage.style.transform = 'translateY(30px)';
        
        const ceoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    ceoObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        ceoObserver.observe(ceoMessage);
    }
    
    // スタッフカードのアニメーション
    staffCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        cardObserver.observe(card);
    });
    
    // アクセスセクションのアニメーション
    if (accessSection) {
        accessSection.style.opacity = '0';
        accessSection.style.transform = 'translateY(30px)';
        
        const accessObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    accessObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        accessObserver.observe(accessSection);
    }
}

// お客様の声セクションの初期化
function initCustomerVoices() {
    // セクションタイトルのアニメーション
    const customerVoicesTitle = document.querySelector('#customer-voices-title');
    if (customerVoicesTitle) {
        customerVoicesTitle.style.opacity = '0';
        customerVoicesTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(customerVoicesTitle);
    }
    
    const voiceCards = document.querySelectorAll('.voice-card');
    
    if (voiceCards.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // カードのアニメーション
    voiceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        // 星評価のアニメーション
                        const stars = entry.target.querySelectorAll('.voice-card__rating i');
                        stars.forEach((star, starIndex) => {
                            setTimeout(() => {
                                star.style.transform = 'scale(0)';
                                star.style.transition = 'transform 0.3s ease';
                                setTimeout(() => {
                                    star.style.transform = 'scale(1)';
                                }, 50);
                            }, starIndex * 100);
                        });
                    }, index * 150);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        cardObserver.observe(card);
    });
    
    // 引用符のアニメーション
    const quotes = document.querySelectorAll('.voice-card__quote');
    quotes.forEach(quote => {
        const quoteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'pulse 2s ease infinite';
                    quoteObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        quoteObserver.observe(quote);
    });
    
    // Featured カードの特別な処理
    const featuredCard = document.querySelector('.voice-card--featured');
    if (featuredCard) {
        featuredCard.addEventListener('mouseenter', () => {
            featuredCard.style.background = 'linear-gradient(135deg, white 0%, rgba(124, 154, 128, 0.05) 100%)';
        });
        
        featuredCard.addEventListener('mouseleave', () => {
            featuredCard.style.background = 'linear-gradient(135deg, white 0%, rgba(124, 154, 128, 0.02) 100%)';
        });
    }
}

/**
 * お知らせセクションのアニメーション
 */
function initNewsSection() {
    const newsSection = document.querySelector('.news-section');
    const newsItems = document.querySelectorAll('.news-item');
    
    if (!newsSection || newsItems.length === 0) return;
    
    // セクションタイトルのアニメーション
    const newsTitle = document.querySelector('.news-section__title');
    if (newsTitle) {
        newsTitle.style.opacity = '0';
        newsTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(newsTitle);
    }
    
    // ニュースアイテムのスタッガードアニメーション
    newsItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.5s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150); // スタッガー効果
                    itemObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-30px 0px'
        });
        
        itemObserver.observe(item);
    });
}

/**
 * FAQセクションのアニメーション
 */
function initFAQAnimation() {
    const faqSection = document.querySelector('.faq');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    if (!faqSection) return;
    
    // セクションタイトルのアニメーション
    const faqTitle = document.querySelector('#faq-title');
    if (faqTitle) {
        faqTitle.style.opacity = '0';
        faqTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(faqTitle);
    }
    
    // FAQカテゴリのアニメーション
    faqCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        
        const categoryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    categoryObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-40px 0px'
        });
        
        categoryObserver.observe(category);
    });
}

/**
 * お問い合わせセクションのアニメーション
 */
function initContactFormsAnimation() {
    const contactSection = document.querySelector('.contact-forms');
    const contactTitle = document.querySelector('#contact-forms-title');
    const formWrappers = document.querySelectorAll('.contact-form-wrapper, .document-request-wrapper');
    
    if (!contactSection) return;
    
    // セクションタイトルのアニメーション
    if (contactTitle) {
        contactTitle.style.opacity = '0';
        contactTitle.style.transform = 'translateY(20px)';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    titleObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });
        
        titleObserver.observe(contactTitle);
    }
    
    // フォームラッパーのアニメーション
    formWrappers.forEach((wrapper, index) => {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(30px)';
        
        const wrapperObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.7s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 250);
                    wrapperObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-40px 0px'
        });
        
        wrapperObserver.observe(wrapper);
    });
}

// フォームバリデーション機能
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const requestForm = document.getElementById('requestForm');
    
    if (contactForm) {
        setupFormValidation(contactForm);
    }
    
    if (requestForm) {
        setupFormValidation(requestForm);
    }
}

function setupFormValidation(form) {
    const inputs = form.querySelectorAll('.form-input, .form-textarea, .form-select');
    const honeypot = form.querySelector('.honeypot');
    
    // リアルタイムバリデーション
    inputs.forEach(input => {
        input.addEventListener('input', () => validateField(input));
        input.addEventListener('blur', () => validateField(input));
    });
    
    // フォーム送信処理
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // ハニーポットチェック
        if (honeypot && honeypot.value) {
            console.log('Spam detected');
            return;
        }
        
        // 全フィールドのバリデーション
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            submitForm(form);
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const errorSpan = field.parentElement.querySelector('.form-error');
    const isRequired = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';
    
    // 必須チェック
    if (isRequired && !value) {
        isValid = false;
        errorMessage = 'この項目は必須です';
    }
    
    // フォーマットチェック
    if (value) {
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'メールアドレスの形式が正しくありません';
                }
                break;
            case 'tel':
                const phoneRegex = /^[\d\-\(\)\s]+$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = '電話番号の形式が正しくありません';
                }
                break;
        }
    }
    
    // エラー表示の更新
    if (isValid) {
        field.classList.remove('form-input--error');
        field.classList.add('form-input--valid');
        if (errorSpan) errorSpan.textContent = '';
    } else {
        field.classList.remove('form-input--valid');
        field.classList.add('form-input--error');
        if (errorSpan) errorSpan.textContent = errorMessage;
    }
    
    return isValid;
}

function submitForm(form) {
    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    
    // 送信中の表示
    submitBtn.textContent = '送信中...';
    submitBtn.disabled = true;
    
    // FormDataの作成
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // 実際の送信処理（ここではシミュレーション）
    setTimeout(() => {
        console.log('Form submitted:', data);
        showSuccessMessage();
        form.reset();
        
        // ボタンの状態を復元
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // バリデーションクラスをリセット
        const inputs = form.querySelectorAll('.form-input, .form-textarea, .form-select');
        inputs.forEach(input => {
            input.classList.remove('form-input--error', 'form-input--valid');
        });
        
        // エラーメッセージをクリア
        const errorSpans = form.querySelectorAll('.form-error');
        errorSpans.forEach(span => span.textContent = '');
    }, 1500);
}

function showSuccessMessage() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        
        // モーダルを閉じる処理
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        const closeModal = () => {
            modal.style.display = 'none';
        };
        
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay) overlay.addEventListener('click', closeModal);
        
        // ESCキーでも閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
        
        // 5秒後に自動で閉じる
        setTimeout(closeModal, 5000);
    }
}

// アクセシビリティ機能
function initAccessibilityFeatures() {
    initMotionControls();
    initKeyboardNavigation();
    initARIALiveRegions();
    
    // LocalStorageから設定を復元
    restoreAccessibilitySettings();
}


function initMotionControls() {
    const motionToggle = document.querySelector('.motion-toggle-btn');
    
    if (motionToggle) {
        motionToggle.addEventListener('click', () => {
            const isReduced = document.body.classList.toggle('reduced-motion');
            motionToggle.setAttribute('aria-pressed', isReduced ? 'true' : 'false');
            
            // アイコンを更新
            const icon = motionToggle.querySelector('i');
            if (icon) {
                icon.className = isReduced ? 'fas fa-play' : 'fas fa-pause';
            }
            
            // 設定を保存
            localStorage.setItem('reducedMotion', isReduced);
            
            // 画面リーダーに通知
            announceToScreenReader(isReduced ? 'アニメーションを無効にしました' : 'アニメーションを有効にしました');
        });
    }
}

function initKeyboardNavigation() {
    // Escキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // モーダルを閉じる
            const modal = document.querySelector('#successModal[style*="flex"]');
            if (modal) {
                modal.style.display = 'none';
            }
            
            // モバイルメニューを閉じる
            const mobileMenu = document.querySelector('#mobile-menu.show');
            const mobileMenuOverlay = document.querySelector('#mobile-menu-overlay.show');
            const toggleBtn = document.querySelector('.mobile-menu-toggle');
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.remove('show');
                mobileMenuOverlay.classList.remove('show');
                document.body.style.overflow = '';
                if (toggleBtn) {
                    toggleBtn.setAttribute('aria-expanded', 'false');
                    toggleBtn.setAttribute('aria-label', 'メニューを開く');
                }
            }
        }
    });
    
    // スキップリンクの処理
    const skipLinks = document.querySelectorAll('.skip-link');
    skipLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // 画面リーダーに通知
                announceToScreenReader(`${target.getAttribute('aria-label') || target.textContent}にジャンプしました`);
            }
        });
    });
    
    // フォーカス管理の改善
    document.addEventListener('focusin', (e) => {
        // フォーカス時の視覚的フィードバック
        e.target.classList.add('focus-visible');
    });
    
    document.addEventListener('focusout', (e) => {
        e.target.classList.remove('focus-visible');
    });
}

function initARIALiveRegions() {
    // ARIA Live Region を作成（画面リーダー用）
    if (!document.getElementById('aria-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
    }
}

function announceToScreenReader(message) {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
        
        // メッセージをクリア（次回の通知のため）
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

function restoreAccessibilitySettings() {
    // モーション設定の復元
    const reducedMotion = localStorage.getItem('reducedMotion') === 'true';
    if (reducedMotion) {
        document.body.classList.add('reduced-motion');
        
        const motionToggle = document.querySelector('.motion-toggle-btn');
        if (motionToggle) {
            motionToggle.setAttribute('aria-pressed', 'true');
            const icon = motionToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-play';
            }
        }
    }
    
    // prefers-reduced-motionの自動検出
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !localStorage.getItem('reducedMotion')) {
        document.body.classList.add('reduced-motion');
        
        const motionToggle = document.querySelector('.motion-toggle-btn');
        if (motionToggle) {
            motionToggle.setAttribute('aria-pressed', 'true');
            const icon = motionToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-play';
            }
        }
    }
}

// アニメーション・インタラクション機能
function initAnimationsAndInteractions() {
    initScrollProgressBar();
    initBackToTopButton();
    initParallaxEffects();
    initNumberCounters();
    initAdvancedScrollAnimations();
    initToastNotifications();
    initRippleEffects();
    
    console.log('アニメーション・インタラクション機能が初期化されました');
}

function initScrollProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    if (progressBar) {
        const updateProgress = () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = Math.min(scrolled, 100) + '%';
        };
        
        // スロットリング付きスクロールリスナー
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
        updateProgress(); // 初期化時に実行
    }
}

function initBackToTopButton() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        };
        
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // フォーカスをトップに移動
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.focus();
            }
            
            // 画面リーダーに通知
            announceToScreenReader('ページトップに戻りました');
        };
        
        // スロットリング付きスクロールリスナー
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    toggleVisibility();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
        backToTop.addEventListener('click', scrollToTop);
        
        // キーボード対応
        backToTop.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToTop();
            }
        });
        
        toggleVisibility(); // 初期化時に実行
    }
}

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length > 0) {
        const updateParallax = () => {
            const scrolled = window.scrollY;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        };
        
        // パフォーマンス最適化：スロットリング
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
    }
}

function initNumberCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = parseInt(counter.getAttribute('data-duration') || '2000');
        const start = 0;
        const startTime = Date.now();
        
        const updateCounter = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // イージング関数（ease-out）
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            
            counter.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
                counter.classList.add('animation-complete');
            }
        };
        
        counter.classList.add('counter-number');
        requestAnimationFrame(updateCounter);
    };
    
    // IntersectionObserver で可視化時にアニメーション開始
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counter-animated')) {
                    entry.target.classList.add('counter-animated');
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });
        
        counters.forEach(counter => observer.observe(counter));
    }
}

function initAdvancedScrollAnimations() {
    // 既存のスクロールアニメーションを拡張
    const elements = document.querySelectorAll('[data-scroll-animation]');
    
    if (elements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationType = entry.target.getAttribute('data-scroll-animation');
                    entry.target.classList.add('animate-' + animationType);
                    entry.target.classList.add('will-change-transform');
                    
                    // アニメーション完了後にwill-changeを削除
                    setTimeout(() => {
                        entry.target.classList.add('animation-complete');
                    }, 1000);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(element => observer.observe(element));
    }
}

function initToastNotifications() {
    window.showToast = function(message, type = 'info', duration = 4000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <strong>${message}</strong>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // 表示アニメーション
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // 自動削除
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
        
        // クリックで削除
        toast.addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        });
    };
}

function initRippleEffects() {
    const buttons = document.querySelectorAll('.btn, .ripple-effect');
    
    buttons.forEach(button => {
        if (!button.classList.contains('ripple-effect')) {
            button.classList.add('ripple-effect');
        }
    });
}

// デバウンス関数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// スロットル関数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// パフォーマンス最適化機能
function initPerformanceOptimizations() {
    initLazyLoading();
    initImageOptimization();
    initResourcePreloading();
    initCriticalResourceHints();
    
    // Core Web Vitals の監視
    if ('web-vitals' in window) {
        measureCoreWebVitals();
    }
    
    console.log('パフォーマンス最適化機能が初期化されました');
}

function initLazyLoading() {
    // Intersection Observer でのカスタム遅延読み込み
    const lazyImages = document.querySelectorAll('img[loading="lazy"]:not([src*="unsplash"])');
    
    if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // データ属性からsrcを設定
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    // ロード完了時の処理
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // フォールバック: ネイティブlazy loading未対応ブラウザ用
    if (!('loading' in HTMLImageElement.prototype)) {
        // Polyfill または代替実装をここに追加
        console.log('Native lazy loading not supported, using polyfill');
    }
}

function initImageOptimization() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // WebP対応チェックと代替実装
        if (supportsWebP()) {
            const src = img.src;
            if (src.includes('unsplash.com') && !src.includes('fm=webp')) {
                // UnsplashのURLにWebPフォーマットを追加
                const separator = src.includes('?') ? '&' : '?';
                img.src = src + separator + 'fm=webp&q=85';
            }
        }
        
        // 画像のエラーハンドリング
        img.addEventListener('error', (e) => {
            console.warn('Image failed to load:', e.target.src);
            // フォールバック画像を設定
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5Zue5YOP44GM6Kqt44G/6L6844KB44G+44Gb44KTPC90ZXh0Pjwvc3ZnPg==';
        });
        
        // 画像の最適化: デコーディング属性の設定
        if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
        }
    });
}

function initResourcePreloading() {
    // 重要なリソースのプリロード
    const criticalResources = [
        { href: 'css/style.css', as: 'style' },
        { href: 'js/main.js', as: 'script' }
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        
        // リソースが存在しない場合のエラーハンドリング
        link.addEventListener('error', () => {
            console.warn(`Failed to preload resource: ${resource.href}`);
        });
        
        document.head.appendChild(link);
    });
}

function initCriticalResourceHints() {
    // DNS プリフェッチ
    const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://images.unsplash.com',
        'https://cdnjs.cloudflare.com'
    ];
    
    domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
    });
}

function supportsWebP() {
    return new Promise(resolve => {
        const webP = new Image();
        webP.onload = webP.onerror = () => resolve(webP.height === 2);
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
}

function measureCoreWebVitals() {
    // LCP (Largest Contentful Paint) の測定
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // 改善提案
        if (lastEntry.startTime > 2500) {
            console.warn('LCP is poor (>2.5s). Consider optimizing images and critical resources.');
        }
    }).observe({entryTypes: ['largest-contentful-paint']});
    
    // FID (First Input Delay) の測定
    new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach(entry => {
            console.log('FID:', entry.processingStart - entry.startTime);
            
            if (entry.processingStart - entry.startTime > 100) {
                console.warn('FID is poor (>100ms). Consider optimizing JavaScript execution.');
            }
        });
    }).observe({entryTypes: ['first-input']});
    
    // CLS (Cumulative Layout Shift) の測定
    let clsScore = 0;
    new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach(entry => {
            if (!entry.hadRecentInput) {
                clsScore += entry.value;
            }
        });
        
        console.log('CLS:', clsScore);
        
        if (clsScore > 0.1) {
            console.warn('CLS is poor (>0.1). Consider adding dimensions to images and avoiding layout shifts.');
        }
    }).observe({entryTypes: ['layout-shift']});
}

// 画像の最適化ユーティリティ
function optimizeImage(img, options = {}) {
    const {
        quality = 85,
        format = 'webp',
        width = null,
        height = null
    } = options;
    
    if (img.src.includes('unsplash.com')) {
        const url = new URL(img.src);
        url.searchParams.set('fm', format);
        url.searchParams.set('q', quality);
        
        if (width) url.searchParams.set('w', width);
        if (height) url.searchParams.set('h', height);
        
        img.src = url.toString();
    }
}

// リソースのプリフェッチ
function prefetchResource(url) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
}

// パフォーマンス監視とレポート
function reportPerformanceMetrics() {
    // Navigation Timing API
    const navTiming = performance.getEntriesByType('navigation')[0];
    if (navTiming) {
        console.log('Performance Metrics:', {
            'DNS Lookup': navTiming.domainLookupEnd - navTiming.domainLookupStart,
            'TCP Connection': navTiming.connectEnd - navTiming.connectStart,
            'Request': navTiming.responseStart - navTiming.requestStart,
            'Response': navTiming.responseEnd - navTiming.responseStart,
            'DOM Processing': navTiming.domContentLoadedEventStart - navTiming.domLoading,
            'Total Load Time': navTiming.loadEventEnd - navTiming.navigationStart
        });
    }
}

// ページ読み込み完了時にメトリクスをレポート
window.addEventListener('load', () => {
    setTimeout(reportPerformanceMetrics, 0);
});

// ページ読み込み時とhash変更時にナビゲーションを更新
window.addEventListener('load', updateActiveNavigation);
window.addEventListener('hashchange', updateActiveNavigation);