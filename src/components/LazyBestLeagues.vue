<template>
  <div class="container">
    <p v-if="item">{{ item.competitionName }}</p>
    <p v-if="ImageLogo">
      <img :src="ImageLogo.countryImage" alt="imageLogo" />
    </p>
    <p v-if="marketValue">{{ marketValue.marketValue }} €</p>
    <p v-if="marketValueNumeral">{{ marketValueNumeral.marketValueNumeral }}</p>
  </div>
</template>

<script>
export default {
  name: "LazyBestLeagues",

  props: {
    item: {
      type: String,
    },
    ImageLogo: {
      type: String,
    },
    marketValue: {
      type: String,
    },
    marketValueNumeral: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
p {
  img {
    height: 20px;
    width: 30px;
  }
}
</style>
