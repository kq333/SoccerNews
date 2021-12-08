<template>
  <div class="container">
    <div class="table">
      <div class="table__header">
        <slot name="header">adrian fff</slot>
      </div>
      <div class="tableContent">
        <div class="tableContent__image">
          <slot name="image">
            <img
              src="https://busytape.com/wp-content/uploads/2018/05/Pele-Biography.jpg"
              alt=""
            />
          </slot>
        </div>
        <div class="tableContent__details">
          <div class="tableContent__age">
            <slot name="age">35</slot>
          </div>
          <div class="tableContent__position">
            <slot name="position">sassas</slot>
          </div>
          <div class="tableContent__contractUntil">
            <slot name="contractUntil">568777</slot>
          </div>
          <div class="tableContent__marketValue">
            <slot name="marketValue">30,00 mil $</slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerDetails",
};
</script>

<style scoped lang="scss">
.container {
  img {
    width: 100px;
    height: 130px;
  }

  max-width: 320px;

  .table {
    max-width: 320px;

    background-color: #fff;

    &__header {
      color: #1d75a3;
      background-color: #fff;
      font-size: 20px;
    }

    .tableContent {
      max-width: 320px;
      display: grid;
      grid-template-columns: 100px 220px;
      grid-template-areas: "images  details ";
      margin-top: 2px;


      &__image {
        grid-area: images;
      }

      &__details {
        grid-area: details;
        display: grid;
        grid-auto-columns: repeat(auto-fit, minmax(50px, 1fr));
        grid-template-areas:
          "age"
          "positions"
          "contractUntil"
          "marketValue";
        padding: 5px;

        &__age {
          grid-area: age;
        }

        &__position {
          grid-area: positions;
        }
        &__contractUntil {
          grid-area: contractUntil;
        }
        &__marketValue {
          grid-area: marketValue;
        }
      }
    }
  }
}
</style>
