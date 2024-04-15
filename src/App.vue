<script>
// import axios from 'axios';

// import {store} from './store';

import AppHeader from './components/AppHeader.vue';

import ProjectList from './components/ProjectList.vue';

  export default {
    data(){
      return {
        title: 'Vite Boolfolio',

    

      };
    },


    components: { AppHeader, ProjectList },


  };
</script>

<template>

  <app-header :title="title"/>

  <div class="container">
    <h1>{{ title }}</h1>

    <project-list/>
   
  </div>
</template>

<style  lang="scss">
  @import'/src/scss/general.scss';
</style>

