import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/leagueinfos/:id",
    name: "leagueinfos",
    component: () => import("../views/LeagueInfos.vue"),
  },
  {
    path: "/team/:id",
    name: "team",
    component: () => import("../views/Team.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
