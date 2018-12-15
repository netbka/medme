
<template>
  <div class="uk-position-relative">
    <!-- <div class="hero-bg"></div> -->
    <video loop muted playsinline uk-video="autoplay: inview" class="width100">
      <source :src="introVideo" type="video/mp4">
    </video>
    <!-- <img :src="hero" class="width100"> -->
    <div class="uk-overlay-primary uk-position-cover overlaystyle"></div>
    <div class="uk-overlay uk-position-large uk-position-center uk-width-3-5@m z1">
      <div class="uk-container hero-text uk-light">
        <h1
          class="uk-margin-auto uk-margin-auto-vertical hero-main"
          uk-parallax="blur:2; sepia: 100;"
        >Medme builds infrastructure in the established clusters of digital health, where it operates, and monitors the market in the most innovative points on the map</h1>
        <h3
          class="uk-margin-auto uk-margin-auto-vertical hero-sub"
          uk-parallax="blur: 2; sepia: 100;"
        >We invest and collaborate to grow businesses</h3>
      </div>
    </div>
    <!-- <div class="absolute anlge-bg"></div> -->
  </div>
</template>

<script>
import introVideo from "../../assets/video/hero.mp4";
var isHidden = false;
export default {
  data: () => ({
    introVideo: introVideo
  })
};
</script>
<style scoped>
.overlaystyle {
  /* mix-blend-mode: hue; */
  top: 80px;
  background-color: #002d35bf;
  /* background-image: url(data:image/png;base64,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); */
}
.width100 {
  min-width: 100% !important;
}
.hero-text {
  /* background: #00aecfe3; */

  padding: 40px;
}
.hero-bg {
  /* background-image: url("../assets/images/hero.png"); */
  background: #75cbe7 url("../../assets/images/hero1.jpg") no-repeat scroll
    center center / cover;
  height: 100vh;
}
.hero-main {
  font-weight: bold;
}
.hero-sub {
  color: azure;
}
.anlge-bg {
  background: url("../../assets/images/angle-bg1.png") no-repeat scroll center
    bottom -120px / 100% auto;
}
.fixed,
.absolute {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.overlaystyle:before {
  background: #75cbe7;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#75cbe7),
    to(#138fc2)
  );
  background: linear-gradient(to bottom, #11282f 0%, #138fc2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#75cbe7', endColorstr='#138fc2', GradientType=0);
  color: #ffffff;
}
.z1 {
  z-index: 1;
}
</style>