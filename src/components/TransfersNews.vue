<template>
  <div class="container">
    <div class="table">
      <div class="table__header">
        <slot name="header"></slot>
      </div>
      <div class="table__content">
        <div class="table__content__logo">
          <slot name="logo"></slot>
        </div>
        <div class="table__content__text">
          <slot name="text"> {{ text }} <AppLoader /></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "../components/AppLoader.vue";
export default {
  name: "TransfersNews",

  components: {
    AppLoader,
  },

  props: {
    text: {
      default: "Loading...",
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 490px;
  border-radius: 4px;
  border: 1px solid rgb(167, 166, 166);
  box-shadow: 1px 1px 3px #888888;
  padding: 5px;

  .table {
    max-width: 490px;

    &__header {
      height: 25px;
      max-width: 490px;
      background-color: #1a3151;
      letter-spacing: 2px;
      color: #ffffff;
      padding: 5px;
      letter-spacing: 1px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &__content {
      max-width: 490px;
      display: grid;
      grid-template-columns: 20% auto;
      grid-template-areas: "logo texts";

      &__logo {
        grid-area: logo;
      }

      &__text {
        grid-area: texts;
      }
    }
  }
}
</style>
