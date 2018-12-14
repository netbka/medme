// /* eslint-disable semi */
// /* eslint-disable eol-last */
// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from 'pages/MainLayout'

// Vue.use(Router)

// const routes = [{
//   path: '*',
//   component: Home
// }]

// export default new Router({
//   routes
// })

import Vue from 'vue';
import Router from 'vue-router';
//import Index from '@/components/HelloWorld';
// eslint-disable-next-line no-undef
const Index = () => import("../Pages/Index.vue");
Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => ({
    y: 0
  }),
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }]
});