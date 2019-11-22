<template>
  <div class="GoodsListItem">
      <img :src="listItem.img">
      <h4>{{listItem.title}}</h4>
      <span>{{listItem.date}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      listItem:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .GoodsListItem {
   width: 40%;
   margin-bottom: 10px;
   box-shadow: 0 0 10px #eee; border:1px solid #eee;
 }
 .GoodsListItem img{
   width: 100%;
 }
 .GoodsListItem h4{
   font-size: 14px;
 }
  .GoodsListItem span{
    font-size: 12px;
    float: left;
  }
</style>
