<template>
    <div>
    <div class="login-style">
            <div class="login-div">
                <router-link to="/login/telephone">
                    <div class="login-tab-telephone">
                        <p class="login-tab-font">账户登录</p> 
                    </div>
                </router-link>
                <router-link to="/login/scan">
                    <div class="login-tab-scan">
                        <p class="login-tab-font">扫码登录</p>
                    </div>
                </router-link>
                <div class="login-content">
                    <router-view></router-view>
                </div>
                <div class="login-buttom">
                    <p class="login-other">其他登录方式</p>
                    <div>
                        <div class="login-type">微信</div>
                        <div class="login-type">QQ</div>
                        <div class="login-type">微博</div>
                        <div class="login-type">支付宝</div>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$store.commit("setCurrentSate",3)
    }
}
</script>

<style scoped>
.login-style{
    background-image: url('../../assets/img/system/login.jpg');
    background-size: 100% auto;
    width: 100%;
    height: 700px;
    margin-top: 70px;
}
.login-div{
    width: 400px;
    height: 401px;
    margin-left:60%;
    position:absolute;
    margin-top: 8%;
    background-color: #feeed5;
    box-shadow: 10px 10px 5px #888888;
}
.login-tab-telephone{
    height: 60px;
    width: 50%;
    float: left;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}
.login-tab-scan{
    float: right;
    width: 50%;
    height: 60px;
    border-bottom: 1px solid white;
}
.login-content{
    width: 100%;
    height: 340px;
    border-bottom: 1px solid white;
}
.login-tab-font{
    font-size:x-large;
    font-weight:100;
    margin-left:51px;
    margin-top:13px;
}
.login-other{
    margin-left: 40%;
}
.login-type{
    float: left;
    margin-left: 60px;
    margin-top: 10px;
}
</style>

