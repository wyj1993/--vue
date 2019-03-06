<template>
  <div class="app-cart">
    <nav-bar title="购物车"></nav-bar>
    <div class="headPlaceHolder"></div>
    <div class='cartAll'>
      <div class="control">
        <h4>
          <input type="checkbox"> 全选
        </h4>
        <span>X</span>
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,i) of list" :key="i">
          <input type="checkbox">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              {{item.title}}
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              <p class="price">￥{{item.price}}</p>
              <div class="btn">
                <btn-buy :num="valNum"></btn-buy>
                <span class="mui-icon mui-icon-trash"></span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="total">
      <p>
        共
        <span class="numAll">5</span>件商品
      </p>
      <div class="all">
        <p>
          合计:
          <span class="price">￥180.00</span>
        </p>
        <mt-button type="primary">结算</mt-button>
      </div>
    </div>
    <!-- <tab-bar></tab-bar> -->
  </div>
</template>
<script>
import navBar from "../sub/navBar.vue";
import btnBuy from "../sub/button.vue";
export default {
  data: function() {
    return {
      list: [],
      valNum: 1
    };
  },
  methods: {
    getList() {
      var url = "http://127.0.0.1:3000/cartlist";
      this.axios.get(url).then(result => {
        this.list = result.data.data;
        console.log(this.list);
      });
    }
  },
  created() {
    this.getList();
  },
  components: {
    "nav-bar": navBar,
    "btn-buy": btnBuy
  }
};
</script>
<style scoped>
/* div.header{
    position: fixed;
} */
div.cartAll{
    margin-bottom:62px;
}
div.control {
  padding: 5px 15px;
  background: #fff;
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
}
.mui-table-view img.mui-media-object {
  max-width: 100px;
  height: 100px;
}
span.numAll,
p.price {
  color: #f67000;
  font-weight: 600;
}
div.btn {
  display: flex;
  justify-content: space-between;
}
span.mui-icon-trash {
  margin-top: 10px;
}
div.total {
  display: flex;
  position: fixed;
  background: #fff;
  width: 100%;
  bottom: 0px;
  padding: 5px 10px;
  justify-content: space-between;
}
div.all {
  display: flex;
  width: 40%;
  justify-content: space-between;
  color: #000;
}
span.price {
  color: #f67000;
  font-weight: 600;
}
button.mint-button--primary {
  background: #f67000;
  border-radius: 20px;
}
</style>


