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
      component: () => import("@/views/projects/CocoonQR.vue"),

    },
    {
      path: "/projects/cocoon-present",
      name: "cocoon-present",
      component: () => import("@/views/projects/CocoonPresent.vue"),
    },
    {
      path: "/projects/pot",
      name: "pot",
      component: () => import("@/views/projects/PurchaseOrderTracker.vue"),
    },
    {
      path: "/projects/social-study",
      name: "social study",
      component: () => import("@/views/projects/SocialStudy.vue"),
    }
  ],
});

export default router;
