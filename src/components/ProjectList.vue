<script>
import { store } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";

import PaginationUi from "./UserInterface/PaginationUi.vue"
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
        store.projects = response.data.result.data;

        this.pagination = response.data.result.links;
    });
    },
  },

  components: { ProjectCard, PaginationUi },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>

  <pagination-ui @change-page="fetchProjects" :pagination="pagination"/>


  <div class="row row-col-4 g-3">
    <project-card v-for="project in store.projects" :project="project" />
  </div>

  <pagination-ui @change-page="fetchProjects" :pagination="pagination"/>


  <!-- <nav aria-label="Page navigation example ">
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
  </nav> -->
</template>

<style lang="scss"></style>
