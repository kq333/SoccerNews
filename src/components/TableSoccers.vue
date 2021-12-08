<template>
  <div class="container">
    <div class="table">
      <div class="table__header">
        <slot name="header"></slot>
      </div>

      <div class="tableName">
        <div class="tableName__soccerName">
          <slot name="soccerName"></slot>
        </div>
        <div class="tableName__clubLogo">
          <slot name="clubLogo"></slot>
        </div>
        <div class="tableName__matches">
          <slot name="matches"></slot>
        </div>
      </div>
      <div class="contentTable">
        <div class="contentTable__soccerImage">
          <slot name="soccerImage"></slot>
        </div>
        <div class="contentTable__soccerPosition">
          <div class="contentTable__soccerPosition__name">
            <slot name="name"></slot>
          </div>
          <div class="contentTable__soccerPosition__position">
            <slot name="position"></slot>
          </div>
        </div>
        <div class="contentTable__clubLogoLogo">
          <slot name="clubLogoLogo"></slot>
        </div>
        <div class="contentTable__Described">
          <slot name="Described"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSoccers",
};
</script>

<style scoped lang="scss">
.container {
  max-width: 326px;
  height: auto;

  .table {
    max-width: 326px;
    height: auto;

    &__header {
      max-width: 326px;
      height: 26px;
      background-color: #1a3151;
      color: #ffffff;
      padding: 5px;
      letter-spacing: 1px;
    }

    .tableName {
      max-width: 326px;
      max-height: 24px;
         background-color: #f2f2f2;
      padding: 5px;
      font-size: 14px;
      font-weight: 400;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      grid-template-areas: "soccerName clubLogo matches ";

      &__soccerName {
        grid-area: soccerName;
      }

      &__clubLogo {
        grid-area: clubLogo;
      }

      &__matches {
        grid-area: matches;
      }
    }

    .contentTable {
      max-width: 326px;
      height: 24px;
      background-color: #f2f2f2;
      padding: 5px;
      font-size: 14px;
      font-weight: 400;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      grid-template-areas: "soccerImage soccerPosition clubLogoLogo Described  ";

      &__soccerImage {
        grid-area: soccerImage;
      }

      &__soccerPosition {
        grid-area: soccerPosition;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
        grid-template-areas: "names positions  ";

        &__name {
          grid-area: names;
        }

        &__position {
          grid-area: positions;
          margin-top: 25px;
          margin-left: -50px;
        }
      }

      &__clubLogoLogo {
        grid-area: clubLogoLogo;
      }

      &__Described {
        grid-area: Described;
      }
    }
  }
}
</style>
