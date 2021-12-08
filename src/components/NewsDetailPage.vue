<template>
  <div class="container">
    <div class="table">
      <div class="table__header">
        <div class="table__header__date">
          <slot name="date"></slot>
        </div>
      </div>
      <div class="titleTable">
        <div class="titleTable__image">
          <slot name="image"> </slot>
        </div>
        <div class="titleTable__title">
          <slot name="title"> </slot>
        </div>
        <div class="titleTable__clubeLogo">
          <div class="titleTable__clubeLogo__mail">
            <span><i class="far fa-envelope"></i></span>
          </div>
          <div class="titleTable__clubeLogo__twitter">
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
          <div class="titleTable__clubeLogo__facebook">
            <span><i class="fab fa-facebook-square"></i></span>
          </div>
          <slot name="clubeLogo"> </slot>
        </div>
      </div>
      <div class="tableContent">
        <div class="tableContent__titleArt">
          <slot name="titleArt"> </slot>
        </div>
        <div class="tableContent__allArt">
          <slot name="allArt"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetailPage",

  setup() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;
  background-color: #fff;
  max-height: 1500px;


  @media(max-width:425px){
    height: 500px;

  }

  .table {
    max-width: 1000px;

    &__header {
      margin-top: 5px;
      max-width: 1000px;
      height: 25px;
      background-color: #e4e4e4;
      display: flex;
      align-items: center;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .titleTable {
      margin-top: 5px;
      max-width: 1000px;
      display: grid;
      grid-template-columns: 20% auto 15%;

      &__title {
        color: #00aded;

        @media (max-width: 767px) {
          font-size: 14px;
          margin-left: 8px;
          margin-top: 45px;
        }
      }

      &__image {
        .img1 {
          width: 101px;
          height: 130px;
          margin-top: -15px;

          @media (max-width: 768px) {
            width: 50px;
            height: 80px;
          }
        }
      }

      &__clubeLogo {
        display: flex;
        justify-content: flex-end;
        gap: 2px;

        &__mail {
          font-size: 20px;

          .fa-envelope {
            &:hover {
              cursor: pointer;
            }
          }
        }
        &__twitter {
          font-size: 20px;
          .fa-twitter-square {
            &:hover {
              cursor: pointer;
            }
          }
        }

        &__facebook {
          font-size: 20px;
          .fa-facebook-square {
            &:hover {
              cursor: pointer;
            }
          }
        }

        .img2 {
          width: 50px;
          height: 50px;
        }
      }
    }

    .tableContent {
      max-width: 1000px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      grid-template-areas:
        "titleArt"
        "allArt";

      &__titleArt {
        grid-area: titleArt;
        margin: auto;

        @media (max-width: 768px) {
          margin-top: 20px;
          text-align: center;
        }
      }

      &__allArt {
        grid-area: allArt;
        text-align: justify;
        margin-top: 35px;
        line-height: 1.4;
        font-size: 16px;
        height: 1200px;

        @media (max-width: 768px) {
          text-align: justify;
          font-size: 14px;
          height: 1200px
        }
      }
    }
  }
}
</style>
