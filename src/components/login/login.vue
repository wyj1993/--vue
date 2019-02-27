<template>
    <div class="app-login">
        <navBar title="美图账号"></navBar>
        <div class="login">
            <div class="login-main">
              <form>
              用户名：<input type="text" name="uname" v-model="uname"/>
              密码  ：<input type="password" name="upwd" v-model="upwd"/>
              </form>		
                  <mt-button type="primary" size="large" @click="btnLogin">登录</mt-button>
            </div>
            <div class="other">
                <p class="desc">其他方式登录</p>
                <ul>
                  <li class="item">
                      <div>
                        <img src="http://127.0.0.1:3000/img/weibo.png" alt="">
                      </div>
                      <p>新浪微博</p>
                  </li>
                  <li class="item">
                      <div class="blue">
                        <img src="http://127.0.0.1:3000/img/qq.png" alt="">
                      </div>
                      <p>QQ登录</p>
                  </li>
                </ul>
            </div>
            <div class="copyright">
                 <p class="text">
                    ©2017 Meitu, Inc. 美图公司版权所有 闽B2-20040192
                 </p>
             </div>    
        </div>
  
    </div>
</template>
<script>
  //单独引入 Toast
  import {Toast} from "mint-ui"
  export default {
    data(){
      return {
          uname:"",
          upwd:""
          }
    },
    methods:{
      jump(){
        history.go(-1);
      },
      btnLogin(){
        //console.log(123);
        //0:为button按钮绑定点击事件
        //1:获取用户输入用户名和密码
        var u = this.uname;
        var p = this.upwd;
        //console.log(u+"-"+p);
        //2:验证不能为空
        var reg = /^[a-z0-9]{3,12}$/i;
        if(!reg.test(u)){
           Toast("用户名格式不正确，请检查");
           return;
        }
        //3:发送ajax请求
        var url = "http://127.0.0.1:3000/";
        url+="login";
        var formdata=this.qs.stringify({uname:u,upwd:p})
        console.log(formdata);
        this.axios.post(url,formdata).then(result=>{
          if(result.data.code==1){
            //发送ajax请求，获取购物车数量
            //调用更新updateCount()方法
            Toast("登录成功，3s后跳回首页");
            setTimeout(()=>{this.$router.push("/Home")},3000);
            
          }else{
            Toast("用户名或密码有误");
          }
        })
        //4:失败 显示提示框
        //5:成功 跳转home
      }
    }
  }
</script>
<style scoped>
    div.login-header{
      background:#fff;
      display:flex;
      justify-content:space-between;
      padding:12px 10px;
      border-bottom:2px solid #FC3C60;
    }
    div.login{
      background:#EFEFEF;
      padding:40px 30px 0;
    }

    a.mui-icon.mui-icon-home{
      color:#000;
    }
    button.mint-button--primary{
      background:#FC3C60;
      margin-bottom:15px;
    }
    div.other ul{
      display:flex;
      padding:0;

    }
    div.other  li.item{
      display:flex;
      flex-direction:column;
      margin-right:25px;
    }
     div.other  li.item img{
       width:100%;
       height:100%;
     }
     div.other li.item div{
       width:60px;
       height:60px;
       background:#FC3C60;
       padding:10px;
       border-radius:50%;
     }
      div.other li.item div.blue{
        background:#1578e8;
      }
      div.copyright p.text{
        font-size:12px;
        margin-top:100px;
        text-align:center;
      }
</style>