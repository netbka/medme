

<template>
  <div>
    <div class="uk-section uk-section-default uk-preserve-color uk-padding-remove-top" id="team">
      <div class="uk-container">
        <div class="uk-panel uk-dark uk-margin-medium">
          <h2 class="uk-heading-primary uk-heading-line uk-text-center">
            <span>Our Team</span>
          </h2>
        </div>

        <div class="uk-grid-small uk-child-width-1-3@m uk-grid uk-grid-match" uk-grid>
          <div class="uk-first-column">
            <team-card
              :propCardIconData="valentin"
              propCardTitle="Valentin Doronichev"
              propCardSubTitle="Chairman"
              propCardBodyText="Valentin Doronichev graduated as economist and spent more than 25 years in medical business as an entrepreneur, manager and investor."
            ></team-card>
          </div>
          <div>
            <team-card
              :propCardIconData="ilya"
              propCardTitle="Ilya Sloutsky"
              propCardSubTitle="Managing Partner"
              propCardBodyText="Ilya Sloutsky is an entrepreneur with over 25-year history leveraged by management position and significant experience in marketing and IT consulting. "
            ></team-card>
          </div>
          <div>
            <team-card
              :propCardIconData="nikita"
              propCardTitle="Nikita Wilhelm"
              propCardSubTitle="Chief Financial Officer"
              propCardBodyText="Nikita Wilhelm is a professional with more than 10-year experience in corporate finance management and M&A."
            ></team-card>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="uk-section uk-section-default uk-preserve-color" id="team">
      <div class="uk-container">
        <h2>Our Team</h2>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
              <div class="uk-width-1-3">
                <div class="uk-card-media-left uk-cover-container p-t-40">
                  <img :src="ilya" alt="Ilya" uk-cover class="h-120-w-210">
                  <canvas class="h-120-w-210"></canvas>
                </div>
              </div>
              <div class="uk-width-expand@m">
                <div class="uk-card-body uk-padding-small">
                  <h3 class="uk-card-title">Ilya Sloutsky</h3>
                  <p class="uk-text-meta uk-margin-remove-top">Managing Partner</p>
                  <p
                    class="f-12"
                  >Ilya Sloutsky is an entrepreneur with over 25-year history leveraged by many years of management position with a multinational business and significant experience in management, marketing and IT consulting. Discovering new global opportunities in emerging industry of digital health is slightly easier, when based on his cross industrial background.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
              <div class="uk-width-1-3">
                <div class="uk-card-media-left uk-cover-container p-t-40">
                  <img :src="valentin" alt="Ilya" uk-cover class="h-120-w-210">
                  <canvas class="h-120-w-210"></canvas>
                </div>
              </div>
              <div class="uk-width-expand@m">
                <div class="uk-card-body uk-padding-small">
                  <h3 class="uk-card-title">Valentin Doronichev</h3>
                  <p class="uk-text-meta uk-margin-remove-top">Chairman</p>
                  <p
                    class="f-12"
                  >Valentin Doronichev graduated as economist and spent more than 25 years in medical business as an entrepreneur, manager and investor. He is a co-founder of several major companies: ОМB – leading medical equipment and materials supplier, engineering and consulting; Invitro – the largest medical laboratory company in Eastern Europe; 3D Bioprinting Solutions – development of technologies and equipment for bioprinting;</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
              <div class="uk-width-1-3">
                <div class="uk-card-media-left uk-cover-container p-t-40">
                  <img :src="nikita" alt="Ilya" uk-cover class="h-120-w-210">
                  <canvas class="h-120-w-210"></canvas>
                </div>
              </div>
              <div class="uk-width-expand@m">
                <div class="uk-card-body uk-padding-small">
                  <h3 class="uk-card-title">Nikita Wilhelm</h3>
                  <p class="uk-text-meta uk-margin-remove-top">Chief Financial Officer</p>
                  <p
                    class="f-12"
                  >Nikita Wilhelm is a professional with more than 10-year experience in corporate finance management and M&A.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import card from "../../components/CardTeam.vue";
import ilya from "../../assets/images/ilya.png";
import ilyas from "../../assets/images/ilyas.png";
import valentin from "../../assets/images/valentin.png";
import valentins from "../../assets/images/valentins.png";
import nikita from "../../assets/images/nikita.png";
import nikitas from "../../assets/images/nikitas.png";

export default {
  name: "IndexTeam",
  data() {
    return {
      ilya: { img: ilya },
      ilyas: ilyas,
      valentin: { img: valentin },
      //valentin: valentin,
      valentins: valentins,
      nikita: { img: nikita },
      //nikita: nikita,
      nikitas: nikitas
    };
  },
  components: {
    "team-card": card
  }
};
</script>
<style scoped>
</style>