<template>
  <div class="uk-card uk-card-default" v-bind:class="[propCardSize]">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img class="uk-border-circle" width="40" height="40" :src="propCardIcon">
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
          <p class="uk-text-meta uk-margin-remove-top">
            <time datetime="2016-04-01T19:00">April 01, 2016</time>
          </p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: ""
  }),
  props: {
    propCardSize: {
      type: String,
      default: ""
    },
    propCardIcon: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.footerbackground {
  background-color: #3e4551 !important;
}
.f-14 {
  font-size: 14px;
  color: #ccc;
}
.tileHeader {
  color: #eee;
}
</style>
