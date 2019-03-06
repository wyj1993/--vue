<template>
    <div class="num">
      <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minusGood">-</button>
        <input class="mui-input-numbox" type="number" v-model="val">
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addGood">+</button>
      </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            val:1
        }
    },
    props:['num'],
    methods:{
         minusGood() {
      this.val--;
      if (this.val == 0) this.val = 1;
    },
    addGood() {
      this.val++;
    },
    },
    created(){
        this.val=this.num;
    }

}
</script>
<style>

</style>


