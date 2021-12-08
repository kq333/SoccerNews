<template>
  <div class="container">
    <div class="nav">
      <div class="nav__logo">
        <img
          src="https://www.transfermarkt.co.uk/images/logo.png"
          alt="image.logo"
          class="nav__logo__image"
        />
      </div>
      <div class="nav__facebook">
        <a href="https://www.facebook.com/transfermarkt.co.uk">
        <span class="icon"><i class="fab fa-facebook"></i></span></a>
      </div>
      <div class="nav__twitter">
        <a href="https://twitter.com/TMuk_news">
        <span><i class="fab fa-twitter"></i></span></a>
      </div>
      <div class="nav__instagram">

        <a href="https://www.instagram.com/transfermarkt_official/"> <span><i class="fab fa-instagram-square"></i></span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  margin: 0;
  height: 60px;

  .nav {
    max-width: 1000px;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1000px));
    gap: 10px;
    grid-template-areas: "logo facebook twitter instagram ";

    &__logo {
      grid-area: logo;
      display: flex;
      justify-content: flex-start;
      padding: 10px;

      &__image {
        max-width: 100px;
      }
    }

    &__facebook {
      grid-area: facebook;
      font-size: 34px;
      display: flex;
      justify-content: flex-end;
      padding: 10px;

      a{
         color:rgba(156, 154, 154, 0.932);
        &:visited{
         color:rgba(156, 154, 154, 0.932);
      }
      &:hover{
        cursor:pointer;
        color:#1a3151 ;
      }
      }
    }
    &__twitter {
      grid-area: twitter;
      font-size: 34px;
      display: flex;
      justify-content: flex-end;
      padding: 10px;

      a{
         color:rgba(156, 154, 154, 0.932);
        &:visited{
         color:rgba(156, 154, 154, 0.932);
      }
      &:hover{
        cursor:pointer;
        color:#1a3151;
      }
      }
    }

    &__instagram {
      grid-area: instagram;
      font-size: 34px;
      display: flex;
      justify-content: flex-end;
      padding: 10px;


      a{
         color:rgba(156, 154, 154, 0.932);
        &:visited{
         color:rgba(156, 154, 154, 0.932);
      }
      &:hover{
        cursor:pointer;
        color:#1a3151;
      }
      }

    }
  }
}
</style>
