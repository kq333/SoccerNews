<template>
  <div class="container">
    <p v-if="name">
      {{ name.clubName }}
    </p>
    <p v-if="logo">
      <img :src="logo.clubImage" alt="clubLogo" />
    </p>
    <p v-if="matches">
      {{ matches.matches }}
    </p>
    <p v-if="pts">
      {{ pts.points }}
    </p>
    <p v-if="index">
      {{ index }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyPremierLeague",

  props: {
    index: {
      type: Object,
    },
    name: {
      type: Object,
    },
    logo: {
      type: Object,
    },
    matches: {
      type: Object,
    },
    pts: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
p {
  img {
    width: 20px;
    height: 30px;
  }
}
</style>
