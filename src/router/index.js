import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const Home = ()=> import('views/home/Home')
const Cart =()=> import('views/cart/Cart')
const Profile =()=> import('views/profile/Profile')
const Category =()=> import('views/category/Category')

const routes = [
  {
    path:'',
    redirect:'Home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profle",
    component: Profile
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
];

const router = new Router({
  routes,
  mode:'history'
})

export default router;
