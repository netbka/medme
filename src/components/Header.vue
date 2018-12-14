
<template>
  <div class="uk-position-relative">
    <video loop muted playsinline uk-video="autoplay: inview" class="width100">
      <source :src="introVideo" type="video/mp4">
    </video>
    <div class="uk-overlay-primary uk-position-cover overlaystyle"></div>
    <div class="uk-overlay uk-position-large uk-position-center uk-light uk-flex uk-flex-middle">
      <div class="uk-container">
        <h1
          class="uk-width-1-2@m uk-margin-auto uk-margin-auto-vertical"
          uk-parallax="blur:2; sepia: 100;"
        >
          Medme group is an emerging
          company in tech driven healthcare
        </h1>
        <p
          class="uk-width-1-2@m uk-margin-auto uk-margin-auto-vertical"
          uk-parallax="blur: 2; sepia: 100;"
        >Additional info for the welcome section</p>
      </div>
    </div>

    <div class="uk-position-top" v-on:active="toggle(true)" v-on:inactive="toggle(false)">
      <nav class="uk-navbar-container uk-navbar-transparent uk-margin navcolor">
        <div class="uk-container">
          <div class="uk-navbar">
            <div class="uk-navbar-left">
              <a class="uk-navbar-item uk-logo" href="/">
                <img :src="menulogo" alt="Logo">
              </a>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <li class="uk-active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about" uk-scroll>About us</a>
                </li>
                <li>
                  <a href="#">Service lines</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import menulogo from "../assets/images/iconlogos.png";
import introVideo from "../assets/video/hero.mp4";
var isHidden = false;
export default {
  data: () => ({
    menulogo: menulogo,
    introVideo: introVideo
  }),
  methods: {
    toggle() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<style scoped>
.width100 {
  min-width: 100% !important;
}
.navcolor {
  background: #48648a3d;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
  border-bottom: #96bef1e5 1px solid;
}
.overlaystyle {
  mix-blend-mode: color-burn;
}
</style>
