<template>
  <div class="container">
    <p v-if="name">
      {{ name.clubName }}
    </p>
    <div v-if="logo">
      <img :src="logo.clubImage" alt="clubLogo" />
    </div>
    <p v-if="matches">
      {{ matches.matches }}
    </p>
    <p v-if="pts">
      {{ pts.points }}
    </p>
    <p v-if="index">{{ index }}</p>
  </div>
</template>

<script>
export default {
  name: "LazyPremierLeague2",

  props: {
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
    index: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
p {
  padding: 5px;
  img {
    width: 20px;
    height: 30px;
  }
}
</style>
