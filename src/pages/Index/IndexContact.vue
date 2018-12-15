

<template>
  <div>
    <div class="uk-section uk-section-default uk-preserve-color" id="contact">
      <!-- <div class="uk-container">
        <div class="uk-text-center uk-grid-match" uk-grid>
          <div class="uk-width-1-3@m"></div>
          <div class="uk-width-expand@m">
            <div class="uk-child-width-1-2@s uk-text-left uk-grid-match" uk-grid></div>
          </div>
        </div>
      </div>-->
      <div
        class="uk-light uk-margin-medium uk-background-cover uk-background-fixed contact-bg uk-background-blend-multiply uk-background-primary"
      >
        <div class="uk-container">
          <div class="uk-panel uk-dark uk-margin-medium p-t-40">
            <h2 class="uk-heading-primary uk-heading-line uk-text-center uk-padding-remove">
              <span>Our offices</span>
            </h2>
          </div>
          <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
            <div>
              <div class="uk-panel uk-h3 uk-padding-remove">Russian Federation</div>
              <p class="contact-location uk-padding-remove">Moscow</p>
            </div>
            <div>
              <div class="uk-panel uk-h3 uk-padding-remove">Italy</div>
              <p class="contact-location uk-padding-remove">Turin</p>
            </div>
            <div>
              <div class="uk-panel uk-h3 uk-padding-remove">United Kingdom</div>
              <p class="contact-location uk-padding-remove">London</p>
            </div>
            <div>
              <div class="uk-panel uk-h3 uk-padding-remove">Netherlands</div>
              <p class="contact-location uk-padding-remove">Amsterdam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ru from "../../assets/images/flags/Russian Federation.png";
// import uk from "../../assets/images/flags/uk.png";

export default {
  name: "IndexContact",
  data() {
    return {
      // ru: ru,
      // uk: uk
    };
  }
};
</script>
<style scoped>
.font-40-line-15 {
  font-size: calc(20px + (20) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.5;
}
.contact-location {
  color: azure;
}
.p-t-40 {
  padding-top: 40px;
}
.f-12 {
  font-size: 12px;
}
.contact-bg {
  background-image: url("../../assets/images/location1.jpg");
  padding: 40px;
}
</style>