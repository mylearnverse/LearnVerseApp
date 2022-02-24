import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Wallet from "../views/Wallet.vue";
import Demos from "../views/Demos.vue";
import Beta from "../views/Beta.vue";

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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
