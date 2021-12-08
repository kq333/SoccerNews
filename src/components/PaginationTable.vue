<template>
  <div class="container">
    <div class="table">
      <div class="table__header">
        <div class="table__header__nr">#</div>
        <div class="table__header__club">Club</div>
        <div class="table__header__competition">Competition</div>
        <div class="table__header__marketValue">Market Value</div>
      </div>
      <div class="tableContent">
        <div class="tableContent__number">
          <slot name="number"></slot>
        </div>
        <div class="tableContent__club">
          <div class="tableContent__club__logo">
            <slot name="logo"> </slot>
          </div>
          <div class="tableContent__club__clubName">
            <slot name="clubName">{{ text }} <AppLoader /></slot>
          </div>
        </div>
        <div class="tableContent__competition">
          <div class="tableContent__competition__logo2">
            <slot name="logo2"> </slot>
          </div>
          <div class="tableContent__competition__ligueName">
            <slot name="ligueName"></slot>
          </div>
        </div>
        <div class="tableContent__competition__value">
          <slot name="value"> </slot>
        </div>
      </div>
      <div class="table__buttons">
        <div class="table__buttons__content">
          <div class="table__buttons__content__one">
            <slot name="one"></slot>
          </div>
          <div class="table__buttons__content__two">
            <slot name="two"></slot>
          </div>
          <div class="table__buttons__content__three">
            <slot name="three"></slot>
          </div>
          <div class="table__buttons__content__four">
            <slot name="four"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "../components/AppLoader.vue";
export default {
  name: "PaginationTable",

  props: {
    text: {
      default: "Loading...",
    },
  },

  components: {
    AppLoader,
  },

  setup() {},
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;

  @media (max-width: 767px) {
    padding: 5px;
  }

  .table {
    max-width: 1000px;
    height: 955px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid rgb(167, 166, 166);
    box-shadow: 1px 1px 3px #888888;
    margin: auto;
    position: relative;

    @media (max-width: 768px) {
      min-height: 110vh;
      bottom: 60px;
    }

    &__header {
      height: 50px;
      background-color: #f2f2f2;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      display: grid;
      grid-template-columns: 20px 400px auto 150px;

      @media (max-width: 425px) {
        grid-template-columns: 20px 90px auto 60px;
        font-size: 0.8rem;
      }

      &__nr {
        margin: auto;
        font-weight: 600;
      }

      &__club {
        display: flex;
        align-items: center;
        font-weight: 600;
      }

      &__competition {
        display: flex;
        align-items: center;
        font-weight: 600;
      }

      &__marketValue {
        display: flex;
        align-items: center;
        font-weight: 600;
      }
    }

    .tableContent {
      max-width: 1000px;
      height: 88%;
      display: grid;
      grid-template-columns: 20px 400px auto 150px;
      background-color: #f6f6f6;
      margin-top: 5px;

      @media (max-width: 767px) {
        grid-template-columns: 20px 90px auto 60px;
        font-size: 0.5rem;
      }

      &__club {
        display: grid;
        grid-template-columns: 10% auto;

        @media (max-width: 767px) {
          grid-template-columns: 10px 40px auto auto;
        }

        &__logo {
          margin: auto;
        }

        &__clubName {
          align-items: center;

          @media (max-width: 767px) {
            font-size: 0.7rem;
            margin-left: 8px;
          }
        }
      }

      &__competition {
        display: grid;
        grid-template-columns: 10% auto;

        @media (max-width: 767px) {
          grid-template-columns: 8% 160px;
        }

        @media (width: 768px) {
          grid-template-columns: 20% auto;
        }

        @media (width: 320px) {
          grid-template-columns: 21% auto;
        }

        &__ligueName {
          align-items: center;

          @media (max-width: 767px) {
            font-size: 0.6rem;
            margin: auto;
          }

          @media (min-width: 375px) {
            margin-left: 15px;
          }
        }

        &__logo2 {
          margin: auto;
        }

        &__value {
          @media (max-width: 767px) {
            font-size: 0.7rem;
          }
        }
      }
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
      padding: 5px;

      &__content {
        width: 120px;
        height: 35px;
        color: #ccc;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
        gap: 5px;

        &__one {
          margin: auto;
          background-color: #1d75a3;
          padding: 10px;

          &:hover {
            cursor: pointer;
            background-color: #1c64a2;
          }
        }
        &__two {
          margin: auto;
          background-color: #1d75a3;
          padding: 10px;
          &:hover {
            cursor: pointer;
            background-color: #1c64a2;
          }
        }
        &__three {
          margin: auto;
          background-color: #1d75a3;
          padding: 10px;
          &:hover {
            cursor: pointer;
            background-color: #1c64a2;
          }
        }
        &__four {
          margin: auto;
          background-color: #1d75a3;
          padding: 10px;
          &:hover {
            cursor: pointer;
            background-color: #1c64a2;
          }
        }
      }
    }
  }
}
</style>
