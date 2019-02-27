import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"
import shopCart from "./components/shopcart.vue"
import search from "./components/search.vue"
import Phone from "./components/phone/phone.vue"
import PhoneInfo from "./components/phone/phoneInfo.vue"
import Login from "./components/login/login.vue"
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/Phone',component:Phone},
    {path:'/PhoneInfo',component:PhoneInfo},
    {path:'/shopCart',component:shopCart},
    {path:'/search',component:search},
    {path:'/Login',component:Login},
    {path:"/newsList",component:newsList},
    {path:"/newsInfo",component:newsInfo},
  ],
  linkActiveClass:"mui-active",
});