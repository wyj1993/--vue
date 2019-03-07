<template>
  <div class="app-cart">
    <nav-bar title="购物车"></nav-bar>
    <div class="headPlaceHolder"></div>
    <div class="cartAll">
      <div class="control">
        <h4>
          <input type="checkbox" @click="selAll($event)" v-model="allCb"> 全选
        </h4>
        <span>X</span>
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,i) of list" :key="i">
          <input type="checkbox" v-model="item.cb" @click="modify" :data-i="i">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              {{item.title}}
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              <p class="price">￥{{item.price}}</p>
              <div class="btn">
                <div class="mui-numbox">
                  <button
                    class="mui-btn mui-btn-numbox-minus"
                    type="button"
                    :data-idx="item.id"
                    @click="minusGood"
                    :data-i="i"
                  >-</button>
                  <input class="mui-input-numbox" type="number" :value="item.val"   >
                  <button
                    class="mui-btn mui-btn-numbox-plus"
                    type="button"
                    :data-idx="item.id"
                    :data-i='i'
                    @click="addGood"
                  >+</button>
                </div>
                <span
                  class="mui-icon mui-icon-trash"
                  @click="delCartItem($event,item.id)"
                  :data-idx="i"
                ></span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="total">
      <mt-button class="del" @click="delAllSelItem">删除选中的商品</mt-button>
      <div class="all">
        <div>
          <p>
            共
            <span class="numAll">{{$store.getters.optCartCount}}</span>件商品
          </p>
          <p>
            合计:
            <span class="price">￥180.00</span>
          </p>
        </div>
        <mt-button type="primary">结算</mt-button>
      </div>
    </div>
    <!-- <tab-bar></tab-bar> -->
  </div>
</template>
<script>
import navBar from "../sub/navBar.vue";
import btnBuy from "../sub/button.vue";
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      list: [],
      allCb: false,
    };
  },
  methods: {
    getList() {
      var url = "http://127.0.0.1:3000/cartlist";
      this.axios.get(url).then(result => {
        var rows = result.data.data;
        for (var item of rows) {
          item.cb = false;
          item.val=item.count;
        }
        this.list = rows;
        this.$store.commit("updateCount", this.list.length);
      });
    },
    delCartItem(e, id) {
      var idx = e.target.dataset.idx;
      var url = "http://127.0.0.1:3000/delCartItem?id=" + id;
      this.axios.get(url).then(result => {
        if (result.data.code == 1) {
          this.list.splice(idx, 1);
          this.$store.commit('updateCount',this.list.length);
          Toast("删除成功");
        } else {
          Toast("删除失败");
        }
      });
    },
    selAll(e) {
      //单击全选按钮，按下，别的也全都按下
      var cbAll = e.target.checked;
      for (var item of this.list) {
        item.cb = cbAll;
      }
    },
    modify(e) {
      var i = e.target.dataset.i;
      var sum = 0;
      this.list[i].cb = e.target.checked;
      for (var item of this.list) {
        if (item.cb) {
          sum += 1;
        }
      }
      if (sum == this.list.length) {
        this.allCb = true;
      } else {
        this.allCb = false;
      }
    },
    delAllSelItem() {
      var html = "";
      for (var item of this.list) {
        if (item.cb) {
          html += item.id + ",";
        }
      }
      html = html.substring(0, html.length - 1);
      var url = "http://127.0.0.1:3000/delMItem?ids=" + html;
      this.axios.get(url).then(result => {
        if (result.data.code == 1) {
          this.getList();
          Toast("删除成功");
        } else {
          Toast("删除失败");
        }
      });
    },
    minusGood(e) {
      var id = e.target.dataset.idx;
      var i=e.target.dataset.i;//数组下标
      if(this.list[i].val>1){
        this.list[i].val--;
      }else{
        Toast('不能再少了');
        return
      }
      var url = "http://127.0.0.1:3000/handleItem?id=" + id + "&count="+this.list[i].val;
      this.axios.get(url).then(result => {
        console.log(result);
      });
    },
    addGood(e) {
      var id = e.target.dataset.idx;//商品id
      var i=e.target.dataset.i;//数组下标
      this.list[i].val++;
      // this.list[i].val=10;
      // console.log(this.list[i].val)
      var url = "http://127.0.0.1:3000/handleItem?id=" + id + "&count="+this.list[i].val;
      this.axios.get(url).then(result => {
        if(result.data.code==1){
          Toast('添加成功')
        }
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
div.cartAll {
  margin-bottom: 62px;
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
  width: 50%;
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

.del.mint-button--default {
  font-size: 14px;
  height: 30px;
  background: #ccc;
}
</style>


