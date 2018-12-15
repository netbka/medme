<template>
  <div class="uk-section uk-preserve-color footerbackground">
    <div class="uk-container">
      <div class="uk-text-center uk-grid-match" uk-grid>
        <div class="uk-width-1-3@m">
          <div class="uk-tile uk-tile-default uk-padding-small footerbackground">
            <p class="uk-h4 uk-text-left tileHeader">FOOTER CONTENT</p>
            <p
              class="uk-text-left f-14"
            >Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="uk-width-expand@m">
          <div class="uk-child-width-1-2@s uk-text-left uk-grid-match" uk-grid>
            <div>
              <div class="uk-tile uk-tile-default uk-padding-small footerbackground">
                <p class="uk-h4 uk-text-left tileHeader">FOOTER CONTENT</p>
                <p
                  class="uk-text-left f-14"
                >Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div>
              <div class="uk-tile uk-tile-default uk-padding-small footerbackground">
                <p class="uk-h4 uk-text-left tileHeader">FOOTER CONTENT</p>
                <p
                  class="uk-text-left f-14"
                >Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
