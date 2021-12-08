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
    <div class="content">
      <div class="content__backgroundTemplate">
        <BackgroundTemplate>
          <template #header>
            LIVE
          </template>
          <template #displayArea>
            <MatchDayTable class="one">
              <template #header>
                Live Matches
              </template>
              <template #date>
                <p v-for="(item, index) in getValueSort" :key="index">
                  <LazyLiveMatches :date="item" />
                </p>
              </template>
              <template #teamName>
                <p v-for="(item, index) in getValueSort" :key="index">
                  <LazyLiveMatches :teamName="item" />
                </p>
              </template>
              <template #teamLogo>
                <p v-for="(item, index) in getValueSort" :key="index">
                  <LazyLiveMatches :teamLogo="item" />
                </p>
              </template>
              <template #result>
                <div
                  class="one__results"
                  v-for="(item, index) in getValueSort"
                  :key="index"
                >
                  <strong> <LazyLiveMatches :result="item" /> </strong>
                </div>
              </template>
              <template #teamLogo2>
                <p v-for="(item, index) in getValueSort" :key="index">
                  <LazyLiveMatches :teamLogo2="item" />
                </p>
              </template>
              <template #teamName2>
                <p v-for="(item, index) in getValueSort" :key="index">
                  <LazyLiveMatches :teamName2="item" />
                </p>
              </template>
            </MatchDayTable>
          </template>
        </BackgroundTemplate>
      </div>
    </div>
  </div>
</template>

<script>
import NewFooter from "../components/NewFooter.vue";
import NewNavButton from "../components/NewNavButton.vue";
import NewNavSocial from "../components/NewNavSocial.vue";
import BackgroundTemplate from "../components/BackgroundTemplate.vue";
import MatchDayTable from "../components/MatchDayTable.vue";
import LazyLiveMatches from "../components/LazyLiveMatches.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "LiveresultComponent",

  components: {
    NewFooter,
    NewNavButton,
    NewNavSocial,
    BackgroundTemplate,
    MatchDayTable,
    LazyLiveMatches,
  },

  setup() {
    onMounted(() => {
      store.dispatch("liveScore");
    });

    const store = useStore();
    const getValueSort = computed(() => store.state.LiveMatches);

    return { store, getValueSort };
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

  .content {
    max-width: 1000px;
    margin-bottom: 500px;

    &__backgroundTemplate {
      margin-top: 20px;

      .one {
        margin-top: 30px;
        max-width: 691px;
        min-height: 500px;

        @media (max-width: 768px) {
          margin-top: 30px;
          max-width: 691px;
          height: 1300px;
        }

        &__results {
          min-width: 20px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
  }
}
</style>
