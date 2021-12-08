<template>
  <div class="container">
    <p v-if="number">
      {{ number.number }}

    </p>

    <img class="container__logoClub" v-if="logo" :src="logo.clubImage" alt="Clublogo" />
    <p v-if="clubName">{{ clubName.clubName }} </p>
    <p v-if="logo2">
      <img class="container__logoCountry"  :src="logo2.countryImage" alt="Clublogo" />
    </p>
    <p v-if="ligueName">
      {{ ligueName.competitionName }}
    </p>
    <p v-if="value">
      {{ value.marketValue }}{{ value.marketValueNumeral }}
      {{ value.marketValueCurrency }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyPaginationTable",
  props: {

    number: {
      type: Object,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
    clubName: {
      type: Object,
      required: true,
    },
    logo2: {
      type: Object,
      required: true,
    },
    ligueName: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  p {
    padding: 5px;
    }

    &__logoClub{
       width: 23px;
      height: 29px;
      display: flex;
      justify-content: center;
      align-content: center;

      @media (max-width: 767px) {
        width: 20px;
        height: 30px;
      }


    }

    &__logoCountry{
      width: 23px;
      height: 18px;
      display: flex;
      justify-content: center;
      align-content: center;

      @media (max-width: 767px) {
        width: 20px;
        height: 15px;
      }
    }

}
</style>
