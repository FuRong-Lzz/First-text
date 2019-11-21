<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view />
  </div>
</template>

<script>
  import MainTabBar from "components/content/MainTabBar/MainTabBar"

  export default {
    name: 'App',
    components:{
      'main-tab-bar':MainTabBar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
