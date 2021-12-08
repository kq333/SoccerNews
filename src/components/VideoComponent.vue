<template>
  <div class="container">
    <div class="navSocialMedia">
      <NewNavSocial />
    </div>
    <div class="navButtons">
      <NewNavButton />
    </div>
    <div class="line">
      <BackgroundTemplate>
        <template #header>
          DAILY VIDEOS
        </template>
        <template #displayArea class="content">
          <div>
            <VideoTable>
              <template #date>
                <p v-for="(item, index) in getData" :key="index">
                  {{ item.date.slice(0, 10) }}
                </p>
              </template>
              <template #title>
                <p v-for="(item, index) in getData" :key="index">
                  {{ item.title }}
                </p>
              </template>
              <template #video>
                <div class="div" v-for="(item, index) in mapEmbed" :key="index">
                  <p v-html="item.embed"></p>
                </div>
              </template>
            </VideoTable>
          </div>
        </template>
      </BackgroundTemplate>
    </div>
    <div class="footer">
      <NewFooter />
    </div>
  </div>
</template>

<script>
import NewFooter from "../components/NewFooter.vue";
import NewNavButton from "../components/NewNavButton.vue";
import NewNavSocial from "../components/NewNavSocial.vue";
import VideoTable from "../components/VideoTable.vue";
import BackgroundTemplate from "../components/BackgroundTemplate.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "Video",

  components: {
    NewFooter,
    NewNavButton,
    NewNavSocial,
    VideoTable,
    BackgroundTemplate,
  },

  setup() {
    onMounted(() => {
      store.dispatch("getVideos");
    });

    const store = useStore();
    const getData = computed(() => store.state.videos.slice(0, 20));
    const mapEmbed = computed(() =>
      getData.value.map((item) => item.videos[0])
    );

    return { store, getData, mapEmbed };
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
    height: 75vh;
    overflow-y: scroll;
  }

  .content {
    max-width: 1000px;
    border-radius: 4px;
    border: 1px solid rgb(167, 166, 166);
    box-shadow: 1px 1px 3px #888888;
    padding: 5px;
    background-color: #f3f3f3;

    p {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 425px) {
        font-size: 0.7rem;
      }
    }

    .div {
      display: flex;
      justify-content: flex-end;

      p {
        min-width: 320px;
        @media (max-width: 320px) {
          min-width: 250px;
          margin: auto;
        }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    z-index: 2;
  }
}
</style>
