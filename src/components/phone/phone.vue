<template>
  <div class="app-phone">
    <navBar title="美图手机"></navBar>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.id">
        <router-link :to="'/PhoneInfo?pid='+item.id"  class="wrap">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">{{item.title}}
            <p class="mui-ellipsis">{{item.phone_desc}}</p>
            <p class="price">￥ {{item.price}}起</p>
          </div>
        </router-link>
      </li>
    </ul>
    <mt-button type="primary" size="large" @click="getPhoneList">加载更多</mt-button>

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
    },
    jump(){
      history.go(-1);
    }
  },
  created() {
    this.getPhoneList();
  },
};
</script>
<style scoped>
p.head{
  position:absolute;
  top:15px;
  left:42%;
  font-size:18px;
  color:#000;
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


