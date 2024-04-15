<script>
import { store } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";
export default {
  data() {
    return {
      store,

      pagination: [],
    };
  },

  methods: {
    fetchProjects(endpoint = store.api.baseUrl + 'projects') {
      axios.get(endpoint).then((response) => {
        store.projects = response.data.data;

        this.pagination = response.data.links;
    });
    },
  },

  components: { ProjectCard },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="row row-col-4 g-3">
    <project-card v-for="project in store.projects" :project="project" />
  </div>

  <nav aria-label="Page navigation example ">
    <ul class="pagination my-3">
      <li class="page-item" >
        
      </li>
      <li class="page-item" @click="fetchProjects(link.url)"
       :class="{
        active: link.active,
        disabled: !link.url,
       }
        "v-for='link in pagination'>
       <a class="page-link" href="#" v-html="link.label"></a>
       </li>
     
      <li class="page-item"></li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
