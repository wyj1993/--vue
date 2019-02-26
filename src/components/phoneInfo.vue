<template>
    <div class="app-phoneInfo">
        <header-box></header-box>
        <mt-swipe>
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" />
            </mt-swipe-item>
        </mt-swipe> 
        <div class="settings">
            <p>规格</p>
            <ul>
                <li v-for="item of list" :key="item.id">
                    <p><span class="title">{{item.title}}</span><span class="price">￥{{item.price}}</span></p>
                    <p class="size">{{item.specs}}</p>
                </li>
            </ul>
            <p>颜色</p>
            <ul class="color">
                <li class="active"><i></i>魅影红</li>
                <li><i></i>闪耀紫</li>
            </ul>
        </div>
        <!--底部-->
        <div class="bottom">
            <p class="time">抢购时间：06月16日 12:00</p>
            <router-link to="">立即预约</router-link>
        </div>
    </div>
</template>
<script>
    import Header from './sub/header.vue'
    export default {
        data(){
            return {
               list:[],
            }
        },
        methods:{
            getPhoneImage(){
                var pid=1;
                var url="http://127.0.0.1:3000/phoneInfo?pid="+pid;
                this.axios.get(url).then(result=>{
                   this.list=result.data.data;
                })
            }
        },
        created() {
            this.getPhoneImage();
        },
        components:{
            "header-box":Header,
        }
    }

</script>
<style scoped>

    div.info{
        height:50px;
    }
    .mint-swipe{
        height:300px;
    }
    .mint-swipe img{
        width:100%;
        height:100%;
    }
    .mint-swipe  .mint-swipe-item{
        padding:30px 70px;
        background:#fff;
    }
    div.settings{
        padding:20px;
    }
     div.settings ul{
         padding:0;
     }
     div.settings>p{padding-left:10px;color:#000}
     div.settings li{
         background:#fff;
         list-style: none;
         padding:10px;
         margin-bottom:15px;
         border-radius:3px;
     }
     div.settings li p:first-child{
         display:flex;
         justify-content:space-between;
         padding-right:30px;
     }
     div.settings li span.title{
         color:#000;
     }  
     div.settings li span.price{
         color:#f55669;
         font-size:16px;
     }
     ul.color{
         margin-bottom:50px;
     }
     ul.color,ul.color li{display: flex;flex-wrap: nowrap;justify-content: center}
     ul.color li{padding:15px 25px;margin-right:20px;border:1px solid #ddd}
     ul.color li:first-child i{background:#f55669;border-radius:50%;display: block;width:15px;height:15px;margin-right:10px}
     ul.color li:last-child i{background:#634bbd;border-radius:50%;display: block;width:15px;height:15px;margin-right:10px}
     ul.color li.active{
         border:1px solid #f55669;
     }
    div.bottom{
        position: fixed;
        background:#fff;
        height:60px;
        color:#000;
        bottom:0;
        width:100%;
        display: flex;
        line-height:60px;
        flex-wrap:nowrap;
        justify-content: space-between;
    }
    div.bottom p.time{
        text-align: center;
        color:#000;
        font-size:16px;
        width:70%;
    }
    div.bottom a{
        display: block;
        width:30%;
        background:#f55669;
        color:#fff;
        text-align: center;
    }
</style>