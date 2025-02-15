import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../views/HomePage.vue"),
  },
  {
    name: "MyAbout",
    path: "/about",
    component: () => import("../views/MyAbout.vue"),
  },
  {
    name: "MyServices",
    path: "/services",
    component: () => import("../views/MyServices.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../views/loginPage.vue"),
  },
  {
    name: "SignUp",
    path: "/register",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
