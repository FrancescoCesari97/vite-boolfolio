import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";

import ProjectPage from "./pages/ProjectPage.vue";

import ProjectPageDetail from "./pages/ProjectPageDetail.vue";

import NotFoudPage from "./pages/NotFoudPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage,
    },
    {
      path: "/projectDetail/:slug",
      name: "projectDetail",
      component: ProjectPageDetail,
    },

    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: NotFoudPage,
    },
  ],
});

export { router };
