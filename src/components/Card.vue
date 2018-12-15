<template>
  <div class="uk-card uk-card-hover uk-dark" v-bind:class="[propCardSize, propCardType]">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img
            class="uk-border-circle"
            :width="propCardIconData.size"
            :height="propCardIconData.size"
            :src="propCardIconData.img"
          >
        </div>
        <div class="uk-width-expand uk-preserve-color">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{propCardTitle}}</h3>
          <p class="uk-text-meta uk-margin-remove-top">{{propCardSubTitle}}</p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>{{propCardBodyText}}</p>
    </div>
    <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text">Read more</a>
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
</style>
