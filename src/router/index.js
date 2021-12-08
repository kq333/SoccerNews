import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detailsLaLigaTransfersRumors/:id",
    name: "DetailsLaLigaTransfersRumors",
    props: true,

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/DetailsLaLigaTransfersRumors.vue"
      ),
  },
  {
    path: "/detailsPremierLeagueTransfers/:id",
    name: "DetailsPremierLeagueTransfers",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/DetailsPremierLeagueTransfers.vue"
      ),
    props: true,
  },
  {
    path: "/marketValue",
    name: "MarketValue",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MarketValue.vue"),
  },

  {
    path: "/liveResults",
    name: "LiveResults",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LiveResults.vue"),
  },

  {
    path: "/forum",
    name: "Forum",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forum.vue"),
  },

  {
    path: "/video",
    name: "Video",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Video.vue"),
  },

  {
    path: "/detailsCaruselNews/:id",
    name: "DetailsCaruselNews",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailsCaruselNews.vue"),
    props: true,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
