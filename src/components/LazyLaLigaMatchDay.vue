<template>
  <div class="container">
    <p v-if="date">
      {{ date.matchDate }}
    </p>
    <p v-if="teamName">
      {{ teamName.homeClubName }}
    </p>
    <p class="container__teamLogo2" v-if="teamLogo">
      <img :src="teamLogo.homeClubImage" alt="CeltaLogo" />
    </p>
    <p v-if="teamLogo2">
      <img :src="teamLogo2.awayClubImage" alt="CadizLogo" />
    </p>
    <p v-if="teamName2">
      {{ teamName2.awayClubName }}
    </p>
    <p v-if="result">
      {{ result.result }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyLaLigaMatchDay",

  props: {
    date: {
      type: String,
    },
    teamName: {
      type: String,
    },
    teamLogo: {
      type: String,
    },
    result: {
      type: String,
    },
    teamLogo2: {
      type: String,
    },
    teamName2: {
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
