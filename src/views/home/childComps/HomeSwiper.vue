<template>
 <div>
   <cube-slide ref="slide" :data="banner" :showDots="true">
     <cube-slide-item v-for="(item, index) in banner" :key="index">
       <a :href="item.link">
         <img :src="item.image" :alt="item.title" class="img-width">
       </a>
     </cube-slide-item>
   </cube-slide>
 </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      banner:{
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
  .img-width {
    width: 100%;
  }
</style>
