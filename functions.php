<?php
/**
 * Memorial Hall Kowa - Theme Functions
 */

// Theme Support Features
function kowa_theme_support() {
    // Title tag support
    add_theme_support('title-tag');

    // Post thumbnails support
    add_theme_support('post-thumbnails');

    // HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'kowa_theme_support');

/**
 * Enqueue CSS and JavaScript
 */
function kowa_enqueue_assets() {
    // === External Resources (CDN) ===
    // Google Fonts
    wp_enqueue_style(
        'kowa-google-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap',
        array(),
        null
    );

    // Font Awesome
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        array(),
        '6.5.1'
    );

    // === Base CSS ===
    wp_enqueue_style(
        'kowa-variables',
        get_theme_file_uri('css/base/variables.css'),
        array(),
        filemtime(get_theme_file_path('css/base/variables.css'))
    );

    wp_enqueue_style(
        'kowa-reset',
        get_theme_file_uri('css/base/reset.css'),
        array('kowa-variables'),
        filemtime(get_theme_file_path('css/base/reset.css'))
    );

    // === Layout CSS ===
    wp_enqueue_style(
        'kowa-container',
        get_theme_file_uri('css/layout/container.css'),
        array('kowa-reset'),
        filemtime(get_theme_file_path('css/layout/container.css'))
    );

    wp_enqueue_style(
        'kowa-header',
        get_theme_file_uri('css/layout/header.css'),
        array('kowa-container'),
        filemtime(get_theme_file_path('css/layout/header.css'))
    );

    wp_enqueue_style(
        'kowa-footer',
        get_theme_file_uri('css/layout/footer.css'),
        array('kowa-container'),
        filemtime(get_theme_file_path('css/layout/footer.css'))
    );

    wp_enqueue_style(
        'kowa-sidebar',
        get_theme_file_uri('css/layout/sidebar.css'),
        array('kowa-container'),
        filemtime(get_theme_file_path('css/layout/sidebar.css'))
    );

    wp_enqueue_style(
        'kowa-mobile-bar',
        get_theme_file_uri('css/layout/mobile-bar.css'),
        array('kowa-container'),
        filemtime(get_theme_file_path('css/layout/mobile-bar.css'))
    );

    // === Components CSS ===
    wp_enqueue_style(
        'kowa-buttons',
        get_theme_file_uri('css/components/buttons.css'),
        array('kowa-reset'),
        filemtime(get_theme_file_path('css/components/buttons.css'))
    );

    wp_enqueue_style(
        'kowa-cards',
        get_theme_file_uri('css/components/cards.css'),
        array('kowa-reset'),
        filemtime(get_theme_file_path('css/components/cards.css'))
    );

    wp_enqueue_style(
        'kowa-forms',
        get_theme_file_uri('css/components/forms.css'),
        array('kowa-reset'),
        filemtime(get_theme_file_path('css/components/forms.css'))
    );

    wp_enqueue_style(
        'kowa-animations',
        get_theme_file_uri('css/components/animations.css'),
        array('kowa-reset'),
        filemtime(get_theme_file_path('css/components/animations.css'))
    );

    wp_enqueue_style(
        'kowa-accessibility',
        get_theme_file_uri('css/components/accessibility.css'),
        array('kowa-reset'),
        filemtime(get_theme_file_path('css/components/accessibility.css'))
    );

    // === Page-Specific CSS ===
    // Front Page (Home)
    if (is_front_page()) {
        wp_enqueue_style(
            'kowa-home',
            get_theme_file_uri('css/pages/home.css'),
            array('kowa-cards'),
            filemtime(get_theme_file_path('css/pages/home.css'))
        );
    }

    // Funeral Plan Pages (Family & General)
    if (is_page(array('family', 'ippansou'))) {
        wp_enqueue_style(
            'kowa-plan',
            get_theme_file_uri('css/pages/plan.css'),
            array('kowa-cards'),
            filemtime(get_theme_file_path('css/pages/plan.css'))
        );
    }

    // Flower Page
    if (is_page('flower')) {
        wp_enqueue_style(
            'kowa-flower',
            get_theme_file_uri('css/pages/flower.css'),
            array('kowa-cards'),
            filemtime(get_theme_file_path('css/pages/flower.css'))
        );
    }

    // Member Registration Page
    if (is_page('member')) {
        wp_enqueue_style(
            'kowa-member',
            get_theme_file_uri('css/pages/member.css'),
            array('kowa-forms'),
            filemtime(get_theme_file_path('css/pages/member.css'))
        );
    }

    // Consultation Page
    if (is_page('soudan')) {
        wp_enqueue_style(
            'kowa-soudan',
            get_theme_file_uri('css/pages/soudan.css'),
            array('kowa-forms'),
            filemtime(get_theme_file_path('css/pages/soudan.css'))
        );
    }

    // Company Information Page
    if (is_page('company')) {
        wp_enqueue_style(
            'kowa-company',
            get_theme_file_uri('css/pages/company.css'),
            array('kowa-cards'),
            filemtime(get_theme_file_path('css/pages/company.css'))
        );
    }

    // Contact Page
    if (is_page('contact')) {
        wp_enqueue_style(
            'kowa-contact',
            get_theme_file_uri('css/pages/contact.css'),
            array('kowa-forms'),
            filemtime(get_theme_file_path('css/pages/contact.css'))
        );
    }

    // Privacy Policy Page
    if (is_page('privacy')) {
        wp_enqueue_style(
            'kowa-privacy',
            get_theme_file_uri('css/pages/privacy.css'),
            array('kowa-reset'),
            filemtime(get_theme_file_path('css/pages/privacy.css'))
        );
    }

    // Flowchart Page (Future use)
    if (is_page('flowchart')) {
        wp_enqueue_style(
            'kowa-flowchart',
            get_theme_file_uri('css/pages/flowchart.css'),
            array('kowa-reset'),
            filemtime(get_theme_file_path('css/pages/flowchart.css'))
        );
    }

    // === JavaScript ===
    wp_enqueue_script(
        'kowa-main',
        get_theme_file_uri('js/main.js'),
        array(),
        filemtime(get_theme_file_path('js/main.js')),
        true // Load in footer
    );
}
add_action('wp_enqueue_scripts', 'kowa_enqueue_assets');

/**
 * Add DNS Prefetch for External Resources
 */
function kowa_dns_prefetch($urls, $relation_type) {
    if ('dns-prefetch' === $relation_type) {
        $urls[] = 'https://fonts.googleapis.com';
        $urls[] = 'https://fonts.gstatic.com';
        $urls[] = 'https://cdnjs.cloudflare.com';
    }
    return $urls;
}
add_filter('wp_resource_hints', 'kowa_dns_prefetch', 10, 2);

/**
 * Security Enhancements
 */

// Remove WordPress version from header and feeds
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', '__return_empty_string');

// Disable XML-RPC (if not needed)
add_filter('xmlrpc_enabled', '__return_false');

// Remove RSD link from header
remove_action('wp_head', 'rsd_link');

// Remove Windows Live Writer manifest link
remove_action('wp_head', 'wlwmanifest_link');

// Remove WordPress version from RSS feeds
function kowa_remove_version_from_rss() {
    return '';
}
add_filter('the_generator', 'kowa_remove_version_from_rss');

// Disable REST API for non-authenticated users (optional - comment out if you need public API access)
// add_filter('rest_authentication_errors', function($result) {
//     if (!is_user_logged_in()) {
//         return new WP_Error('rest_disabled', 'REST API is disabled for non-authenticated users', array('status' => 401));
//     }
//     return $result;
// });

// Add security headers
function kowa_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    // Uncomment for production with HTTPS:
    // header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
}
add_action('send_headers', 'kowa_security_headers');

// Disable file editing in WordPress admin
define('DISALLOW_FILE_EDIT', true);

// Hide login errors (prevent username enumeration)
function kowa_login_errors() {
    return 'ログイン情報が正しくありません。';
}
add_filter('login_errors', 'kowa_login_errors');

// Remove WordPress version from scripts and styles
function kowa_remove_version_from_assets($src) {
    if (strpos($src, 'ver=' . get_bloginfo('version'))) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('style_loader_src', 'kowa_remove_version_from_assets', 9999);
add_filter('script_loader_src', 'kowa_remove_version_from_assets', 9999);
