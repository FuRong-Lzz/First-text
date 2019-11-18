<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeClor="#d81e06">
        <img slot="itemIcon" src="~assets/img/TabBar/shouye.svg" alt="首页" />
        <img slot="itemIconActive" src="~assets/img/TabBar/shouye-active.svg" alt="首页" />
        <div slot="itemText">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeClor="#d81e06">
        <img slot="itemIcon" src="~assets/img/TabBar/fenlei.svg" alt="分类" />
        <img slot="itemIconActive" src="~assets/img/TabBar/fenlei-active.svg" alt="分类" />
        <div slot="itemText">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeClor="#d81e06">
        <img slot="itemIcon" src="~assets/img/TabBar/car.svg" alt="购物车"/>
        <img slot="itemIconActive" src="~assets/img/TabBar/car-active.svg" alt="购物车" />
        <div slot="itemText">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeClor="#d81e06">
        <img slot="itemIcon" src="~assets/img/TabBar/wode.svg" alt="我的" />
        <img slot="itemIconActive" src="~assets/img/TabBar/wode-active.svg" alt="我的" />
        <div slot="itemText">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components:{
      'tab-bar':TabBar,
      'tab-bar-item':TabBarItem
    },
    methods:{

    }
  }
</script>

<style>

</style>

