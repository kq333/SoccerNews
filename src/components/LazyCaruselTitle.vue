<template>
  <div class="container">
    <p v-if="item">{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: "LazyCaruselTitle",

  props: {
    item: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
p {
  color: #ffffff;
}
</style>
