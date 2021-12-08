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
              <LazyTransfersRumors :image2="item" />
            </p>
          </template>
          <template #title>
            <p v-for="(item, index) in items" :key="index">
              <LazyTransfersRumors :title="item" />
            </p>
          </template>
          <template #titleArt>
            <p v-for="(item, index) in items" :key="index">
              <LazyTransfersRumors :titleArt="item" />
            </p>
          </template>
          <template #allArt>
            <p v-for="(item, index) in items" :key="index">
              <LazyTransfersRumors :allArt="item" />
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
import LazyTransfersRumors from "../components/LazyTransfersRumors.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "LaLigaTransfersRumors",

  components: {
    NewsDetailPage,
    NewFooter,
    NewNavButton,
    NewNavSocial,
    LazyTransfersRumors,
  },

  props: {
    id: {
      type: String,
    },
  },

  setup(props) {
    const store = useStore();
    onMounted(() => {
      store.dispatch("bingNews");
    });

    const laLigaTransfersNews = computed(
      () => store.state.bingLaLigaTransfers[props.id]
    );

    const items = ref([]);
    items.value.push(laLigaTransfersNews.value);

    return { store, laLigaTransfersNews, items };
  },
};
</script>

<style></style>

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
