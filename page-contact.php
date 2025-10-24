<?php get_header(); ?>

    <!--お問い合わせフォーム -->
    <section
      class="club-contact"
      id="club-contact"
      aria-labelledby="club-contact-title"
    >
      <div class="container">
        <div class="club-contact__content">
          <form class="club-form" id="clubForm" novalidate>
            <div class="club-form__section">
              <h3 class="club-form__section-title">
                <i class="fas fa-user"></i>
                お客様情報
              </h3>

              <!-- お名前 -->
              <div class="form-group">
                <label for="club-name" class="form-label">
                  お名前 <span class="required">必須</span>
                </label>
                <input
                  type="text"
                  id="club-name"
                  name="name"
                  class="form-input"
                  required
                  placeholder="山田 太郎"
                  aria-required="true"
                />
                <span class="form-error" role="alert"></span>
              </div>

              <!-- フリガナ -->
              <div class="form-group">
                <label for="club-kana" class="form-label">
                  フリガナ <span class="required">必須</span>
                </label>
                <input
                  type="text"
                  id="club-kana"
                  name="kana"
                  class="form-input"
                  required
                  placeholder="ヤマダ タロウ"
                  aria-required="true"
                  pattern="[\u30A0-\u30FF\s]+"
                />
                <span class="form-error" role="alert"></span>
              </div>

              <!-- 年齢 -->
              <div class="form-group">
                <label for="club-age" class="form-label"> 年齢 </label>
                <select id="club-age" name="age" class="form-select">
                  <option value="">選択してください</option>
                  <option value="20-29">20代</option>
                  <option value="30-39">30代</option>
                  <option value="40-49">40代</option>
                  <option value="50-59">50代</option>
                  <option value="60-69">60代</option>
                  <option value="70-79">70代</option>
                  <option value="80+">80歳以上</option>
                </select>
              </div>

              <div class="form-row">
                <!-- 電話番号 -->
                <div class="form-group">
                  <label for="club-phone" class="form-label">
                    電話番号 <span class="required">必須</span>
                  </label>
                  <input
                    type="tel"
                    id="club-phone"
                    name="phone"
                    class="form-input"
                    required
                    placeholder="090-1234-5678"
                    pattern="[0-9]{2,4}-[0-9]{2,4}-[0-9]{3,4}"
                    aria-required="true"
                  />
                  <span class="form-error" role="alert"></span>
                </div>

                <!-- メールアドレス -->
                <div class="form-group">
                  <label for="club-email" class="form-label">
                    メールアドレス <span class="required">必須</span>
                  </label>
                  <input
                    type="email"
                    id="club-email"
                    name="email"
                    class="form-input"
                    required
                    placeholder="example@email.com"
                    aria-required="true"
                  />
                  <span class="form-error" role="alert"></span>
                </div>
              </div>

              <!-- 住所 -->
              <div class="form-group">
                <label for="club-postal" class="form-label"> 郵便番号 </label>
                <input
                  type="text"
                  id="club-postal"
                  name="postal"
                  class="form-input form-input--postal"
                  placeholder="123-4567"
                  pattern="[0-9]{3}-[0-9]{4}"
                />
              </div>

              <div class="form-group">
                <label for="club-address" class="form-label"> ご住所 </label>
                <input
                  type="text"
                  id="club-address"
                  name="address"
                  class="form-input"
                  placeholder="長野県飯田市○○町1-2-3"
                />
              </div>
            </div>

            <div class="club-form__section">
              <h3 class="club-form__section-title">
                <i class="fas fa-comment-dots"></i>
                お問い合わせ内容
              </h3>

              <!-- お問い合わせ種別 -->
              <div class="form-group">
                <label for="club-inquiry-type" class="form-label">
                  お問い合わせ種別 <span class="required">必須</span>
                </label>
                <div class="form-radio-group">
                  <label class="form-radio">
                    <input
                      type="radio"
                      name="inquiry_type"
                      value="join"
                      required
                    />
                    <span>入会希望</span>
                  </label>
                  <label class="form-radio">
                    <input
                      type="radio"
                      name="inquiry_type"
                      value="info"
                      required
                    />
                    <span>資料請求</span>
                  </label>
                  <label class="form-radio">
                    <input
                      type="radio"
                      name="inquiry_type"
                      value="question"
                      required
                    />
                    <span>ご質問・ご相談</span>
                  </label>
                  <label class="form-radio">
                    <input
                      type="radio"
                      name="inquiry_type"
                      value="other"
                      required
                    />
                    <span>その他</span>
                  </label>
                </div>
                <span class="form-error" role="alert"></span>
              </div>

              <!-- ご質問・ご要望 -->
              <div class="form-group">
                <label for="club-message" class="form-label">
                  ご質問・ご要望
                </label>
                <textarea
                  id="club-message"
                  name="message"
                  class="form-textarea"
                  rows="6"
                  placeholder="ご質問やご要望をお聞かせください"
                ></textarea>
              </div>

              <!-- 希望連絡方法 -->
              <div class="form-group">
                <label class="form-label"> 希望連絡方法 </label>
                <div class="form-checkbox-group">
                  <label class="form-checkbox">
                    <input
                      type="checkbox"
                      name="contact_method[]"
                      value="phone"
                    />
                    <span>電話</span>
                  </label>
                  <label class="form-checkbox">
                    <input
                      type="checkbox"
                      name="contact_method[]"
                      value="email"
                    />
                    <span>メール</span>
                  </label>
                  <label class="form-checkbox">
                    <input
                      type="checkbox"
                      name="contact_method[]"
                      value="postal"
                    />
                    <span>郵送</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- プライバシーポリシー -->
            <div class="form-group">
              <label class="form-checkbox form-checkbox--agreement">
                <input type="checkbox" name="privacy" required />
                <span>
                  <a href="#privacy" target="_blank">プライバシーポリシー</a
                  >に同意する
                  <span class="required">必須</span>
                </span>
              </label>
              <span class="form-error" role="alert"></span>
            </div>

            <!-- 送信ボタン -->
            <div class="form-actions">
              <button type="reset" class="btn btn--outline">
                <i class="fas fa-redo"></i>
                リセット
              </button>
              <button
                type="submit"
                class="btn btn--primary btn--large form-submit"
              >
                <i class="fas fa-paper-plane"></i>
                送信する
              </button>
            </div>
          </form>

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
                  <span class="club-info-card__phone-hours"
                    >24時間365日受付</span
                  >
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
              <a href="company.html" class="btn btn--outline btn--sm">
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