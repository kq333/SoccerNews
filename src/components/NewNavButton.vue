<template>
  <div class="container" :class="{ 'container--hide': active }">
    <div class="buttons">
      <router-link :to="{ name: 'Home' }" class="buttons__home"
        ><span><i class="fas fa-home"></i></span
      ></router-link>
      <router-link :to="{ name: 'Video' }" class="buttons__video"
        >VIDEOS</router-link
      >
      <router-link :to="{ name: 'MarketValue' }" class="buttons__marketValue"
        >MARKET VALUES</router-link
      >
      <router-link :to="{ name: 'Forum' }" class="buttons__forum"
        >FORUM</router-link
      >
      <router-link :to="{ name: 'LiveResults' }" class="buttons__live"
        >LIVE</router-link
      >
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", hideBar);
    });

    const active = ref(false);

    function hideBar() {
      if (
        window.scrollY > 110 &&
        window.matchMedia("(max-width: 767px)").matches
      ) {
        active.value = true;
      } else {
        active.value = false;
      }
    }

    return { active, hideBar };
  },
};
</script>

<style scoped lang="scss">
body {
  font-size: 16px;
}

.container {
  max-width: 1000px;
  margin: 0;
  min-height: 60px;
  background-color: #1a3151;
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &--hide {
    display: none;
  }

  .buttons {
    max-width: 1000px;
    display: grid;
    grid-template-areas: "home video  marketValue forum live";
    grid-template-columns: repeat(4, 200px);

    &__home {
      grid-area: home;
      color: #ddd;

      a {
        &:visited {
          color: #ddd;
        }
      }

      i {
        font-size: 18px;
      }
      &:hover {
        cursor: pointer;
        color: #ddd;
      }
    }

    &__video {
      grid-area: video;
      color: #ddd;

      a {
        &:visited {
          color: #ddd;
        }
      }

      &--color {
        color: red;
      }

      &:hover {
        cursor: pointer;
        color: #d2d2d2;
      }
      &:link {
        text-decoration: none;
      }
    }

    &__marketValue {
      grid-area: marketValue;
      color: #ddd;
      &:link {
        text-decoration: none;
      }
      a {
        &:visited {
          color: #ddd;
        }
      }

      &:hover {
        cursor: pointer;
        color: #ddd;
      }
    }
    &__forum {
      grid-area: forum;
      color: #ddd;
      &:link {
        text-decoration: none;
      }

      a {
        &:visited {
          color: #ddd;
        }
      }

      &:hover {
        cursor: pointer;
        color: #ddd;
      }
    }
    &__live {
      grid-area: live;
      color: #ddd;

      &:link {
        text-decoration: none;
      }

       a {
        &:visited {
          color: #ddd;
        }
      }
      &:hover {
        cursor: pointer;
        color: #ddd;
      }
    }

    @media (max-width: 320px) {
      font-size: 1.1rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 10px;
      gap: 10px;
    }

    @media (min-width: 321px) and (max-width: 425px) {
      font-size: 1rem;
      display: inline-flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;
    }

    @media (min-width: 768px) and (max-width: 817px) {
      font-size: 1.2rem;
      display: inline-flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 25px;
      padding: 10px;
    }
  }
}
</style>
