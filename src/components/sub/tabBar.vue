<template>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/Login">
        <span class="mui-icon mui-icon-contact">
        </span>
        <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item"  to="/shopCart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        <span class="mui-badge">{{$store.getters.optCartCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search" >
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</template>
<script>
    export default{
        data:function(){
            return {}
        }
    }
</script>