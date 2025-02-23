import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not Found",
      component: NotFound,
    },
  ],
});

export default router;
