<?php get_header(); ?>

    <!-- sub Hero Section -->
    <section class="sub-hero" aria-labelledby="sub-hero-title">
      <div class="container">
        <div class="sub-hero__content">
          <h1 id="sub-hero-title" class="sub-hero__title">
            <span class="sub-hero__subtitle">GENERAL FUNERAL PLAN</span>
            <span class="sub-hero__maintitle">家族葬</span>
          </h1>
          <p class="sub-hero__text">
            家族や親族だけで、心ゆくまでお別れを<br />
            大切な人との最後の時間を、静かで温かい空間でお過ごしください
            <span class="sub-hero__highlight">
              <i class="fas fa-crown"></i>
              アルファ倶楽部会員様は特別価格でご提供いたします
            </span>
          </p>
        </div>
      </div>
    </section>

    <!-- Plan Cards Section -->
    <section class="plans">

        <div class="plans__grid">
          <!-- 光プラン -->
          <div class="plan-card plan-card--premium">
            <div class="plan-card__image plan-card__image--placeholder">
              <i class="fas fa-image" aria-hidden="true"></i>
              <span>画像準備中</span>
            </div>
            
            <div class="plan-card__header">
              <h3 class="plan-card__title">光プラン</h3>
              <p class="plan-card__subtitle">シンプルで心温まるプラン</p>
            </div>

            <div class="plan-card__content">
              <div class="plan-card__pricing">
                <div class="pricing-tier pricing-tier--alpha">
                  <div class="pricing-tier__label">アルファ会員様</div>
                  <div class="pricing-tier__prices">
                    <div class="price price--main">425,000円<span class="price--excluding-tax">【税抜】</span></div>
                    <div class="price price--tax">（税込467,500円）</div>
                  </div>
                </div>
                <div class="pricing-tier pricing-tier--heart">
                  <div class="pricing-tier__label">ハートライフ会員様</div>
                  <div class="pricing-tier__prices">
                    <div class="price price--main">450,000円<span class="price--excluding-tax">【税抜】</span></div>
                    <div class="price price--tax">（税込495,000円）</div>
                  </div>
                </div>
                <div class="pricing-tier pricing-tier--general">
                  <div class="pricing-tier__label">通常価格</div>
                  <div class="pricing-tier__prices">
                    <div class="price price--main">500,000円<span class="price--excluding-tax">【税抜】</span></div>
                    <div class="price price--tax">（税込550,000円）</div>
                  </div>
                </div>
              </div>
              
              <!-- 基本サービスアイコン -->
              <div class="plan-card__services">
                <div class="service-item">
                  <i class="fas fa-home"></i>
                  <span>お迎え</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-bed"></i>
                  <span>ご安置</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-hands-praying"></i>
                  <span>告別式</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-fire"></i>
                  <span>火葬</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-dove"></i>
                  <span>葬儀</span>
                </div>
              </div>
              
              <!-- 光プランに含まれるもの -->
              <div class="plan-card__included">
                <h4 class="plan-card__included-title">光プランに含まれるもの</h4>
                <img 
                  src="<?php echo get_theme_file_uri('images/hikari.png'); ?>" 
                  alt="光プランに含まれる内容" 
                  class="plan-card__included-image"
                />
              </div>
              
            </div>
          </div>

          <!-- 和みプラン -->
          <div class="plan-card plan-card--standard">
            <div class="plan-card__image plan-card__image--placeholder">
              <i class="fas fa-image" aria-hidden="true"></i>
              <span>画像準備中</span>
            </div>
            
            <div class="plan-card__header">
              <h3 class="plan-card__title">和みプラン</h3>
              <p class="plan-card__subtitle">家族の絆を大切にするプラン</p>
            </div>

            <div class="plan-card__content">
              <div class="plan-card__pricing">
                <div class="pricing-tier pricing-tier--alpha">
                  <div class="pricing-tier__label">アルファ会員様</div>
                  <div class="pricing-tier__prices">
                    <div class="price price--main">550,000円<span class="price--excluding-tax">【税抜】</span></div>
                    <div class="price price--tax">（税込605,000円）</div>
                  </div>
                </div>
                <div class="pricing-tier pricing-tier--heart">
                  <div class="pricing-tier__label">ハートライフ会員様</div>
                  <div class="pricing-tier__prices">
                    <div class="price price--main">585,000円<span class="price--excluding-tax">【税抜】</span></div>
                    <div class="price price--tax">（税込643,500円）</div>
                  </div>
                </div>
                <div class="pricing-tier pricing-tier--general">
                  <div class="pricing-tier__label">通常価格</div>
                  <div class="pricing-tier__prices">
                    <div class="price price--main">650,000円<span class="price--excluding-tax">【税抜】</span></div>
                    <div class="price price--tax">（税込715,000円）</div>
                  </div>
                </div>
              </div>
              
              <!-- 基本サービスアイコン -->
              <div class="plan-card__services">
                <div class="service-item">
                  <i class="fas fa-home"></i>
                  <span>お迎え</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-bed"></i>
                  <span>ご安置</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-moon"></i>
                  <span>通夜式</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-hands-praying"></i>
                  <span>告別式</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-fire"></i>
                  <span>火葬</span>
                </div>
                <div class="service-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
                <div class="service-item">
                  <i class="fas fa-dove"></i>
                  <span>葬儀</span>
                </div>
              </div>
              
              <!-- 和みプランに含まれるもの -->
              <div class="plan-card__included">
                <h4 class="plan-card__included-title">和みプランに含まれるもの</h4>
                <img 
                  src="<?php echo get_theme_file_uri('images/nagomi.png'); ?>" 
                  alt="和みプランに含まれる内容" 
                  class="plan-card__included-image"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommendation Section -->
    <section class="recommendation">
      <div class="container">
        <div class="recommendation__header">
          <h2 class="section-title">家族葬はこのような方におすすめ</h2>
          <p class="section-description">家族や親族だけの静かな空間で<br />心ゆくまでお別れをしたい方に選ばれています</p>
        </div>
        
        <div class="recommendation__points">
          <div class="point-card">
            <div class="point-card__number">Point 1</div>
            <div class="point-card__icon">
              <i class="fas fa-home"></i>
            </div>
            <h3 class="point-card__title">少人数で静かにお見送りしたい</h3>
            <p class="point-card__description">
              家族や親族など、故人様と親しい方々だけで、気張らずに心からお別れをしたい方に最適です。
            </p>
          </div>
          
          <div class="point-card">
            <div class="point-card__number">Point 2</div>
            <div class="point-card__icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3 class="point-card__title">ゲストへの気遣いを簡略化したい</h3>
            <p class="point-card__description">
              参列者への接待や気遣いを最小限にし、故人様とのお別れの時間を大切にしたい方に適しています。
            </p>
          </div>
          
          <div class="point-card">
            <div class="point-card__number">Point 3</div>
            <div class="point-card__icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="point-card__title">プライベートな空間で思い出を分かち合いたい</h3>
            <p class="point-card__description">
              家族だけの静かな空間で、故人様との思い出をゆっくりと語り合い、心からお別れをしたい方に適しています。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plan Comparison Table Section -->
    <section class="plan-comparison">
      <div class="container">
        <div class="plan-comparison__header">
          <h2 class="section-title">プラン比較表</h2>
          <p class="section-description">各プランの内容と価格を比較してご検討ください</p>
          <p class="plan-comparison__note">※価格はすべて税込み表示です</p>
        </div>
        
        <div class="plan-comparison__wrapper">
          <table class="plan-comparison__table">
            <thead>
              <tr>
                <th class="plan-comparison__header-cell plan-comparison__header-cell--feature">
                  <span>プラン内容</span>
                </th>
                <th class="plan-comparison__header-cell plan-comparison__header-cell--premium">
                  <div class="plan-comparison__plan-header">
                    <span class="plan-comparison__plan-name">光</span>
                    <span class="plan-comparison__plan-subtitle">シンプルで心温まるプラン</span>
                  </div>
                </th>
                <th class="plan-comparison__header-cell plan-comparison__header-cell--standard">
                  <div class="plan-comparison__plan-header">
                    <span class="plan-comparison__plan-name">和み</span>
                    <span class="plan-comparison__plan-subtitle">家族の絆を大切にするプラン</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- 価格行 -->
              <tr class="plan-comparison__row plan-comparison__row--price">
                <td class="plan-comparison__cell plan-comparison__cell--feature">
                  <strong>アルファ会員価格</strong>
                </td>
                <td class="plan-comparison__cell plan-comparison__cell--premium">
                  <div class="plan-comparison__price">
                    <span class="plan-comparison__price-main">467,500円</span>
                  </div>
                </td>
                <td class="plan-comparison__cell plan-comparison__cell--standard">
                  <div class="plan-comparison__price">
                    <span class="plan-comparison__price-main">605,000円</span>
                  </div>
                </td>
              </tr>
              
              <tr class="plan-comparison__row plan-comparison__row--price">
                <td class="plan-comparison__cell plan-comparison__cell--feature">
                  <strong>ハートライフ会員価格</strong>
                </td>
                <td class="plan-comparison__cell plan-comparison__cell--premium">
                  <div class="plan-comparison__price">
                    <span class="plan-comparison__price-main">495,000円</span>
                  </div>
                </td>
                <td class="plan-comparison__cell plan-comparison__cell--standard">
                  <div class="plan-comparison__price">
                    <span class="plan-comparison__price-main">643,500円</span>
                  </div>
                </td>
              </tr>
              
              <tr class="plan-comparison__row plan-comparison__row--price">
                <td class="plan-comparison__cell plan-comparison__cell--feature">
                  <strong>一般価格</strong>
                </td>
                <td class="plan-comparison__cell plan-comparison__cell--premium">
                  <div class="plan-comparison__price">
                    <span class="plan-comparison__price-main">550,000円</span>
                  </div>
                </td>
                <td class="plan-comparison__cell plan-comparison__cell--standard">
                  <div class="plan-comparison__price">
                    <span class="plan-comparison__price-main">715,000円</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- モバイル用比較表 -->
        <div class="plan-comparison__mobile">
          <!-- 光プラン -->
          <div class="plan-comparison__mobile-card plan-comparison__mobile-card--premium">
            <div class="plan-comparison__mobile-header">
              <h3 class="plan-comparison__mobile-title">光</h3>
              <p class="plan-comparison__mobile-subtitle">シンプルで心温まるプラン</p>
              <div class="plan-comparison__mobile-prices">
                <div class="plan-comparison__mobile-price-row">
                  <span class="plan-comparison__mobile-price-label">アルファ会員</span>
                  <div class="plan-comparison__mobile-price">
                    <span class="plan-comparison__price-main">467,500円</span>
                  </div>
                </div>
                <div class="plan-comparison__mobile-price-row">
                  <span class="plan-comparison__mobile-price-label">ハートライフ会員</span>
                  <div class="plan-comparison__mobile-price">
                    <span class="plan-comparison__price-main">495,000円</span>
                  </div>
                </div>
                <div class="plan-comparison__mobile-price-row">
                  <span class="plan-comparison__mobile-price-label">一般価格</span>
                  <div class="plan-comparison__mobile-price">
                    <span class="plan-comparison__price-main">550,000円</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 和みプラン -->
          <div class="plan-comparison__mobile-card plan-comparison__mobile-card--standard">
            <div class="plan-comparison__mobile-header">
              <h3 class="plan-comparison__mobile-title">和み</h3>
              <p class="plan-comparison__mobile-subtitle">家族の絆を大切にするプラン</p>
              <div class="plan-comparison__mobile-prices">
                <div class="plan-comparison__mobile-price-row">
                  <span class="plan-comparison__mobile-price-label">アルファ会員</span>
                  <div class="plan-comparison__mobile-price">
                    <span class="plan-comparison__price-main">605,000円</span>
                  </div>
                </div>
                <div class="plan-comparison__mobile-price-row">
                  <span class="plan-comparison__mobile-price-label">ハートライフ会員</span>
                  <div class="plan-comparison__mobile-price">
                    <span class="plan-comparison__price-main">643,500円</span>
                  </div>
                </div>
                <div class="plan-comparison__mobile-price-row">
                  <span class="plan-comparison__mobile-price-label">一般価格</span>
                  <div class="plan-comparison__mobile-price">
                    <span class="plan-comparison__price-main">715,000円</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

<?php get_sidebar(); ?>

<?php get_footer(); ?>