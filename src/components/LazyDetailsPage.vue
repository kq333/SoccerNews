<template>
  <div class="container">
    <p v-if="image">
      <img :src="image.thb" alt="image" />
    </p>
    <p class="container__title" v-if="title">{{ title.cap }}</p>
    <p class="container__titletit" v-if="titleArt">
      {{ titleArt.tit }}
    </p>
    <p class="container__allArt" v-if="allArt">
      <span v-html="allArt.con"> </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyDetailsPage",

  props: {
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    titleArt: {
      type: String,
      require: true,
    },
    allArt: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  img {
    border-radius: 5px;
    @media (max-width: 425px) {
      max-width: 104%;
      max-height: 104%;
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
