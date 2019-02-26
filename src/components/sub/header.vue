<template>
    <div class="header">
        <span class="mui-icon mui-icon-arrowleft" @click="jump"></span>
        <router-link class="mui-icon mui-icon-home" to="/Home"></router-link>
    </div>
</template>
<script>
export default {
    data:function(){
        return {}
    },
    methods:{
        jump(){
            history.go(-1)
        }
    },
    created(){},
}
</script>
<style>
    div.header{
    display:flex;
    background:#fff;
    justify-content:space-between;
    padding:14px 10px ;
}
a.mui-icon.mui-icon-home{
  color:#000;
}
</style>

