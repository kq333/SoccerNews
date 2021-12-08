<template>
  <div class="container">
    <div class="square">
      <div class="square__image">
        <slot name="imageCharacter">{{ text }} <AppLoader /> </slot>
        <div class="squareTitleGroupe">
          <div class="squareTitleGroupe__content">
            <div class="squareTitleGroupe__content__logo">
              <img
                class="imageLogo"
                src="https://tmssl.akamaized.net//images/startseite/spotlightDefault.png"
                alt=""
              />
            </div>
            <div class="squareTitleGroupe__content__title">
              <slot name="title"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="square__buttons">
      <div class="square__buttons__btn1">
        <slot name="button1"></slot>
      </div>
      <div class="square__buttons__btn2">
        <slot name="button2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "../AppLoader.vue";
export default {
  name: "CaruseleApp",

  components: {
    AppLoader,
  },

  props: {
    text: {
      default: "Loading...",
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 630px;
  max-height: 370px;
  box-sizing: content-box;

  .square {
    max-width: 630px;
    height: 370px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid rgb(167, 166, 166);
    box-shadow: 1px 1px 3px #888888;
    padding: 5px;
    box-sizing: border-box;

    @media (max-width: 425px) {
      height: 185px;
    }

    &__image {
      max-width: 630px;
      height: 370px;
    }

    .squareTitleGroupe {
      position: absolute;
      margin-top: -116px;
      padding: 5px;
      max-width: 630px;
      height: 125px;

      &__content {
        display: grid;
        grid-template-columns: 60px 80%;
        grid-template-areas: "logo title ";
        gap: 20px;
        max-width: 630px;

        @media (width: 425px) {
          margin-top: 60px;
          grid-template-columns: 30px 80%;
        }
        @media (width: 320px) {
          margin-top: 70px;
          grid-template-columns: 30px 80%;
        }
        @media (width: 375px) {
          margin-top: 70px;
          grid-template-columns: 30px 80%;
        }

        &__title {
          grid-area: title;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          align-items: center;
          @media (width: 320px) {
            font-size: 10px;
          }
          @media (min-width: 375px) and (max-width: 425px) {
            font-size: 11px;
          }
        }

        &__logo {
          grid-area: logo;
          max-width: 70px;
          max-height: 70px;

          .imageLogo {
            max-width: 70px;
            max-height: 70px;
            @media (max-width: 425px) {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }

    &__buttons {
      max-width: 620px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1000px));
      grid-template-areas: "btn1 btn2";
      position: absolute;
      margin-top: -260px;

      @media only screen and (min-width: 375px) and (max-width: 425px) {
        max-width: 425px;
        margin-top: -110px;
      }
      @media (width: 320px) {
        max-width: 425px;
        margin-top: -130px;
      }

      &__btn1 {
        grid-area: btn1;
      }

      &__btn2 {
        grid-area: btn2;
      }
    }
  }
}
</style>
