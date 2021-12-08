<template>
  <div class="container">
    <div class="header">
      <slot name="header">
        <h3>{{ header }}</h3>
      </slot>
    </div>
    <div class="positionName">
      <div class="positionName__player">player/position</div>
      <div class="positionName__club">club</div>
      <div class="positionName__transfer">transfer fee</div>
    </div>
    <div>
      <div class="mainContainer">
        <div class="playersDetails">
          <div class="playersDetails__image">
            <slot name="image" :items="items" :peoples="peoples"> </slot>
          </div>
          <div class="playersDetails__name">
            <slot name="playerName" :items="items" :peoples="peoples"> </slot>
          </div>
          <div class="playersDetails__position">
            <slot name="playerPosition">
              <p>{{ playerPosition }}</p>
            </slot>
          </div>
        </div>
        <div class="playersDetails__clubLogo">
          <div class="playersDetails__clubLogo__old">
            <slot name="clubLogoOld">
              {{ clubLogoOld }}
            </slot>
          </div>
          <div class="playersDetails__clubLogo__new">
            <slot name="clubLogoNew">
              {{ clubLogoNew }}
            </slot>
          </div>
        </div>
        <div class="playersDetails__transfer">
          <slot name="playersDetailsTransfer">
            {{ playersDetailsTransfer }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransfersComponent",
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;

  .header {
    max-width: 1000px;
    height: 30px;
    background: #1a3151;
    color: #fff;
    padding: 5px;
    text-align: center;

    h3 {
      height: 30px;
      padding: 5px;
      color: #fff;
    }
  }

  .positionName {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));

    &__club {
      text-align: center;
    }
    &__transfer {
      text-align: center;
    }
  }

  .mainContainer {
    margin-top: 10px;
    display: grid;
    grid-template-areas: " playersDetails clubLogo transfer ";
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    max-width: 1000px;
    background: #f3f3f3;

    .playersDetails {
      grid-area: playersDetails;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(37px, 127px));
      grid-template-areas:
        "image name "
        "image position";

      &__image {
        grid-area: image;

        img {
          max-width: 37px;
          max-height: 47px;
        }
      }

      &__name {
        grid-area: name;
        font-size: 16px;
        color: #1d75a3;
        padding: 5px;
        text-align: center;
      }

      &__position {
        grid-area: position;
        font-size: 12px;
        font-weight: 700;
        color: black;
        padding: 5px;
        text-align: center;
      }

      &__clubLogo {
        grid-area: clubLogo;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25px 50px));
        grid-template-areas: "old new";
        margin: auto;

        &__old {
          grid-area: old;
          opacity: 0.3;
          width: 20px;
          height: 20px;
        }
        &__new {
          grid-area: new;
          margin-right: 5px;
        }
      }
      &__transfer {
        grid-area: transfer;
        margin: auto;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 5px;
  }
}
</style>
