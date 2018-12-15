<template>
  <div
    class="uk-card uk-grid-collapse uk-margin bg-white uk-card-hover card-padding"
    v-bind:class="[propCardSize, propCardType]"
    uk-grid
  >
    <div class="uk-width-1-3">
      <div class="uk-card-media-left uk-cover-container">
        <img :src="propCardIconData.img" alt="photo" uk-cover class="h-120-w-210">
        <canvas class="h-120-w-210"></canvas>
      </div>
    </div>
    <div class="uk-width-expand@m">
      <div class="uk-card-body uk-padding-small">
        <h3 class="uk-card-title uk-margin-remove-bottom">{{propCardTitle}}</h3>
        <p class="uk-text-meta uk-margin-remove-top">{{propCardSubTitle}}</p>

        <div class="f-12">{{propCardBodyText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import imgerror from "../assets/images/imgerror.png";
export default {
  data: () => ({
    text: ""
  }),
  props: {
    propCardType: {
      type: String,
      default: "uk-card-default"
    },
    propCardSize: {
      type: String,
      default: ""
    },
    propCardIconData: {
      type: Object,
      default: function() {
        return { img: imgerror, size: 64 };
      }
    },
    propCardTitle: {
      type: String,
      default: "Title"
    },
    propCardSubTitle: {
      type: String,
      default: "Subtitle"
    },
    propCardBodyText: {
      type: String,
      default: "Subtitle"
    }
  }
};
</script>

<style scoped>
.footerbackground {
  background-color: #3e4551 !important;
}
.card-padding {
  padding: 10px 10px 0px 10px;
}
.f-14 {
  font-size: 14px;
  color: #ccc;
}
.tileHeader {
  color: #eee;
}
.uk-card-primary .uk-card-header {
  border-bottom: 1px solid #e5e5e5;
}
.uk-card-primary .uk-card-footer {
  border-top: 1px solid #e5e5e5;
}
.uk-card-secondary .uk-card-header {
  border-bottom: 1px solid #e5e5e5;
}
.uk-card-secondary .uk-card-footer {
  border-top: 1px solid #e5e5e5;
}

.bg-white {
  background-color: #fff;
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
/* .h-120-w-210 {
  max-height: 210px !important;
  max-width: 120px !important;
  min-height: 210px !important;
  min-width: 120px !important;
} */
</style>
