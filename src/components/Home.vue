<template>
  <div class="app-home">
   <!--顶部导航条 -->
   <div class="home-head">
     <img src="http://127.0.0.1:3000/img/logo.png">
  	 <div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="搜寻你喜欢的商品">
        <span class="mui-icon mui-icon-search"></span>
		 </div>

   </div>
   <!--轮播图-->
   <mt-swipe>
     <mt-swipe-item v-for="item in list" :key="item.mid">
         <img :src="item.img_url" />
     </mt-swipe-item>
   </mt-swipe>
   <!--九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      
        <li class=" mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/phone" class="grid phone">
          <img src="http://127.0.0.1:3000/img/phone.png" />
          </router-link>
          <div class="media-body">手机</div>
        </li>
        <li class=" mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/NewsList" class="grid peijian">
          <img src="http://127.0.0.1:3000/img/view_icon_06.png" />
          </router-link>
          <div class="media-body">配件</div>
        </li>
        <li class=" mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/NewsList" class="grid service">
          <img src="http://127.0.0.1:3000/img/service.png" />
          </router-link>
          <div class="media-body">服务</div>
        </li>
        <li class=" mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/NewsList" class="grid meitu">
          <img src="http://127.0.0.1:3000/img/meitu-1.png" />
          </router-link>
          <div class="media-body">美图</div>
        </li>
    </ul>  
    <!--推荐 -->
    <div>
      <p class="produce">热门推荐</p>
    </div>
    <swiper :options="swiperOption1" ref="mySwiper">
      <swiper-slide>
        <img src="http://127.0.0.1:3000/img/produce-1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://127.0.0.1:3000/img/produce-2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://127.0.0.1:3000/img/produce-3.jpg" alt="">
      </swiper-slide>
    </swiper>
    <!--美图专区  -->
    <div>
      <p class="produce">MeituFamily 专区</p>
        <ul class="mui-table-view mui-grid-view mui-grid-9 ">
          <li class="mui-table-view-cell mui-media family mui-col-xs-4 mui-col-sm-3" v-for="item of arr" :key="item.id">
            <a href="#">
            <img :src="item.img_url" alt="">
            <div class="mui-media-body">{{item.title}}</div>
            <p class="price">￥{{item.price}}</p>
            </a>
          </li>
		    </ul> 
    </div>
    <!-- 底部导航栏 -->
  <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item mui-active" href="#tabbar">
    <span class="mui-icon mui-icon-home"></span>
    <span class="mui-tab-label">首页</span>
    </a>
    <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/Login">
    <span class="mui-icon mui-icon-contact">
    </span>
    <span class="mui-tab-label">会员</span>
    </router-link>
    <a class="mui-tab-item" href="#tabbar-with-contact">
    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
    <span class="mui-badge">0</span>
    </span>
    <span class="mui-tab-label">购物车</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-map">
    <span class="mui-icon mui-icon-search"></span>
    <span class="mui-tab-label">搜索</span>
    </a>
  </nav>
</div>
</template>
<script>
  export default {
     data(){
       return {
         list:[],
        swiperOption1: {
            slidesPerView: 'auto',
  	        spaceBetween: 30,
      },
      arr:[]
      }
     },
     methods:{
     handleImage(){
         var url = "http://127.0.0.1:3000/imageList";
           this.axios.get(url).then(result=>{
               this.list = result.data;
           });
         },
      getMetuFamily(){
        var url = "http://127.0.0.1:3000/familyProduct";
           this.axios.get(url).then(result=>{
               this.arr = result.data;
               console.log(this.arr);
           });
      }
     },
     created() {
        this.handleImage(); 
        this.getMetuFamily();
     },
  }
</script>
<style scoped>
 .app-home{
    padding-top:40px;
  padding-bottom:50px;
  overflow-x:hidden;
 }
  /*home*/
 .home-head{
   display:flex;
   justify-content:space-between;
   background: #fff;
   position: fixed;
   top:0;
   height:3rem;
   align-items: center;
   padding:0.5rem;
   width:100%;
   z-index: 999;
 }
 .home-head img{
   width: 111px;
   height:20px;
 }
 .home-head .mui-search input.mui-input-clear{
   margin:0;
   width:80%;
   padding-left:0.5rem;
   font-size:0.8rem;
   margin-right:0.5rem;
 }
  /*轮播图*/
 .app-home .mint-swipe{
   height:200px;
   margin-top:0.55rem;
 }
 .app-home .mint-swipe img{
   width:100%;
   height:100%;
 }
 /*九宫格  图片宽度*/
 .app-home .mui-grid-9 .grid{
   border-radius: 50%;
   width:4rem;
   height:4rem;
   position:relative;
   display: block;
 }
  .app-home .mui-grid-9 .phone{
     background:#46c0ff;
 }
  .app-home .mui-grid-9 .peijian{
     background:#94d00b;
 }
  .app-home .mui-grid-9 .service{
     background:#ff9c7d;
 }
  .app-home .mui-grid-9 .meitu{
     background:#ff71aa;
 }
  .app-home .mui-grid-9 .grid img{
    margin-top:0.5rem;
    height:2rem;
  }
  .app-home .mui-grid-9 .phone img{
    width:2rem;
  }
  .app-home .mui-grid-9 .meitu img{
    width:3rem;
    height:1.8rem;
  }
  ul.mui-grid-view.mui-grid-9{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding:0.8rem;
  }
  ul.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
    padding:0 0.7rem;
    width:25%;
  }
  ul.mui-grid-view.mui-grid-9 div.media-body{
    margin-top:1rem;
    height:1.5rem;
  }
  /*九宫格  背景修改为白色*/
 .app-home .mui-grid-view.mui-grid-9{
    background-color:#fff; 
 }
/*produce*/
p.produce{
  font-size:1.1rem;
  padding:0.5rem;
  margin:0;
}
.swiper-slide{
  width:80% !important;
}
.swiper-slide img{
  width:100%;
}
ul.mui-grid-view.mui-grid-9  li.family.mui-table-view-cell {
   width:50% !important;
}
p.produce+ul.mui-grid-view.mui-grid-9 {
    flex-wrap: wrap;
}
.mui-table-view .family img{
  width:7.8rem;
  height:7.8rem;
}
ul.mui-grid-view.mui-grid-9 li.mui-table-view-cell.family:first-child{
  border-right:1px solid #ccc;
  border-bottom:1px solid #ccc;
  }
  ul.mui-grid-view.mui-grid-9 li.mui-table-view-cell.family:nth-child(2){
  border-bottom:1px solid #ccc;
  }
  ul.mui-grid-view.mui-grid-9 li.mui-table-view-cell.family:nth-child(3){
  border-right:1px solid #ccc;
  }
</style>