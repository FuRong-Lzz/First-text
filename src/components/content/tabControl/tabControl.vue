<template>
  <div class="tabControl">
<!-- 只是文字不一，没有必要用插槽-->
    <div v-for="(item,index) in titles" :key="index"
         class="tabControl-list"
         @click="CheckedTitle(index)"
         :class="{active : index === crreateindex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        crreateindex: 0
      }
    },
    methods:{
      CheckedTitle(index){
        this.crreateindex = index
      }
    }
  }
</script>

<style scoped>
 .tabControl {
   display: flex;
   justify-content: space-around;
   background-color: #fff;
   padding-bottom: 5px;
   height: 40px;
   line-height: 40px;
 }
 .tabControl-list{
   height: 40px;
   line-height: 40px;
 }
  .tabControl-list span{
    font-size: 16px;
    font-weight: 400;
  }
  .active {
    color: var(--color-height-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
