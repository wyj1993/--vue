<template>
  <div class="app-swiper">
    <mt-swipe>
      <mt-swipe-item v-for="(item,i) in list" :key="i" >
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:['list']
};
</script>
<style scoped>
    div.app-swiper{
        height:200px;
    }
</style>