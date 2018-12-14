<template>
  <div>
    <app-layout-header></app-layout-header>
    <router-view></router-view>
    <app-layout-footer></app-layout-footer>
  </div>
</template>

<script>
import LayoutHeader from "./components/Header.vue";
import LayoutFooter from "./components/footer.vue";
export default {
  name: "MainLayout",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    "app-layout-header": LayoutHeader,
    "app-layout-footer": LayoutFooter
  }
};
</script>
