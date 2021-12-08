<template>
  <div class="container">
    <div class="header">
      <slot name="header">tabela</slot>
    </div>
    <div class="table">
      <div class="table__names">
        <div class="table__names__nr">#</div>
        <div class="table__names__clubeName">
          <slot name="club"></slot>
        </div>
        <div class="table__names__matches">
          <slot name="Playername"></slot>
        </div>
        <div class="table__names__gd">
          <slot name="MarketValue"></slot>
        </div>
        <div class="table__names__pts">
          <slot name="year"></slot>
        </div>
      </div>
      <div class="table__content">
        <div class="table__content__nr">
          <slot name="index"> </slot>
        </div>
        <div class="table__content__clubeName">
          <div class="table__content__clubeName__logo">
            <slot name="logo"> {{ text }} </slot>
          </div>
          <div class="table__content__clubeName__name">
            <slot name="name"></slot>
          </div>
        </div>
        <div class="table__content__matches">
          <slot name="matches"><AppLoader /></slot>
        </div>
        <div class="table__content__gd">
          <slot name="gd"></slot>
        </div>
        <div class="table__content__pts">
          <slot name="pts"></slot>
        </div>
      </div>
    </div>
    <div class="table__fulltable">
      <div class="table__fulltable__content">
        <slot name="content"> </slot>
      </div>
      <div class="table__fulltable__icon"></div>
    </div>
  </div>
</template>

<script>
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "LigueTable",

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
  min-width: 287px;
  border-radius: 4px;
  border: 1px solid rgb(167, 166, 166);
  box-shadow: 1px 1px 3px #888888;
  padding: 5px;

  .header {
    background-color: #1a3151;
    color: #ffffff;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 5px;
    letter-spacing: 1px;
  }

  .table {
    &__names {
      border-radius: 4px;
      padding: 5px;
      display: grid;
      grid-template-columns: 9% auto 25% auto 18%;
      grid-template-areas: "nr clubeName matches gd pts";
      background-color: #f3f3f3;

      &__nr {
        grid-area: nr;
        display: flex;
        justify-content: center;
      }

      &__clubeName {
        grid-area: clubeName;
        display: flex;
        justify-content: flex-start;

        @media (min-width: 1024px) {
          margin-right: 40px;
        }

        @media (width: 320px) {
          margin-right: 30px;
        }
        @media (width: 375px) {
          margin-right: 40px;
        }
        @media (width: 425px) {
          margin-right: 50px;
        }
        @media (width: 768px) {
          margin-right: 50px;
        }
      }

      &__matches {
        grid-area: matches;
      }

      &__gd {
        grid-area: gd;
        display: flex;
        justify-content: center;
      }

      &__pts {
        grid-area: pts;
        display: flex;
        justify-content: flex-end;
        @media (min-width: 1024px) {
          margin-left: 20px;
        }
        @media (width: 320px) {
          margin-right: 5px;
        }
        @media (width: 375px) {
          margin-right: 10px;
        }
        @media (width: 425px) {
          margin-right: 10px;
        }
        @media (width: 768px) {
          margin-right: 10px;
        }
      }
    }

    &__content {
      height: 460px;
      padding: 5px;
      display: grid;
      grid-template-columns: 9% auto 25% 5% 10%;
      grid-template-areas: "nr clubeName matches gd pts";

      &__nr {
        grid-area: nr;
      }

      &__clubeName {
        grid-area: clubeName;
        display: grid;
        grid-template-columns: 18% auto;
        grid-template-areas: "logo name";

        &__logo {
          grid-area: logo;
        }

        &__name {
          grid-area: name;
        }
      }

      &__matches {
        grid-area: matches;
      }

      &__gd {
        grid-area: gd;
      }

      &__pts {
        grid-area: pts;
      }
    }

    &__fulltable {
      display: grid;
      grid-template-columns: 95% auto;
      grid-template-areas: "content icon";
      background-color: #f3f3f3;
      border-radius: 4px;
      padding: 4px;

      &__content {
        grid-area: content;
        display: flex;
        justify-content: flex-end;
        color: #1d75a3;
        background-color: #f3f3f3;
        height: 14px;
      }

      &__icon {
        grid-area: icon;
        color: #1d75a3;
      }
    }
  }
}
</style>
