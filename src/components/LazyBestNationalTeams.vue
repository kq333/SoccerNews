<template>
  <div class="container">
    <p v-if="item">{{ item.countryName }}</p>
    <p v-if="ImageLogo"><img :src="ImageLogo.countryImage" alt="logo" /></p>
    <p v-if="rank">{{ rank.rank }}</p>
    <p v-if="confederation">{{ confederation.confederation }}</p>
    <p v-if="totalPoint">{{ totalPoint.totalPoints }}</p>
  </div>
</template>

<script>
export default {
  name: "LazyComponent.vue",

  props: {
    item: {
      type: String,
    },
    ImageLogo: {
      type: String,
    },
    rank: {
      type: Number,
    },
    confederation: {
      type: String,
    },
    totalPoint: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 320px;

  p {
    img {
      height: 20px;
      width: 30px;
    }
  }
}
</style>
