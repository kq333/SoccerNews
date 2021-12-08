<template>
  <div class="container">
    <p v-if="image2">
      <img :src="image2.media" alt="photo" />
    </p>
    <p class="container__title" v-if="title">{{ title.title }}</p>
    <p class="container__titletit" v-if="titleArt">{{ titleArt.summary }}</p>
    <p class="container__allArt" v-if="allArt"></p>
  </div>
</template>

<script>
export default {
  name: "LazyTransfersRumors",

  props: {
    image2: {
      type: String,
    },
    title: {
      type: String,
    },
    titleArt: {
      type: String,
    },
    allArt: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  img {
    border-radius: 5px;
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;

    @media (max-width: 425px) {
      max-width: 104%;
      max-height: 104%;
      object-fit: cover;
    }
  }

  &__title {
    height: 120px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 425px) {
      font-size: 0.7rem;
      height: auto;
    }
  }

  &__titletit {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    @media (max-width: 425px) {
      font-size: 0.7rem;
    }
  }

  &__allArt {
    line-height: 1.8;
    @media (max-width: 425px) {
      font-size: 0.7rem;
      padding: 5px;
    }
  }
}
</style>
