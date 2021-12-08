<template>
  <div class="container">
    <div class="tableContent">
      <div class="tableContent__header">
        <slot name="header"></slot>
      </div>
      <div class="tableContent__names">
        <div class="tableContent__names__data">Date</div>
        <div class="tableContent__names__guests">Home Team</div>
        <div class="tableContent__names__space"></div>
        <div class="tableContent__names__homeTown">Guest team</div>
      </div>
      <div class="tableContent__Datas">
        <div class="tableContent__Datas__date">
          <slot name="date"></slot>
        </div>
        <div class="tableContent__Datas__TeamHosts">
          <div class="tableContent__Datas__TeamHosts__teamName">
            <slot name="teamName">{{text}} <AppLoader/></slot>
          </div>
          <div class="tableContent__Datas__TeamHosts__teamLogo">
            <slot name="teamLogo"></slot>
          </div>
        </div>
        <div class="tableContent__Datas__result">
          <slot name="result"></slot>
        </div>
        <div class="tableContent__Datas__TeamGusests">
          <div class="tableContent__Datas__TeamGusests__teamLogo">
            <slot name="teamLogo2"></slot>
          </div>
          <div class="tableContent__Datas__TeamGusests__teamName">
            <slot name="teamName2"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from '../components/AppLoader.vue'
export default {
  name: "MatchDayTable",

  components:{
    AppLoader
  },

  props:{
    text:{
      default:"Loading..."
    }

  }
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  height: auto;
  border-radius: 4px;
  border: 1px solid rgb(167, 166, 166);
  box-shadow: 1px 1px 3px #888888;
  padding: 5px;

  .tableContent {
    &__header {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background-color: #1a3151;
      color: #ffffff;
      max-width: 1000px;
      height: 28px;
      padding: 5px;
      letter-spacing: 1px;
    }

    &__names {
      padding: 5px;
      background-color: #f2f2f2;
      max-width: 1000px;
      display: grid;
      grid-template-columns: 10% auto 10% auto;
      grid-template-areas: "data guests spaces homeTown";
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      &__space {
        grid-area: spaces;
      }

      &__data {
        grid-area: data;
      }

      &__guests {
        grid-area: guests;
        display: flex;
        justify-content: flex-end;
      }

      &__homeTown {
        grid-area: homeTown;
      }
    }

    &__Datas {
      border-radius: 4px;
      background-color: #f2f2f2;
      max-width: 1000px;
      min-height: 481px;
      display: grid;
      grid-template-columns: 10% auto 10% auto;
      grid-template-areas: "date TeamHosts result TeamGusests";
      margin-top: 4px;
      padding: 5px;

      &__date {
        grid-area: date;
      }

      &__TeamHosts {
        grid-area: TeamHosts;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
        grid-template-areas: "teamName teamLogo";

        @media (min-width: 320px) {
          grid-template-columns: 75% auto;
        }

        &__teamName {
          grid-area: teamName;

          @media (min-width: 320px) {
          //  margin: auto;
          }
        }
        &__teamLogo {
          grid-area: teamLogo;
        }
      }

      &__result {
        grid-area: result;
      }

      &__TeamGusests {
        grid-area: TeamGusests;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50, 1fr));
        grid-template-areas: "teamLogo teamName";

        &__teamLogo {
          grid-area: teamLogo;
        }

        &__teamName {
          grid-area: teamName;
        }
      }
    }
  }
}
</style>
