<template>
  <div class="container">
    <p v-if="header">
      {{ header.newsDate }}
    </p>
    <p v-if="playerImage">
      <img :src="playerImage.newsFirstImage" alt="imagePlayer" />
    </p>
    <p class="container__newsTeaser" v-if="headerTitle">
      {{ headerTitle.newsTeaser }}
    </p>
    <p class="container__newsContent" v-if="contentTitle">
      {{ contentTitle.newsHeadline }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyTicker",

  props: {
    header: {
      type: String,
    },
    playerImage: {
      type: String,
    },
    headerTitle: {
      type: String,
    },
    contentTitle: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 320px;

  &__newsContent {
    max-width: 320px !important;
    font-size: 14px;
    padding: 3px;
  }

  &__newsTeaser {
    font-size: 10px;
    padding: 3px;
    color: #00aded;
  }

  p {
    img {
      width: 50px;
      height: 70px;
      object-fit: cover;
    }
  }
}
</style>
