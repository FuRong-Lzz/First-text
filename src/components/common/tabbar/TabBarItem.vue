<template>
   <div class="tab-bar-item" @click="itemClick">
    <div v-if='!isActive'><slot name="itemIcon"></slot></div>
    <div v-else><slot name="itemIconActive" ></slot></div>
    <div :style='activeStyle' class="font-size"> <slot name="itemText"></slot> </div>
   </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeClor:{
          type: String,
          default:'red'
        }
      },
      data(){
        return{

        }
      },
      computed:{
        isActive(){
          // this.$route.path当前活跃的item  等于-1表示没有找到
           return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color:this.activeClor}:{}
        }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path).catch(err => {err})
        }
      }
    }
</script>

<style scoped>
  #tab-bar .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  #tab-bar .tab-bar-item img{
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
  .font-size {
    font-size: var(--font-size);
  }
</style>
