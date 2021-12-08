<template>
  <div class="container" :class="{ 'container--hide': active }">
    <div class="footer">
      <div class="footer__logo">
        <img
          src="https://www.transfermarkt.co.uk/images/logo.png"
          alt="image.logo"
          class="footer__logo__image"
        />
      </div>
      <div class="footer__privacy">
        <p>
          <a href="https://www.transfermarkt.co.uk/intern/web/datenschutz"
            >Privacy |</a
          >
        </p>
      </div>
      <div class="footer__faq">
        <p>
          <a href="https://www.transfermarkt.co.uk/intern/faq">FAQ |</a>
        </p>
      </div>
      <div class="footer__team">
        <p>
          <a href="https://www.transfermarkt.co.uk/intern/tmteam"
            >The TM Team |</a
          >
        </p>
      </div>
      <div class="footer__termUse">
        <p>
          <a href="https://www.transfermarkt.co.uk/intern/anb"
            >Terms of use |</a
          >
        </p>
      </div>
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
        window.matchMedia("(max-width: 768px)").matches
      ) {
        active.value = true;
      } else {
        active.value = false;
      }
    }

    return { hideBar, active };
  },
};
</script>

<style scoped lang="scss">
body {
  font-size: 16px;
}
.container {
  max-width: 1000px;
  margin: auto;

  &--hide {
    display: none;
  }

  .footer {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    min-height: 60px;
    padding: 10px;
    background: #1a3151;
    color: #fff;
    max-width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1000px));
    grid-template-areas: "logo privacy faq team termUse";

    @media (max-width: 475px) {
      font-size: 0.5rem;
      height: 0.3rem;
    }

    &__logo {
      grid-area: logo;
      margin-top: 21px;
      max-width: 60px;

      &__image {
        max-width: 60px;
        @media (max-width: 475px) {
          height: 0.9rem;
        }
      }
    }
    &__privacy {
      grid-area: privacy;
      padding: 15px;

      a {
        text-decoration: none;
        color: #fff;
        &:visited {
          color: #fff;
        }
        &:hover {
          cursor: pointer;
          color: #ddd;
        }
      }
    }
    &__faq {
      grid-area: faq;
      padding: 15px;
      a {
        text-decoration: none;
        color: #fff;
        &:visited {
          color: #fff;
        }
        &:hover {
          cursor: pointer;
          color: #ddd;
        }
      }
    }
    &__team {
      grid-area: team;
      padding: 15px;
      a {
        text-decoration: none;
        color: #fff;
        &:visited {
          color: #fff;
        }
        &:hover {
          cursor: pointer;
          color: #ddd;
        }
      }
    }
    &__termUse {
      grid-area: termUse;
      padding: 15px;
      a {
        text-decoration: none;
        color: #fff;
        &:visited {
          color: #fff;
        }
        &:hover {
          cursor: pointer;
          color: #ddd;
        }
      }
    }
  }
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
}
</style>
