    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="footer__top">
            <div class="container">
                <div class="footer__grid">
                    <!-- Company Info -->
                    <div class="footer__column footer__column--main">
                        <div class="footer__logo">
                            <img src="<?php echo get_theme_file_uri('images/logo_2.png'); ?>" alt="メモリアルホール光和ロゴ" class="footer__logo-image">
                        </div>
                        <p class="footer__description">
                            心を込めて、最期のお別れをお手伝いいたします。<br>
                            24時間365日、皆様のご相談をお待ちしております。
                        </p>
                        <div class="footer__contact-info">
                            <a href="tel:0120-077-508" class="footer__phone">
                                <i class="fas fa-phone-alt"></i>
                                <span>
                                    <strong>0120-077-508</strong>
                                    <small>24時間365日受付</small>
                                </span>
                            </a>
                        </div>
                        <!-- <div class="footer__social">
                            <a href="#" class="footer__social-link" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="footer__social-link" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="footer__social-link" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="footer__social-link" aria-label="LINE">
                                <i class="fab fa-line"></i>
                            </a>
                        </div> -->
                    </div>

                    <!-- Services -->
                    <div class="footer__column">
                        <h3 class="footer__title">
                            <i class="fas fa-hands-praying"></i>
                            サービス
                        </h3>
                        <ul class="footer__links">
                            <li><a href="#plans">葬儀プラン一覧</a></li>
                            <li><a href="#facilities">式場・施設案内</a></li>
                            <li><a href="#flow">葬儀の流れ</a></li>
                            <li><a href="#manner">葬儀のマナー</a></li>
                            <li><a href="<?php echo home_url('/soudan/') ?>">事前相談</a></li>
                        </ul>
                    </div>

                    <!-- Company -->
                    <div class="footer__column">
                        <h3 class="footer__title">
                            <i class="fas fa-building"></i>
                            会社情報
                        </h3>
                        <ul class="footer__links">
                            <li><a href="<?php echo home_url('/company/') ?>">会社概要</a></li>
                            <li><a href="<?php echo home_url('/company/') ?>">アクセス・地図</a></li>
                            <!-- <li><a href="#news">お知らせ</a></li> -->
                            <li><a href="<?php echo home_url('/privacy/') ?>">プライバシーポリシー</a></li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer__column">
                        <h3 class="footer__title">
                            <i class="fas fa-link"></i>
                            お役立ち情報
                        </h3>
                        <ul class="footer__links">
                            <li><a href="#faq">よくあるご質問</a></li>
                            <li><a href="#customer-voices">お客様の声</a></li>
                            <li><a href="#manner">葬儀の豆知識</a></li>
                            <li><a href="#contact">お問い合わせ</a></li>
                            <li><a href="#contact">資料請求</a></li>
                            <!-- <li><a href="#sitemap">サイトマップ</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Middle -->
        <div class="footer__middle">
            <div class="container">
                <div class="footer__features">
                    <div class="footer__feature">
                        <i class="fas fa-shield-alt"></i>
                        <div>
                            <strong>安心の実績</strong>
                            <span>創業50年の信頼</span>
                        </div>
                    </div>
                    <div class="footer__feature">
                        <i class="fas fa-award"></i>
                        <div>
                            <strong>経済産業大臣認可</strong>
                            <span>優良葬祭事業者</span>
                        </div>
                    </div>
                    <div class="footer__feature">
                        <i class="fas fa-users"></i>
                        <div>
                            <strong>年間実績</strong>
                            <span>1,000件以上</span>
                        </div>
                    </div>
                    <div class="footer__feature">
                        <i class="fas fa-heart"></i>
                        <div>
                            <strong>満足度</strong>
                            <span>98%以上</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer__bottom">
            <div class="container">
                <div class="footer__bottom-content">
                    <div class="footer__copyright">
                        <p>&copy; 2025 メモリアルホール光和. All rights reserved.</p>
                        <p class="footer__address">
                            <i class="fas fa-map-marker-alt"></i>
                            〒395-0821 長野県飯田市松尾新井6544-1
                        </p>
                    </div>
                    <div class="footer__certifications">
                        <span class="footer__cert-text">認証・資格</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- JavaScript - Deferred Loading -->
    <script src="<?php echo get_theme_file_uri('js/main.js'); ?>" defer></script>
<?php wp_footer(); ?>    
</body>
</html>