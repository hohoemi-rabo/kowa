  <?php get_header(); ?>

  <!--お問い合わせフォーム -->
  <section
    class="club-contact"
    id="club-contact"
    aria-labelledby="club-contact-title"
  >
    <div class="container">
      <div class="club-contact__content">

        <!-- Contact Form 7 -->
        <div class="club-form">
          <?php echo do_shortcode('[contact-form-7 id="2017a2e" title="お問い合わせ"]'); ?>
        </div>

        <!-- サイドバー情報 -->
        <aside class="club-contact__sidebar">
          <div class="club-info-card">
            <h3 class="club-info-card__title">
              <i class="fas fa-info-circle"></i>
              アルファ倶楽部入会のメリット
            </h3>
            <ul class="club-info-card__list">
              <li>
                <i class="fas fa-check"></i>
                生涯会員制（年会費不要）
              </li>
              <li>
                <i class="fas fa-check"></i>
                葬儀基本料金10%割引
              </li>
              <li>
                <i class="fas fa-check"></i>
                弔慰金10%給付
              </li>
              <li>
                <i class="fas fa-check"></i>
                法律相談サービス
              </li>
              <li>
                <i class="fas fa-check"></i>
                権利継承可能
              </li>
            </ul>
          </div>

          <div class="club-info-card">
            <h3 class="club-info-card__title">
              <i class="fas fa-phone-alt"></i>
              お電話でのお問い合わせ
            </h3>
            <div class="club-info-card__phone">
              <a href="tel:0120-077-508">
                <span class="club-info-card__phone-number">0120-077-508</span>
                <span class="club-info-card__phone-hours">24時間365日受付</span>
              </a>
            </div>
          </div>

          <div class="club-info-card">
            <h3 class="club-info-card__title">
              <i class="fas fa-map-marker-alt"></i>
              ご来店でのご相談
            </h3>
            <p class="club-info-card__text">
              直接のご相談も承っております。<br />
              事前にお電話でご予約いただくと、スムーズにご案内できます。
            </p>
            <a href="<?php echo home_url('/company/'); ?>" class="btn btn--outline btn--sm">
              <i class="fas fa-map"></i>
              アクセス情報
            </a>
          </div>
        </aside>

      </div>
    </div>
  </section>

  <?php get_sidebar(); ?>
  <?php get_footer(); ?>