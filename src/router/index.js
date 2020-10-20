import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/index/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'login'
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
];

const router = new VueRouter({
  routes
});

export default router;
