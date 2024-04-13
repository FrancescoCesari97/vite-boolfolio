<script>
import axios from 'axios';

  export default {
    data(){
      return {
        title: 'Vite Boolfolio',

        projects: [],
      };
    },

    created(){
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        this.projects = response.data.data

      });

    }
  };
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    
    <div class="row">
        <div v-for="project in projects" class="col-4 g-3">
          <div class="card h-100">
            <h3>{{ project.title }}</h3>

            <p>{{ project.content }}</p>
          </div>
        </div>
      
    </div>
  </div>
</template>

<style  lang="scss">
  @import'/src/scss/general.scss';
</style>

