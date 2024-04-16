<script>

export default { 

  props: { project: Object}, 

  computed: {
    abstract(){
        return this.project.content.length > 45 ? this.project.content.substr(0, 15) + '...' :  this.project.content;
    }
  }
    
};


</script>

<template>
    <div class="col">

        <div class="card h-100">
            <img v-if="project.image" :src="project.image" class="card-img-top" alt="">
            <div class="card-body">

                
                <h3 class="card-title">{{ project.title }}</h3>

                <span class="badge" :style="'background-color:' + project.type.color"> {{ project.type.label }} </span>
                
                <p class="card-text"> {{ abstract }}</p>

                <div class="my-2">

                    <span class="badge me-2" :style="'background-color:' + technology.color" v-for="technology in project.technology">{{ technology.label }}</span>
                </div>


                <router-link :to="{ name: 'projectDetail', params: { id: project.id } }" class="btn btn-primary">dettaglio</router-link>
            </div>
        </div>
        
    </div>

</template>

<style  lang="scss">

</style>

