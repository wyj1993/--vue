<template>
 <div class="app-container">
    <!--  src/App.vue -->   
    <!-- 1:添加公共组件 Home.vue/Header-->
    <!-- <mt-header></mt-header> -->
    <!-- 2:占位符用来显示其它的组 55-->
    <router-view></router-view>
    <!-- 3:添加公共组件 Home.vue/tabbar-->
  
 </div>
</template>
<style>
   /* .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   } */
   ul{
      margin:0;
      padding:0;
   }
  li{
     list-style: none;
  }
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
