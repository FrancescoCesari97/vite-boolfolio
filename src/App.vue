<script>
import axios from 'axios';

  export default {
    data(){
      return {
        title: 'Vite Boolfolio'
      };
    },

    created(){
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => {});
    }
  };
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style  lang="scss">
  @import'/src/scss/general.scss';
</style>

