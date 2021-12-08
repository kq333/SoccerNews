<template>
  <div class="container">
    <div class="navSocialMedia">
      <NewNavSocial />
    </div>
    <div class="navButtons">
      <NewNavButton />
    </div>
    <div class="footer">
      <NewFooter />
    </div>
    <BackgroundTemplate class="backgroundTemplate">
      <template #header>FORUMS</template>
      <template #displayArea>
        <div class="content"></div>
      </template>
    </BackgroundTemplate>
  </div>
</template>

<script>
import NewFooter from "../components/NewFooter.vue";
import NewNavButton from "../components/NewNavButton.vue";
import NewNavSocial from "../components/NewNavSocial.vue";
import BackgroundTemplate from "../components/BackgroundTemplate.vue";

export default {
  name: "MarketValue",

  components: {
    NewFooter,
    NewNavButton,
    NewNavSocial,
    BackgroundTemplate,
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;

  .navButtons {
    position: sticky;
    top: 0;
    transition: top 0.3s;
  }

  .backgroundTemplate {
    margin-top: 20px;
  }

  .content {
    max-width: 1000px;
    height: 617px;
    background-image: url("https://i1.wp.com/sacramentopress.com/wp-content/uploads/2017/09/Site-Under-Construction.jpg?ssl=1");
    background-repeat: no-repeat;
    background-size: contain, cover;
    margin: auto;
  }

  .footer {
    position: fixed;
    bottom: 0;
  }
}
</style>
