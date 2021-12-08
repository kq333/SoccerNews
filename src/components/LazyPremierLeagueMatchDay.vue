<template>
  <div class="container">
    <p class="container__items" v-if="item">
      {{ item.awayClubName }}
    </p>
    <p class="container__teamLogo2" v-if="teamLogo">
      <img :src="teamLogo.awayClubImage" alt="awayClubImage" />
    </p>
    <p v-if="teamLogo2">
      <img :src="teamLogo2.homeClubImage" alt="homeClubImage" />
    </p>
    <p class="container__items" v-if="teamName2">
      {{ teamName2.homeClubName }}
    </p>
    <p v-if="result">
      {{ result.result }}
    </p>
    <p class="container__items" v-if="data">
      {{ data.matchDate }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyPremierLeagueMatchDay",

  props: {
    item: {
      type: String,
    },
    teamLogo: {
      type: String,
    },
    teamLogo2: {
      type: String,
    },
    teamName2: {
      type: String,
    },
    result: {
      type: String,
    },
    data: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container {


  &__teamLogo2 {
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 30px;
    height: 40px;
    object-fit: cover;
  }
  p {
    @media (min-width: 375px) and (max-width: 425px) {
      font-size: 0.6rem;
    }
    @media (width: 320px) {
      font-size: 0.5rem;
    }
  }
}
</style>
