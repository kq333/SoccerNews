<template>
  <div class="container">
    <p v-if="imageLogo">
      <img :src="imageLogo.countryImage" alt="clubImage" />
    </p>
    <p v-if="playerName">{{ playerName.playerName }}</p>
    <p v-if="marketValueAtThisTime">
      {{ marketValueAtThisTime.marketValueAtThisTime }}
    </p>
    <p v-if="marketValueAtThisTimeCurrency">
      {{ marketValueAtThisTimeCurrency.marketValueAtThisTimeCurrency }}
    </p>
    <p v-if="year">{{ year.year }}</p>
    <p v-if="index">{{ index }}</p>
  </div>
</template>

<script>
export default {
  name: "LazyBestFifaPlayers",

  props: {
    index: {
      type: Object,
    },

    imageLogo: {
      type: Object,
    },
    playerName: {
      type: Object,
    },

    marketValueAtThisTime: {
      type: Object,
    },
    marketValueAtThisTimeCurrency: {
      type: Object,
    },

    year: {
      type: Object,
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
