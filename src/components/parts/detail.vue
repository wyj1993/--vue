<template>
  <div class="app-detail">
    <nav-bar></nav-bar>
    <swiper-box :list="list"></swiper-box>
    <div class="detail">
      <p class="title">{{info.title}}</p>
      <p class="price">￥{{info.price}}</p>
    </div>
    <div class="specs">
      <dl>
        <dt>规格：</dt>
        <dd v-for="(item,i) of specList" :key="i" class="item">{{item}}</dd>
      </dl>
    </div>
    <div class="num">
      <span>数量：</span>
      <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minusGood">-</button>
        <input class="mui-input-numbox" type="number" v-model="val">
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addGood">+</button>
      </div>
    </div>
    <ul class="protect">
        <li><img src="http://127.0.0.1:3000/img/info/good.png" alt="">正品保证</li>
        <li><img src="http://127.0.0.1:3000/img/info/bao.png" alt="">全国联保</li>
        <li><img src="http://127.0.0.1:3000/img/info/position.png" alt="">无忧退换货</li>
        <li><img src="http://127.0.0.1:3000/img/info/sf.png" alt="">顺丰包邮</li>
    </ul>
    <div class="product_info">
        <ul>
            <li :class="{active:idx==0}" @click="handleInfo(0)">商品详情</li>
            <li :class="{active:idx==1}" @click="handleInfo(1)">规格参数</li>
        </ul>
        <div v-show="idx==0">
            <img src="http://127.0.0.1:3000/img/info/p1-info1.jpg" alt="">
            <img src="http://127.0.0.1:3000/img/info/p1-info2.jpg" alt="">
            <img src="http://127.0.0.1:3000/img/info/p1-info3.jpg" alt="">
        </div>
        <div v-show="idx==1">
            <img src="http://127.0.0.1:3000/img/info/p1-pecs.jpg" alt="">
            <img src="http://127.0.0.1:3000/img/info/p1-pecs1.jpg" alt="">
        </div>
    </div>
    <!--底部-->
      <div class="bottom">
        <p class="time">
          <router-link to='/shopCart'>
              <span class="mui-icon-extra mui-icon mui-icon-extra-cart">
              <span class="mui-badge">0</span>
              </span>
          </router-link>
        </p>
          <router-link :to='id' class='btn' @click.native='addCart($event)'>加入购物车</router-link>
          <router-link :to="id" class='buy btn'>立即购买</router-link>
      </div>
  </div>
</template>
<script>
import SwiperBox from "../sub/swiperBox.vue";
import navBar from "../sub/navBar.vue";
import {Toast } from 'mint-ui'
export default {
  data: function() {
    return {
      list: [],
      info:'',
      id:'',
      specList:[],
      val: 1,
      idx:0
    };
  },
  methods: {
    getDetail() {
      var id = this.$route.query.id;
      var url = "http://127.0.0.1:3000/partInfo?id=" + id;
      this.axios.get(url).then(result => {
        this.list = result.data.imgs;
        this.info=result.data.info;
        this.specList =this.info.specs.split("，")
      });
    },
    minusGood() {
      this.val--;
      if (this.val == 0) this.val = 1;
    },
    addGood() {
      this.val++;
    },
    handleInfo(val){
       this.idx=val;
    },
    addCart(e){
          //1:获取二个参数 pid price  uid=1
        var fid = this.$route.query.id;
        var price = this.info.price;
        //2:发送ajax请示
        var url = "http://127.0.0.1:3000/";
        url+="addcart?fid="+fid;
        url+="&price="+price;
        this.axios.get(url).then(result=>{
          console.log(result);
           if(result.data.code == 1){
             Toast("添加成功");
           }else{
             Toast("请登录");
           }
        })
        //3:将商品添加至购物车
        //4:显示提示框 
      }

  },
  created() {
    this.id=this.$route;
    this.getDetail();
  },
  components: {
    "swiper-box": SwiperBox,
    "nav-bar": navBar
  }
};
</script>
<style scoped>
div.detail {
  background: #fff;
  text-align: center;
}
div.detail p.title {
  color: #000;
}
div.detail p.price {
  color: #f67000;
  font-weight: 500;
}
div.specs dl {
  display: flex;
  justify-content: flex-start;
}
div.specs dl dt {
  padding: 10px;
}
div.specs dl dd {
  background: #fff;
  padding: 10px;
  border-radius: 15px;
  margin-left: 15px;
}
div.num{
    display:flex;
    line-height: 1;
}
div.num span{
    padding:10px;
    margin-right:12px;
}
ul.protect{
    list-style:none;
    display:flex;
    background:#fff;
    padding:15px 0 15px 3px;
    justify-content: center;
    margin:15px 0;
}
ul.protect li{
  display:flex;
  margin-right:10px;
  font-size:14px;
  }
ul.protect li  img{
    width:18px;
    height:18px;
    margin-right:5px;
}
div.product_info{
  background:#fff;
}
div.product_info ul{
    display:flex;
}
div.product_info ul li{
    width:50%;
    text-align:center;
    padding:10px;

}
div.product_info img{width:100%;}
.active{
    color:#f55669;
    border-bottom:2px solid #f55669;
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
        color:#000;
        font-size:16px;
        width:70%;
        padding-left:20px;
        position:relative;
    }
    div.bottom a.btn{
        display: block;
        width:50%;
        background:#ff8c4d;
        color:#fff;
        text-align: center;
    }
    div.bottom a.buy{
      background:#f55669;
      width:40%;
    }
    .mui-icon span.mui-badge{
      top:5px;
      left:30%;
    }

</style>


