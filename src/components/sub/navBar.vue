<template>
    <div class="header">
        <span class="mui-icon mui-icon-arrowleft" @click="goBack"></span>
        <h4>{{title}}</h4>
        <router-link class="mui-icon mui-icon-home" to="/Home"></router-link>
    </div>
</template>
<script>
export default {
    data:function(){
        return {}
    },
    props:["title"],
    methods:{
        goBack(){
            this.$router.go(-1)
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
    position: fixed;
    top:0px;
    z-index: 1;
    width:100%;
    border-bottom:1px solid #eeeeee;
}

a.mui-icon.mui-icon-home{
  color:#000;
}
h4{
    font-weight: 400;
}
</style>

