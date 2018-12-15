

<template>
  <div
    class="uk-section uk-section-default uk-preserve-color"
    uk-parallax="blur: 2; opacity: 0.8;"
    id="about"
  >
    <div class="uk-light uk-margin-medium uk-background-cover uk-background-fixed about-bg">
      <div class="uk-container">
        <div class="uk-panel uk-dark uk-margin-medium p-t-40">
          <h2 class="uk-heading-primary uk-heading-line uk-text-center">
            <span>About Us</span>
          </h2>
        </div>

        <p class="white">
          Healthcare globally saves more and more lives but requires disproportionally higher investments.
          The share of healthcare in GDPs of the developed countries grew up from 3-4% in the 1950s to 10-11% in Europe today and unbelievable 17% in the US.
          7.5 trillion dollars are being spent worldwide annually. As all other industries healthcare is and will continue passing through a digital transformation that will dramatically change the landscape of the industry.
          Medme employs technologies to provide more effective and efficient services in healthcare. Providing patients with higher availability of care and payers with lower costs.
        </p>
        <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <div class="uk-panel uk-h3">ECG Reports</div>
            <p class="about-numbers">25,000</p>
          </div>
          <div>
            <div class="uk-panel uk-h3">Radiology Cases</div>
            <p class="about-numbers">10,000</p>
          </div>
          <div>
            <div class="uk-panel uk-h3">DP diagnosis</div>
            <p class="about-numbers">12000</p>
          </div>
          <div>
            <div class="uk-panel uk-h3">Laboratories</div>
            <p class="about-numbers">1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAbout",
  data() {
    return {};
  },
  components: {
    // "app-layout-footer": LayoutFooter
  }
};
</script>
<style scoped>
.about-bg {
  background-image: url("../../assets/images/about-bg1.jpg");
  padding: 40px;
}
.white {
  color: #fff;
  font-size: 20px;
}
.p-t-40 {
  padding-top: 40px;
}
.about-numbers {
  font-size: 24px;
}
</style>