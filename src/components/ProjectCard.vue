<script>

export default { 

  props: { project: Object, isDetail: Boolean}, 

  computed: {
    abstract(){
        return this.project.content.length > 45 && !this.isDetail ? this.project.content.substr(0, 15) + '...' :  this.project.content;
    }
  }
    
};


</script>

<template>
    <div class="col">

        <div v-if="!isDetail" class="card h-100">
            <img  :src="project.image" class="card-img-top" alt="">
            <div class="card-body">

                
                <h3 class="card-title">{{ project.title }}</h3>

                <span class="badge" :style="'background-color:' + project.type.color"> {{ project.type.label }} </span>
                
                <p class="card-text"> {{ abstract }}</p>

                <div class="my-2">

                    <span class="badge me-2" :style="'background-color:' + technology.color" v-for="technology in project.technology">{{ technology.label }}</span>
                </div>


                <router-link  :to="{ name: 'projectDetail', params: { slug: project.slug } }" class="btn btn-primary">dettaglio</router-link>
            </div>
        </div>

        <div v-else class="text-center">
            <h1 class="card-title text-center my-4">{{ project.title }}</h1>

         

                <img  :src="project.image" class="card-img-top w-50 " alt="">
        
            <div class="card-body">

                

                <div class="my-2 my-4">
                    <span class="badge m-2" :style="'background-color:' + project.type.color"> {{ project.type.label }} </span>

                    <span class="badge m-2" :style="'background-color:' + technology.color" v-for="technology in project.technology">{{ technology.label }}</span>
                </div>
                
                <p class="card-text my-4"> {{ abstract }}</p>



                
            </div>
        </div>
        
    </div>

</template>

<style  lang="scss">

</style>

