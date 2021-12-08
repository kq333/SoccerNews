<template>
  <div class="carusel" :class="{ start: classProps == true }">
    <p>
      <img :src="item" alt="Photo" />
    </p>
  </div>
</template>

<script>
export default {
  name: "LazyCarusel",

  props: {
    classProps: {
      type: String,
    },
    item: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.carusel {
  .start {
    animation-name: fade;
    animation-duration: 1.3s;
  }
  p {
    img {
      height: 355px;
      max-width: 100%;
      max-height: 100%;
      border-radius: 5px;
      object-fit: cover;

      @keyframes fade {
        from {
          opacity: 0.4;
        }
        to {
          opacity: 1;
        }
      }

      @media (max-width: 425px) {
        height: 70%;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
