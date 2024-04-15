<script>
import axios from 'axios';
import {store} from '../store';
export default { 

    data(){
      return {

        store,

      };
    },

    created(){
      axios.get(store.api.baseUrl + 'projects').then((response) => {
        store.projects = response.data.data

      });

    }
    
};


</script>

<template>

    <div class="row">
        <div v-for="project in store.projects" class="col-4 g-3">

            <div class="card h-100">
                <img v-if="project.image" :src="project.image" class="card-img-top" alt="">
                <div class="card-body">

                    <h3 class="card-title">{{ project.title }}</h3>
    
                    <p class="card-text"> {{ project.content }}</p>
                    <a href="" class="btn btn-primary">dettaglio</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style  lang="scss">

</style>

