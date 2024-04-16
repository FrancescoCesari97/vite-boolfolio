import { createRouter, createWebHIstory } from "vue-router";

import HomePage from " /pages/HomePge.vue";

import ProjectPage from " /pages/ProjectPage.vue";

const router = createRouter({
  history: createWebHIstory(),

  routes: [
    {
      path: "/",
      name: "home",
      components: HomePage,
    },
    {
      path: "/project",
      name: "project",
      components: ProjectPage,
    },
  ],
});

export { router };
