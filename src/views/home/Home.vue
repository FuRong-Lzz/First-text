<template>
  <div id="home">
    <nav-bar class="home-navBackground">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
      name: "Home",
      components:{
        'nav-bar': NavBar
      }
    }
</script>

<style scoped>
  .home-navBackground {
    background-color:var(--color-tint);
    color: #fff;
  }
</style>
