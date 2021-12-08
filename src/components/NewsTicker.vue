<template>
  <div class="container">
    <div class="table">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="contentTable">
        <div class="contentTable__image">
          <slot name="image"></slot>
        </div>
        <div class="contentTable__content">
          <div class="contentTable__headerTitle">
            <slot name="headerTitle"></slot>
          </div>
          <div class="contentTable__contentTitle">
            <slot name="contentTitle">{{text}}<AppLoader/></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from '../components/AppLoader.vue'
export default {
  name: "NewsTicker",

  components:{
    AppLoader
  },

  props:{
    text:{
      default:"Loading..."
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  max-width: 320px !important;
  min-height: 105px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid rgb(167, 166, 166);
  box-shadow: 1px 1px 3px #888888;

  .table {
    max-width: 320px;
    max-height: 105px;

    .header {
      max-width: 320px;
      height: 20px;
      background-color: #e4e4e4;
      font-size: 11px;
      padding: 5px;
      letter-spacing: 1px;
      border-radius: 4px;
    }

    .contentTable {
      max-width: 320px;
      display: grid;
      grid-template-columns: repeat(auto-fit, 70px auto 70px);
      grid-template-areas: "images headerTitle logoImage";
      padding: 5px;
      .image {
        grid-area: images;
      }

      .headerTitle {
        grid-area: headerTitle;
        height: 20px;
        color: #00aded;
        font-size: 14px;
      }
      .logoImage {
        grid-area: logoImage;
        width: 70px;
        height: 100px;
      }
    }
  }
}
</style>
