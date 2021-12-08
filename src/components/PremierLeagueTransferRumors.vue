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
import NewsDetailPage from "./NewsDetailPage.vue";
import NewFooter from "./NewFooter.vue";
import NewNavButton from "./NewNavButton.vue";
import NewNavSocial from "./NewNavSocial.vue";
import LazyTransfersRumors from "./LazyTransfersRumors.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "PremierLeagueTransferRumors",

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
      required: true,
    },
  },

  setup(props) {
    onMounted(() => {
      store.dispatch("PremierLeagueTransfers");
    });

    const store = useStore();
    const newsTransfers = computed(
      () => store.state.newsTransfersBing[props.id]
    );
    const items = ref([]);

    items.value.push(newsTransfers.value);

    return { store, newsTransfers, items };
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
