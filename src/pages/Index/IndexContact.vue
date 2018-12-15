

<template>
  <div>
    <div class="uk-section uk-section-primary uk-preserve-color" id="contact">
      <div class="uk-container">
        <div class="uk-text-center uk-grid-match" uk-grid>
          <div class="uk-width-1-3@m">
            <div class="uk-card uk-card-body">
              <div class="uk-text-lead uk-position-center uk-text-uppercase font-40-line-15">
                <h2 class="uk-heading-bullet">Contact us</h2>
              </div>
            </div>
          </div>
          <div class="uk-width-expand@m">
            <div class="uk-child-width-1-2@s uk-text-left uk-grid-match" uk-grid>
              <div>
                <div class="uk-card uk-card-default uk-card-secondary uk-card-small">
                  <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-auto">
                        <img :src="ru">
                      </div>
                      <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Russian Federation</h3>
                        <p class="uk-text-meta uk-margin-remove-top">Moscow</p>
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body">
                    <p>Telephone:+7-903-111-22-33</p>
                    <p>eMail: info@medme.com</p>
                  </div>
                  <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text">Contact us</a>
                  </div>
                </div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-primary uk-card-small">
                  <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-auto">
                        <img :src="uk">
                      </div>
                      <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">United Kingdom</h3>
                        <p class="uk-text-meta uk-margin-remove-top">London</p>
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body">
                    <p>Telephone:+1-111-111-22-33</p>
                    <p>eMail: info@medme.com</p>
                  </div>
                  <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ru from "../../assets/images/flags/Russian Federation.png";
import uk from "../../assets/images/flags/uk.png";
export default {
  name: "IndexContact",
  data() {
    return {
      ru: ru,
      uk: uk
    };
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