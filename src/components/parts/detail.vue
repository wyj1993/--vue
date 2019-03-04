<template>
    <div class="app-detail">
        <swiper-box :list='list'></swiper-box>
    </div>
</template>
<script>
import SwiperBox from '../sub/swiperBox.vue'
export default {
    data:function(){
        return {
            list:[]
        }
    },
    methods:{
        getDetail(){
            var id=this.$route.query.id;
            var url="http://127.0.0.1:3000/partInfo?id="+id;
            this.axios.get(url).then(result=>{
                console.log(result.data.data);
                this.list=result.data.data;
            })
        }
    },
    created(){
        this.getDetail();
    },
    components:{
       'swiper-box':SwiperBox,
    }

}
</script>
<style>

</style>


