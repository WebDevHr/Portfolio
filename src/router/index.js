import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aboutme",
    name: "aboutme",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutMeView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SkillsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogView.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
