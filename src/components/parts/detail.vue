<template>
  <div class="app-detail">
    <nav-bar></nav-bar>
    <swiper-box :list="list"></swiper-box>
    <div class="detail">
      <p class="title">{{listItem.title}}</p>
      <p class="price">￥{{listItem.price}}</p>
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
  </div>
</template>
<script>
import SwiperBox from "../sub/swiperBox.vue";
import navBar from "../sub/navBar.vue";
export default {
  data: function() {
    return {
      list: [],
      listItem: "",
      specList: [],
      val: 1,
      idx:0
    };
  },
  methods: {
    getDetail() {
      var id = this.$route.query.id;
      var url = "http://127.0.0.1:3000/partInfo?id=" + id;
      this.axios.get(url).then(result => {
        this.list = result.data.data;
        this.listItem = this.list[0];
        var specs = this.listItem.specs;
        this.specList = specs.split("，");
        console.log(this.specList[0]);
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
    }
  },
  created() {
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
  font-size: 20px;
}
div.detail p.price {
  color: #f67000;
  font-weight: 500;
  font-size: 18px;
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
    padding:15px 0;
    justify-content: center;
    margin:15px 0;
}
ul.protect li{display:flex;margin-right:10px;}
ul.protect li  img{
    width:18px;
    height:18px;
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

</style>


