<template>
  <div class="container">
    <p v-if="item">
      {{ item.title }}
    </p>
    <p v-if="image">
      <img :src="image" alt="image" />
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyLaLigaTransfersBing",

  props: {
    item: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  p {
    padding: 5px;
    height: 50px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    color:#000000;
    text-decoration: none;

      &:visited{
      color:#000000;
      text-decoration: none;
    }

    @media (max-width: 425px) {
      font-size: 12px;
    }
    img {
      width: 90px;
      height: 70px;
      border-radius: 13px;
      padding: 10px;
      object-fit: cover;
      @media (max-width: 768px) {
        padding: 5px;
        padding: 5px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: cover
      }
    }
  }
}
</style>
