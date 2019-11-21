<template>
    <div class="RecommendView">
       <div v-for="(item,index) in recommend" :key="index" class="RecommendView-item">
         <a :href="item.link">
           <img :src="item.image" :alt="item.title">
           <div class="RecommendView-text">{{item.title}}</div>
         </a>
       </div>
    </div>
</template>

<script>
  export default {
    name: "RecommendView.vue",
    props:{
      recommend:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .RecommendView{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    font-size: 14px;
    justify-content: space-evenly;
    border-bottom: 8px solid #eee;
  }
  .RecommendView-item a{
    display: block;
  }
  .RecommendView-item img{
    width: 75px;
    height: 75px;
  }
  .RecommendView-text {
    margin-top: 4px;
  }
</style>
