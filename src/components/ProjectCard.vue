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
                
                <p class="card-text"> {{ abstract }}</p>
                <a href="" class="btn btn-primary">dettaglio</a>
            </div>
        </div>
        
    </div>

</template>

<style  lang="scss">

</style>

