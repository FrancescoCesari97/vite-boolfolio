<script>

import ProjectList from './components/ProjectList.vue';

  export default {
    data(){
      return {
        title: 'Homepage Vite Boolfolio',

    

      };
    },


    components: { ProjectList },


  };
</script>

<template>

 
  <project-list />


</template>

<style  lang="scss">
  @import'/src/scss/general.scss';
</style>

