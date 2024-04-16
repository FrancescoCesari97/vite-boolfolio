<script>
// import axios from 'axios';

// import {store} from './store';

import AppHeader from './components/AppHeader.vue';

// import ProjectList from './components/ProjectList.vue';

  export default {
    data(){
      return {
        title: 'Vite Boolfolio',

    

      };
    },


    components: { AppHeader },


  };
</script>

<template>

  <app-header :title="title"/>

  <div class="container">
    <h1>{{ title }}</h1>

    <router-view></router-view>

    <!-- <project-list/> -->
   
  </div>
</template>

<style  lang="scss">
  @import'/src/scss/general.scss';
</style>

