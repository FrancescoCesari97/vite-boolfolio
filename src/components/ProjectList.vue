<script>
import axios from 'axios';
import {store} from '../store';

import ProjectCard from './ProjectCard.vue'
export default { 

    data(){
      return {

        store,

      };
    },

    components: { ProjectCard },

    created(){
      axios.get(store.api.baseUrl + 'projects').then((response) => {
        store.projects = response.data.data

      });

    }
    
};


</script>

<template>

    
        <div  class="row row-col-4 g-3">

            <project-card v-for="project in store.projects" :project="project"/>
        </div>


</template>

<style  lang="scss">

</style>

