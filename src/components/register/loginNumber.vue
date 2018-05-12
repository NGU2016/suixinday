<template>
  <div>
    <div class="login-input-number">
        <Input icon="ios-person" v-model="username"  placeholder="手机号/昵称/会员名"  style="width: 300px"/><br>
    </div>
    <div class="login-input-password">
        <Input icon="ios-locked" type="password" v-model="password"  placeholder="密码"  style="width: 300px"/><br>
    </div>
    <div class="login-input-password">
        <Checkbox v-model="checkboxProtocol">记住密码</Checkbox>
    </div>
    <div class="login-button">
        <Button style="width: 300px" type="primary" @click="login">登录</Button>
    </div>
    <div class="login-forget-password">
        忘记密码
    </div>
    <router-link to="/register">
        <div class="login-register">
            新用户注册<Icon style="margin-left: 3px;" type="ios-fastforward"></Icon>
        </div>
    </router-link>
  </div>
</template>
<script>
export default {
    data (){
        return {
            username:'',
            password:'',
            checkboxProtocol:''
        }
    },
    methods:{
      login(){

      }
  }
}
</script>

<style scoped>
.login-input-number{
    padding-top: 90px;
    padding-left: 50px;
}
.login-input-password{
    padding-left: 50px;
    padding-top: 15px;
}
.login-button{
    padding-left: 50px;
    padding-top: 15px;
}
.login-forget-password{
    float: left;
    margin-left: 53px;
    margin-top: 15px;
}
.login-register{
    float: right;;
    margin-top: 15px;
    margin-right: 50px;
}
</style>


