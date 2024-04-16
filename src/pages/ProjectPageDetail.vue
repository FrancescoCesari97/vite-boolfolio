<script>

import axios from 'axios';

import {store} from '../store';

  export default {

    data(){
      return {
        project: null

    

      };
    },

   created() {
    const projectSlug = this.$route.params.slug
    axios.get(store.api.baseUrl + `projects/${projectSlug}`).then((response) => {
       this.project = response.data;
    });


   },


  };
</script>

<template>

 
    <h1>dettaglio project {{ $route.params.slug }}</h1>


</template>

<style  lang="scss">
  
</style>

