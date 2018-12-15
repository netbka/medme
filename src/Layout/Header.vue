
<template>
  <div class="uk-position-relative z-2">
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
                  <a href="#service" uk-scroll>Service lines</a>
                </li>
                <li>
                  <a href="#team" uk-scroll>Team</a>
                </li>
                <li>
                  <a href="#contact" uk-scroll>Contacts</a>
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
//import hero from "../assets/images/hero.png";
//import introVideo from "../assets/video/hero.mp4";
var isHidden = false;
export default {
  data: () => ({
    menulogo: menulogo
    //hero: hero,
    //  introVideo: introVideo
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
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.navcolor {
  background: rgba(186, 233, 242, 0.39);
}
.uk-navbar-container:not(.uk-navbar-transparent) {
  border-bottom: #96bef1e5 1px solid;
}
.z-2 {
  z-index: 2;
}
</style>
