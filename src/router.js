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
import partsList  from './components/parts/partsList.vue'
import goods  from './components/parts/goods.vue'
import list1  from './components/parts/list1.vue'
import list2  from './components/parts/list2.vue'
import list3  from './components/parts/list3.vue'
import listError from './components/parts/listError.vue'
import Detail from './components/parts/detail.vue'
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
    {path:"/partsList",component:partsList,children:[
      {path:'/partsList/goods',component:goods},
      {path:'/list1',component:list1},
      {path:'/list2',component:list2},
      {path:'/list3',component:list3},
      {path:'/listError',component:listError}
    ]},
    {path:'/detail',component:Detail}
  ],
  linkActiveClass:"mui-active",
});