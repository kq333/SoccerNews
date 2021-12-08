<template>
  <div class="container">
    <div class="header">
      <div class="header__header">
        <slot name="header">
          {{ text }}
        </slot>
      </div>
      <div class="header__line"></div>
    </div>
    <div class="displayArea">
      <slot name="displayArea"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundTemplate",

  props: {
    text: {
      type: String,
      default: "TRANSFERS",
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20px;
  max-width: 1000px;
  height: 450px;

  .header {
    color: black;
    max-width: 1000px;
    letter-spacing: 2px;
    display: grid;
    grid-template-columns: auto auto;

    &__header {
      border-bottom: 2px solid rgba(172, 255, 47, 0.466);
      @media (min-width: 320px) {
        font-size: 0.8rem;
      }
    }

    &__line {
      border-bottom: 2px solid grey;
      background-color: #fff;
    }
  }

  .displayArea {
    max-width: 1000px;
    height: auto;
    margin-top: 10px;
  }
}
</style>
