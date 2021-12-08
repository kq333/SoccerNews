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
            100 MOST VALUABLE TEAMS
          </template>
          <template #displayArea>
            <PaginationTable
              class="content__backgroundTemplate__paginationTable"
            >
              <template #number>
                <p v-for="(item, index) in getValue.slice(0, 25)" :key="index">
                  <LazyPaginationTable :number="item" />
                </p>
              </template>
              <template #logo>
                <p v-for="(item, index) in getValue.slice(0, 25)" :key="index">
                  <LazyPaginationTable :logo="item" />
                </p>
              </template>
              <template #clubName>
                <p v-for="(item, index) in getValue.slice(0, 25)" :key="index">
                  <LazyPaginationTable :clubName="item" />
                </p>
              </template>
              <template #logo2>
                <p v-for="(item, index) in getValue.slice(0, 25)" :key="index">
                  <LazyPaginationTable :logo2="item" />
                </p>
              </template>
              <template #ligueName>
                <p v-for="(item, index) in getValue.slice(0, 25)" :key="index">
                  <LazyPaginationTable :ligueName="item" />
                </p>
              </template>
              <template #value>
                <p v-for="(item, index) in getValue.slice(0, 25)" :key="index">
                  <strong>
                    <LazyPaginationTable :value="item" />
                  </strong>
                </p>
              </template>
              <template #one>
                <ButtonNumber @click="one">
                  <template #numbers>1</template>
                </ButtonNumber>
              </template>
              <template #two>
                <ButtonNumber @click="two">
                  <template #numbers>2</template>
                </ButtonNumber>
              </template>
              <template #three>
                <ButtonNumber @click="three">
                  <template #numbers>3</template>
                </ButtonNumber>
              </template>
              <template #four>
                <ButtonNumber @click="four">
                  <template #numbers>4</template>
                </ButtonNumber>
              </template>
            </PaginationTable>
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
import PaginationTable from "../components/PaginationTable.vue";
import ButtonNumber from "../components/ButtonNumber.vue";
import LazyPaginationTable from "../components/LazyPaginationTable.vue";
import { useStore } from "vuex";
import { onMounted, computed, ref, watch } from "vue";

export default {
  name: "MarketValue",

  components: {
    NewFooter,
    NewNavButton,
    NewNavSocial,
    BackgroundTemplate,
    PaginationTable,
    ButtonNumber,
    LazyPaginationTable,
  },

  setup() {
    onMounted(() => {
      store.dispatch("mostValuableClubs");
    });

    const store = useStore();
    const getStateValue = computed(() => store.state.valuesClubs);
    const getValue = ref([]);

    watch(getStateValue, () => {
      [getStateValue.value].forEach(
        (item) => (getValue.value = item.res.data.teams)
      );
    });

    function one() {
      [getStateValue.value].map(
        (item) => (getValue.value = item.res.data.teams.slice(0, 25))
      );
    }

    function two() {
      [getStateValue.value].map(
        (item) => (getValue.value = item.res.data.teams.slice(25, 50))
      );
    }
    function three() {
      [getStateValue.value].map(
        (item) => (getValue.value = item.res.data.teams.slice(50, 75))
      );
    }
    function four() {
      [getStateValue.value].map(
        (item) => (getValue.value = item.res.data.teams.slice(75, 100))
      );
    }

    return { store, getValue, getStateValue, one, two, three, four };
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
    z-index: 2;


  }

  .content {
    margin-bottom: 680px;



    @media (max-width: 767px) {
      margin-bottom: 18px;
    }

    &__backgroundTemplate {
      margin-top: 20px;

      &__paginationTable {
        @media (max-width: 767px) {
          margin-top: 70px;
        }
      }
    }

    p {
      width: auto;
      height: 33px;

      @media (max-width: 767px) {
        font-size: 10px;
      }
    }

    img {
      width: 15px;
      height: 20px;
    }

    .img2 {
      width: 30px;
      height: 20px;

      @media (max-width: 767px) {
        width: 20px;
        height: 20px;
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
