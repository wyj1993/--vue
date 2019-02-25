<template>
  <div class="app-phone">
    <div class="phone-header">
        <span class="mui-icon mui-icon-arrowleft"></span>
        <span>美图手机</span>
        <span class="mui-icon mui-icon-home"></span>
    </div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.id">
        <router-link to="" class="wrap">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">{{item.title}}
            <p class="mui-ellipsis">{{item.phone_desc}}</p>
            <p class="price">￥ {{item.price}}起</p>
          </div>
        </router-link>
      </li>
    </ul>
    <mt-button type="primary" size="large">加载更多</mt-button>
    <nav class="mui-bar mui-bar-tab">
    <a class="mui-tab-item mui-active" href="#tabbar">
    <span class="mui-icon mui-icon-home"></span>
    <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item" href="#tabbar-with-chat">
    <span class="mui-icon mui-icon-contact">
    </span>
    <span class="mui-tab-label">会员</span>
    </a>
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
  data() {
    return {
      list: [],
      pno: 0,
      pageSize: 5
    };
  },

  methods: {
    getPhoneList() {
      this.pno++;
      var url = "http://127.0.0.1:3000/phoneList?pno=" + this.pno;
      url += "&pageSize=" + this.pageSize;
      this.axios.get(url).then(result => {
        var rows = this.list.concat(result.data.data);
        this.list = rows;
      });
    }
  },
  created() {
    this.getPhoneList();
  }
};
</script>
<style scoped>
div.phone-header{
    display:flex;
    background:#fff;
    justify-content:space-between;
    padding:14px 10px ;
}
.mui-table-view img.mui-media-object{
    max-width:96px;
    height:96px;
}
li.mui-media .wrap{
    display:flex;
    align-items: center;
}
li.mui-media .mui-media-body{
     font-weight: 700;
     margin-left:1rem;
}
li.mui-media .mui-ellipsis{
    font-weight: 400;
    margin:5px 0;
}
li.mui-media p.price{
    color:#f55669;
    font-weight: 400;
}
</style>


