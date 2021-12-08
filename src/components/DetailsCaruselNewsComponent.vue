<template>
  <div class="container">
    <div class="navSocialMedia">
      <NewNavSocial />
    </div>
    <div class="navButtons">
      <NewNavButton />
    </div>

    <div class="table">
      <div class="Table__one">
        <NewsDetailPage>
          <template #image>
            <p v-for="(item, index) in items" :key="index">
              <LazyDetailsPage :image="item" />
            </p>
          </template>
          <template #title>
            <p v-for="(item, index) in items" :key="index">
              <LazyDetailsPage :title="item" />
            </p>
          </template>
          <template #titleArt>
            <p v-for="(item, index) in items" :key="index">
              <LazyDetailsPage :titleArt="item" />
            </p>
          </template>
          <template #allArt>
            <p v-for="(item, index) in items" :key="index">
              <LazyDetailsPage :allArt="item" />
            </p>
          </template>
        </NewsDetailPage>
      </div>
    </div>
    <div class="footer">
      <NewFooter />
    </div>
  </div>
</template>

<script>
import NewsDetailPage from "../components/NewsDetailPage.vue";
import NewFooter from "../components/NewFooter.vue";
import NewNavButton from "../components/NewNavButton.vue";
import NewNavSocial from "../components/NewNavSocial.vue";
import LazyDetailsPage from "../components/LazyDetailsPage.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "DetailsCaruselNews",

  components: {
    NewsDetailPage,
    NewFooter,
    NewNavButton,
    NewNavSocial,
    LazyDetailsPage,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    onMounted(() => {
      store.dispatch("newsCarusel");
    });

    const store = useStore();
    const items = ref(null);
    const getId = [props].map((item) => item.id);
    const newsCarusel = computed(() => store.state.NewsCarusel[props.id]);
    items.value = [newsCarusel.value];

  console.log(props)

    return { store, newsCarusel, getId, items };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;
  box-sizing: content-box;

  .navButtons {
    position: sticky;
    top: 0;
    transition: top 0.3s;
    z-index: 2;
  }

  .line {
    margin-top: 20px;
    height: 87vh;
    overflow-y: scroll;
  }

  .table {
    max-width: 1000px;
    margin: auto;

    &__one {
      margin: auto;
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    z-index: 2;
  }
}
</style>
