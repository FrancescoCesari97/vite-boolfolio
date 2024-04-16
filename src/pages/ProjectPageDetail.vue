<script>

import axios from 'axios';

import {store} from '../store';


import ProjectCard from '../components/ProjectCard.vue';

  export default {

    data(){
      return {
        project: null

    

      };
    },

    components: {ProjectCard},

   created() {
    const projectSlug = this.$route.params.slug
    axios.get(store.api.baseUrl + `projects/${projectSlug}`).then((response) => {
        if(response.data.success){
            
            this.project = response.data.result;
        } else {
            this.$router.push({ name: 'not-found', params:{ pathMatch: '404'} });
        }
    });


   },


  };
</script>

<template>

 
    <div class="row">
        <project-card v-if="project" :project="project" :isDetail="true"/>

    </div>



</template>

<style  lang="scss">
  
</style>

