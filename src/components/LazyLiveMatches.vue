<template>
  <div class="container">
    <p class="container__date" v-if="date">{{ date.start_at }}</p>
    <p v-if="teamName">
      {{ teamName.away_team.name }}
    </p>
    <p v-if="teamLogo" class="container__teamLogo2">
      <img :src="teamLogo.away_team.logo" alt="AwayTeam" />
    </p>
    <p v-if="result">
      {{ result.away_score.current }}:{{ result.home_score.current }}
    </p>
    <p class="container__teamLogo2" v-if="teamLogo2">
      <img :src="teamLogo2.home_team.logo" alt="HomeTeam" />
    </p>
    <p v-if="teamName2">{{ teamName2.home_team.name }}</p>
  </div>
</template>

<script>
export default {
  name: "LazyLiveMatches",

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
  &__date {
    font-size: 10px;
  }

  &__teamLogo2 {
    display: flex;
    justify-content: flex-end;
    p {
      width: 100px;
    }
  }

  img {
    width: 30px;
    height: 40px;
    object-fit: cover;

    @media (min-width: 320px) and (max-width: 375px) {
      width: 20px;
      height: 30px;
      object-fit: cover;
    }
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
