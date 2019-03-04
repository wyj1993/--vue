<template>
    <div class="partsList">
        <div class="partsHead">
            <router-link class="mui-icon mui-icon-home" to="/Home"></router-link>
            <div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="美图M8">
			</div>
            <p class="search">搜索</p>
        </div>
        <swiper :options="swiperOption1" ref="mySwiper">
            <swiper-slide >
                <router-link to="/partsList/goods">
                    <span class="part-item" >全部</span>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/list1">
                    <span class="part-item">充电器</span>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/list2">
                    <span class="part-item">手机壳</span>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/list3">
                    <span class="part-item">玩具手办</span>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/listError">
                    <span class="part-item">其他</span>
                </router-link>
            </swiper-slide>
        </swiper>
        <router-view></router-view>
        <!--
        <div class="listContent">
            <ul>
                <li class="content-item">
                    <img src="http://127.0.0.1:3000/img/part/p-2.jpg">
                    <p class="title">讲述了地方说了对方</p>
                    <p class="price">25</p>
                </li>
            </ul>
        </div>-->
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
             swiperOption1: {
                slidesPerView: 'auto',
                spaceBetween: 5,
            },
            list:[ ],
            isAllShow:true,
            }
        },
        methods:{
           
        },
        created() {
            
        },
    }
</script>
<style scoped>
    *{touch-action:none}
    .partsHead{
        display:flex;
        height:50px;
        background:#fff;
        align-items:center;
        padding:0 10px;
    }
    .mui-input-row.mui-search{
        width:82%;
        margin-left:8px;
        text-align:center;
    }
    .mui-input-clear{
        margin:0;
        width:95%;
    }
    p.search{margin:0}
    .swiper-slide{
        width:100px;  
        text-align:center;
    }
  .swiper-container.swiper-container-horizontal{
        padding:15px 7px;
        background:#fff;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .listContent ul{
        margin:0;
        padding:0;
    }
    span.part-item{
        box-sizing:border-box;
        padding:10px;
        color:#000;
    }
   a.mui-active{
        background:#ff71aa;
        color:#fff;
        border-radius:10px;
        padding:5px;
    }
      a.mui-active .part-item{
          color:#fff;
      }
    .listContent .content-item{
        display:flex;
        flex-direction:column;
        width:50%;
        background:#fff;
        align-items:center;
        justify-content:center;
        border-bottom:1px solid #e8e8e8;
        border-right:1px solid #e8e8e8;
        height:220px;
        }
    .listContent .content-item img{
        width:120px;
        height:120px;
    }
     .listContent .content-item p.price{
         color:#f55669;
     }
 
</style>