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
      path: "/",
      name: "homeNoScroll",
      component: HomeView,
      meta: {noScroll: true}
    },
    {
      path: "/projects/cocoon-qr",
      name: "cocooon-qr",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/projects/CocoonQR.vue"),

    },
  ],
});

export default router;
