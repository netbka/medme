

<template>
  <div>
    <div class="uk-section uk-section-primary uk-preserve-color" id="about">
      <div class="uk-container">
        <div class="uk-text-center uk-grid-match" uk-grid>
          <div class="uk-width-1-3@m">
            <div class="uk-card uk-card-hover uk-card-secondary uk-card-body">
              <div class="uk-text-lead uk-position-center uk-text-uppercase font-40-line-15">
                <h2 class="uk-heading-bullet">About us</h2>
              </div>
            </div>
          </div>
          <div class="uk-width-expand@m">
            <div class="uk-card uk-card-default uk-card-body uk-text-left">
              Healthcare globally saves more and more lives but requires disproportionally higher investments.
              The share of healthcare in GDPs of the developed countries grew up from 3-4% in the 1950s to 10-11% in Europe today and unbelievable 17% in the US.
              7.5 trillion dollars are being spent worldwide annually. As all other industries healthcare is and will continue passing through a digital transformation that will dramatically change the landscape of the industry.
              Medme employs technologies to provide more effective and efficient services in healthcare. Providing patients with higher availability of care and payers with lower costs.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-section uk-section-secondary uk-preserve-color" id="service">
      <div class="uk-container">
        <div class="uk-text-center uk-grid-match" uk-grid>
          <div class="uk-width-1-3@m">
            <div class="uk-card uk-card-body">
              <div class="uk-text-lead uk-position-center uk-text-uppercase font-40-line-15">
                <h2 class="uk-heading-bullet">Service Lines</h2>
              </div>
            </div>
          </div>
          <div class="uk-width-expand@m">
            <div class="uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid>
              <div>
                <div class="uk-card uk-card-default uk-card-primary uk-card-small">
                  <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Teleradiology​</h3>
                        <p class="uk-text-meta uk-margin-remove-top">Managed Diagnostic Services</p>
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body uk-text-left">
                    <p>Our state-of-the-art purpose-built infrastructure supports quality readings that use leading technologies. These technologies facilitate better and high-quality scans that further ensures accurate readings every time.</p>
                  </div>
                  <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text">Read more</a>
                  </div>
                </div>

                <div class="uk-card uk-card-default uk-card-secondary uk-card-small">
                  <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Telecardiology​</h3>
                        <p class="uk-text-meta uk-margin-remove-top">ECG in remote mode, instantly</p>
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body uk-text-left">
                    <p>In few minutes, you can perform an ECG directly without needing to go to the hospital, you will receive a result confirmed by the cardiologist and always have the results available on a web platform accessible everywhere.</p>
                  </div>
                  <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text">Read more</a>
                  </div>
                </div>

                <div class="uk-card uk-card-default uk-card-default uk-card-small">
                  <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Digital Pathology</h3>
                        <p class="uk-text-meta uk-margin-remove-top">Diagnosis anywhere, anytime</p>
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body uk-text-left">
                    <p>Momentum is growing for pathologists. Endless collaboration possibilities and TelePathology becomes the de facto standard in primary reviews, second opinions, tumor board or ring trial settings.</p>
                  </div>
                  <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- >-->
    <app-index-team></app-index-team>
    <app-index-contact></app-index-contact>
  </div>
</template>

<script>
import Contact from "./IndexContact.vue";
import Team from "./IndexTeam.vue";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    "app-index-contact": Contact,
    "app-index-team": Team
    // "app-layout-footer": LayoutFooter
  }
};
</script>
<style scoped>
.font-40-line-15 {
  font-size: calc(20px + (20) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
}
.p-t-40 {
  padding-top: 40px;
}
.f-12 {
  font-size: 12px;
}

.h-120-w-210 {
  max-height: 210px !important;
  max-width: 120px !important;
  min-height: 210px !important;
  min-width: 120px !important;
}
</style>