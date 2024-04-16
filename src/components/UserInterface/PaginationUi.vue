<script>


  export default {


    props: { pagination: Array},


    emit: ['change-page'],

    // data(){
    //   return {
       

    

    //   };
    // },


    


  };
</script>

<template>

<nav aria-label="Page navigation example ">
    <ul class="pagination my-3">
      <li class="page-item" >
        
      </li>
      <li class="page-item" @click="$emit('change-page', link.url)"
       :class="{
        active: link.active,
        disabled: !link.url,
       }
        "v-for='link in pagination'>
       <a class="page-link" href="javascript:void(0)" v-html="link.label"></a>
       </li>
     
      <li class="page-item"></li>
    </ul>
  </nav>

</template>

<style  lang="scss">

</style>

