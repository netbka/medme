

<template>
  <div>
    <div class="uk-section uk-section-default uk-preserve-color" id="service">
      <div class="uk-container">
        <div class="uk-panel uk-dark uk-margin-medium">
          <h2 class="uk-heading-primary uk-heading-line uk-text-center">
            <span>Our service lines</span>
          </h2>
        </div>

        <div
          class="uk-text-center uk-grid-match uk-grid-small uk-grid-divider uk-child-width-expand@s"
          uk-grid
        >
          <div>
            <radio-card
              propCardType="uk-card-secondary"
              :propCardIconData="radio"
              propCardTitle="Teleradiology​"
              propCardSubTitle="Managed Diagnostic Services"
              propCardBodyText="Our state-of-the-art purpose-built infrastructure supports quality readings that use leading technologies. These technologies facilitate better and high-quality scans that further ensures accurate readings every time."
            ></radio-card>
          </div>
          <div>
            <radio-card
              propCardType="uk-card-primary"
              :propCardIconData="cardio"
              propCardTitle="Teleradiology​"
              propCardSubTitle="ECG in remote mode, instantly"
              propCardBodyText="In few minutes, you can perform an ECG directly without needing to go to the hospital, you will receive a result confirmed by the cardiologist and always have the results available on a web platform accessible everywhere, anytime."
            ></radio-card>
          </div>
          <div>
            <radio-card
              propCardType="uk-card-default"
              :propCardIconData="dp"
              propCardTitle="Digital Pathology"
              propCardSubTitle="Diagnosis anywhere, anytime"
              propCardBodyText="Momentum is growing for pathologists. Scanners are able to scan at a quality easily levelling most microscopies. Combine this with endless collaboration possibilities and TelePathology becomes the de facto industry standard."
            ></radio-card>
          </div>
          <!-- 

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
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../../components/Card.vue";
import radio from "../../assets/images/radio.png";
import cardio from "../../assets/images/cardio.png";
import dp from "../../assets/images/dp.png";

export default {
  name: "IndexSL",
  data() {
    return {
      radio: { img: radio, size: 64 },
      cardio: { img: cardio, size: 64 },
      dp: { img: dp, size: 64 }
    };
  },
  components: {
    "radio-card": card

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