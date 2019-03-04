<template>
    <div>
        <h3>购物村</h3>
        <h4>{{a|convertDate}}</h4>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            a:""
        }
    },
    methods:{
        getData(){
            var date= new Date();
            console.log(date);
            this.a=date;
           
        }
    },
    created(){
        this.getData()
    }
}
</script>

