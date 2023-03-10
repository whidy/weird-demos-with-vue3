import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/reactive",
      name: "reactive",
      component: () => import("../views/Reactive/TheIndex.vue")
    },
    {
      path: "/input",
      name: "input",
      component: () => import("../views/ElInput/TheIndex.vue")
    }
  ]
});

export default router;
