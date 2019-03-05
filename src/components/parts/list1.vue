<template>
    <div class="goods-list listContent">
        <ul>
            <li class="content-item" v-for="item of goodlist1" :key="item.id" :data-id="item.id" @click="jumpDetail($event)">
                <img  :src="item.img_url">
                <p class="title">{{item.title}}</p>
                <p class="price">￥{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                goodlist1:[],
            }
        },
        methods:{
            getList(){
                var pids="1";
                var url="http://127.0.0.1:3000/partlist?pid="+pids;
                this.axios.get(url).then(result=>{
                    this.goodlist1=result.data.data;
                })
            },
            jumpDetail(e){
                var id=e.currentTarget.dataset.id;
                this.$router.push('/detail?id='+id)
            }   

        },
        created() {
            this.getList();
        },
    }
</script>
<style scoped>
    .listContent ul{
        margin:0;
        padding:0;
        display:flex;
        flex-wrap:wrap;
    }
    span.part-item{
        box-sizing:border-box;
        padding:10px;
    }
    span.part-item:active{
        background:#f55669;
        color:#fff;
        border-radius:10px;
    }
    .listContent .content-item{
        display:flex;
        flex-direction:column;
        width:50%;
        background:#fff;
        align-items:center;
        justify-content:center;
        border-bottom:1px solid #ccc;
        border-right:1px solid #ccc;
        height:220px;
        box-sizing:border-box;
        }
    .listContent .content-item img{
        width:120px;
        height:120px;
    }
     .listContent .content-item p.price{
         color:#f55669;
     }
</style>