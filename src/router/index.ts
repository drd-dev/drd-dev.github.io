import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function (to){
    if(to.hash && !to.meta.noScroll) {
      return {
        el: to.hash
      }
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects/:id",
      name: "Projects",
      component: () => import("@/views/projects/ProjectPage.vue")
    }
  ],
});

export default router;
