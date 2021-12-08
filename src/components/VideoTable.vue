<template>
  <div class="container">
    <div class="table">
      <div class="content">
        <div class="content__date">
          <slot name="date"></slot>
        </div>
        <div class="content__title">
          <slot name="title"></slot>
        </div>
        <div class="content__video">
          <slot name="video">{{ text }} <AppLoader /></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "../components/AppLoader.vue";
export default {
  name: "VideoTable",

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
  max-width: 1000px;


  .table {
    .content {
      display: grid;
      grid-template-columns: 15% 25% auto;
      grid-template-areas: "date title video";

      @media (max-width: 425px) {
        font-size: 0.7rem;
        grid-template-areas: "video";
        grid-template-columns: auto;

        &__date {
          display: none;
        }
        &__title {
          display: none;
        }
      }

      &__date {
        grid-area: date;
        text-align: center;
      }
      &__title {
        margin: auto;
        grid-area: title;
      }
      &__video {
        grid-area: video;

        @media (max-width: 425px) {
          margin: auto;
        }
      }
    }
  }
}
</style>
