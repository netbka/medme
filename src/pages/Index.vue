

<template>
  <div>
    <app-index-hero></app-index-hero>
    <app-index-sl></app-index-sl>
    <app-index-about></app-index-about>
    <app-index-team></app-index-team>
    <app-index-contact></app-index-contact>
    <!-- <a href uk-totop class="uk-totop-pos uk-button uk-button-secondary"></a> -->
  </div>
</template>

<script>
import hero from "./index/IndexHero.vue";
import SL from "./index/IndexSL.vue";
import about from "./index/IndexAbout.vue";
import Contact from "./index/IndexContact.vue";
import Team from "./index/IndexTeam.vue";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    "app-index-hero": hero,
    "app-index-sl": SL,
    "app-index-about": about,

    "app-index-contact": Contact,
    "app-index-team": Team

    // "app-layout-footer": LayoutFooter
  }
};
</script>
<style>
.uk-heading-line {
  font-weight: bolder;
}
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
.uk-totop-pos {
  position: fixed;
  bottom: 100px;
  right: 109px;
  padding: 0 20px;
  border-radius: 5px;
}
</style>