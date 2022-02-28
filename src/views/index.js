import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import Wallet from "./Wallet.vue";
import Demos from "./Demos.vue";
import Beta from "./Beta.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demos",
    name: "demos",
    component: Demos,
  },
  {
    path: "/beta",
    name: "beta",
    component: Beta,
  },
  {
    path: "/wallet",
    name: "wallet",
    component: Wallet,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./About.vue"),
  },
  {
    path: "/students",
    name: "Students",
    component: () =>
      import(/* webpackChunkName: "students" */ "../views/Students.vue"),
  },
  {
    path: "/educators",
    name: "Educators",
    component: () =>
      import(/* webpackChunkName: "educators" */ "../views/Educators.vue"),
  },
  {
    path: "/whitelabel",
    name: "Whitelabel",
    component: () =>
      import(/* webpackChunkName: "whitelabel" */ "../views/Whitelabel.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
