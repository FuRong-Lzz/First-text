<template>
    <div class="GoodsList">
      <goods-list-item v-for="item in goods" :key="item.id" :listItem="item"></goods-list-item>
    </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
 .GoodsList {
   display: flex;
   flex-wrap: wrap;
   align-content: space-around;
   justify-content: space-around;
 }
</style>
