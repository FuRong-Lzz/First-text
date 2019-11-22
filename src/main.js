import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'amfe-flexible';
import Cube from 'cube-ui';

require('./mock/mock')
import axios from "axios";//模拟数据导入
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
Vue.use(Cube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
