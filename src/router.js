import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"
import Phone from "./components/phone.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/Phone',component:Phone},
  ]
});