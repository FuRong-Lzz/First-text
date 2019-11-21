<template>
  <div id="home">
    <nav-bar class="home-navBackground">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>

    <ul>
      <li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li>
      <li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li>
      <li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li><li>dfdsf</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/tabControl";

import { getHomeMultidata } from "network/home";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

export default {
  name: "Home",
  components: {
    "nav-bar": NavBar,
    "tab-control": tabControl,
    "home-swiper": HomeSwiper,
    "recommend-view": RecommendView,
    "feature-view": FeatureView
  },
  data() {
    return {
     result: null,
     banner:[],
     recommend:[],
    }
  },
  created() {
    // 请求多个数据(异步)
    getHomeMultidata().then(res=>{
      this.result = res
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },
};
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-navBackground {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 43px;
}
</style>
