<template>
  <div id="home">
    <nav-bar class="home-navBackground">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/tabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata ,getHomeGoods} from "network/home";

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
    "feature-view": FeatureView,
    "goods-list": GoodsList
  },
  data() {
    return {
     banner:[],
     recommend:[],
      goods: {
       'pop':{ page: 0 , list:[] },
       'new':{ page: 0 , list:[] },
       'sell':{ page: 0 , list:[] },
      }
    }
  },
  created() {
    // 请求多个数据(异步)
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop',1)

  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type,page){
      this.axios({
        url:'http://localhost:8080/test/cityInfo',
        methods: 'get'
      }).then((res)=> {
        console.log(res.data)
        this.goods.pop.list = res.data.articles
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
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
