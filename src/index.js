/* eslint-disable semi */
/* eslint-disable eol-last */
import Vue from 'vue'
import router from './router'
import App from './App'
import './assets/css/spinner.css'
import './assets/css/style.scss'
import UIkit from 'UIkit';
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    UIkit.update();
  }
})