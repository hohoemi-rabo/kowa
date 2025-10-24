<?php get_header(); ?>

    <!-- 生花紹介 -->
    <main class="flower-main">
      <!-- Hero Section -->
      <section class="sub-hero" aria-labelledby="sub-hero-title">
        <div class="container">
          <div class="sub-hero__content">
            <h1 id="sub-hero-title" class="sub-hero__title">
              <span class="sub-hero__subtitle">Memorial Flowers</span>
              <span class="sub-hero__maintitle">御供花・御供物</span>
            </h1>
            <p class="sub-hero__text">
              弊社がお受けしているご葬儀に関する供花、供物は下記一覧よりお選び下さい。<br />
              <span class="sub-hero__highlight">
                <i class="fas fa-crown"></i>
                アルファ倶楽部会員様は特別価格でご提供いたします
              </span>
            </p>
          </div>
        </div>
      </section>

      <!-- 生花セクション -->
      <section
        class="flower-section"
        id="fresh-flowers"
        aria-labelledby="fresh-flowers-title"
      >
        <div class="container">
          <div class="flower-section__header">
            <h2 id="fresh-flowers-title" class="flower-section__title">
              <i class="fas fa-leaf"></i>
              生花
            </h2>
            <p class="flower-section__description">
              故人を偲び、心を込めた美しい生花をご用意しております
            </p>
          </div>

          <div class="flower-grid flower-grid--two">
            <!-- 生花2: 枕花 -->
            <div class="flower-card">
              <div class="flower-card__image">
                <img
                  src="<?php echo get_theme_file_uri('images/facilities/flowers/12.jpg'); ?>"
                  alt="生花12番"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="600"
                />
              </div>
              <div class="flower-card__content">
                <h3 class="flower-card__name">12</h3>
                <div class="flower-card__price">
                  <div class="price-member">
                    <span class="price-label">価格</span>
                    <span class="price-amount">15,000円</span>
                    <span class="price-tax">【税抜】</span>
                  </div>
                  <div class="price-including-tax">
                    <span class="price-amount">16,500円</span>
                    <span class="price-tax">【税込】</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 生花2: 枕花 -->
            <div class="flower-card">
              <div class="flower-card__image">
                <img
                  src="<?php echo get_theme_file_uri('images/facilities/flowers/13.JPG'); ?>"
                  alt="生花13番"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="600"
                />
              </div>
              <div class="flower-card__content">
                <h3 class="flower-card__name">13</h3>
                <div class="flower-card__price">
                  <div class="price-member">
                    <span class="price-label">価格</span>
                    <span class="price-amount">20,000円</span>
                    <span class="price-tax">【税抜】</span>
                  </div>
                  <div class="price-including-tax">
                    <span class="price-amount">22,000円</span>
                    <span class="price-tax">【税込】</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 生花3: ボール供花（菊） -->
            <div class="flower-card">
              <div class="flower-card__image">
                <img
                  src="<?php echo get_theme_file_uri('images/facilities/flowers/14.jpg'); ?>"
                  alt="生花14番"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="600"
                />
              </div>
              <div class="flower-card__content">
                <h3 class="flower-card__name">14</h3>
                <div class="flower-card__price">
                  <div class="price-member">
                    <span class="price-label">価格</span>
                    <span class="price-amount">25,000円</span>
                    <span class="price-tax">【税抜】</span>
                  </div>
                  <div class="price-including-tax">
                    <span class="price-amount">27,500円</span>
                    <span class="price-tax">【税込】</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flower-section__note">
            <p>
              ※会員価格に関してはお電話もしくはメールにてお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <!-- Contact CTA Section -->
      <section
        class="contact-cta-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div class="container">
          <div class="alpha-club__contact-cta">
            <div class="contact-cta__overlay">
              <div class="contact-cta__header">
                <h3 class="contact-cta__title" id="contact-title">
                  <i class="fas fa-phone-volume"></i>
                  お問い合わせ・ご相談
                </h3>
                <p class="contact-cta__subtitle">
                  葬儀に関するご質問やご不明な点など<br />
                  まずはお気軽にお問い合わせください。
                </p>
              </div>

              <div class="contact-cta__options">
                <div class="contact-option">
                  <h4 class="contact-option__title">お電話でのお問い合わせ</h4>
                  <div class="contact-option__content">
                    <p class="contact-option__hours">24時間365日受付</p>
                    <a href="tel:0120-077-508" class="contact-option__phone">
                      <i class="fas fa-phone"></i>
                      0120-077-508
                    </a>
                  </div>
                </div>

                <div class="contact-option">
                  <h4 class="contact-option__title">WEBからのお問い合わせ</h4>
                  <div class="contact-option__content">
                    <a href="<?php echo home_url('/contact/') ?>" class="contact-option__button">
                      <i class="fas fa-envelope"></i>
                      <span>お問い合わせフォームへ</span>
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>