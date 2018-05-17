<template>
  <div>
    <!-- ref=loginValidate: 用于调用子组件的validate方法进行校验 -->
    <!-- rules="ruleValidate"：用于给子组件传递校验规则变量，当值时变量时需要加: -->
    <!--  -->
    <Form ref="loginValidate" :model="loginValidate" :rules="loginRuleValidate" >
        <!-- <div class="login-input-number">
            <Input icon="ios-person" v-model="username"  placeholder="手机号/昵称/会员名"  style="width: 300px"/><br>
        </div> -->
        <FormItem  prop="name" class="login-input-number">
            <Input icon="ios-person" v-model="loginValidate.name" placeholder="手机号/昵称/会员名"></Input>
        </FormItem>
        <!-- <div class="login-input-password">
            <Input icon="ios-locked" type="password" v-model="password"  placeholder="密码"  style="width: 300px"/><br>
        </div> -->
        <FormItem  prop="password" class="login-input-password">
            <Input icon="ios-locked" type="password" v-model="loginValidate.password" placeholder="密码"></Input>
        </FormItem>
        <!-- <div class="login-input-password">
            <Checkbox v-model="checkboxProtocol">记住密码</Checkbox>
        </div> -->
        <FormItem  prop="checkPW" class="login-check-box">
            <CheckboxGroup v-model="loginValidate.checkPW">
                <Checkbox label = "记住密码">
                </Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem class="login-button">
            <Button style="width: 300px" type="primary" @click="login('loginValidate')">登录</Button>
        </FormItem>
    </Form>
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
            checkboxProtocol:'',
            loginValidate:{
                name:'',
                password:'',
                checkPW:[]
            },
            loginRuleValidate:{
                name :[
                    {required: true, message: '请输入手机号/昵称/会员名', trigger: 'blur' },
                    {type :'string' ,max : 15,message: '最大长度为15', trigger: 'change'}
                ],
                password : [
                    {required: true, message: '请输入密码', trigger: 'blur' },
                    {type :'string' ,max : 15,message: '最大长度为15', trigger: 'change'}
                ],
                checkPW : [
                    {required: false,type: 'array'}
                ]
            }
        }
    },
    methods:{
      login(name){
          this.$refs[name].validate((valid) => {//调用组件里面的验证方法，适用于提交多个表单时的区分
                if (valid) {
                    console.log(this.loginValidate.name)
                        if (this.loginValidate.name=='lq' && this.loginValidate.password=='lq'){
                            this.$store.dispatch("actionSetCurrentUser",{name:'lq',password :'lq'})
                            this.$router.push({path:'/'})
                        }else{
                            this.$Message.error('用户名或密码错误!')
                        }
                    } else {
                        this.$Message.error('用户名或密码为空!')
                    }
          })
      }
  }
}
</script>

<style scoped>
.login-input-number{
    padding-top: 90px;
    padding-left: 50px;
    margin-bottom: 15px;
    width: 350px;
}
.login-input-password{
    padding-left: 50px;
    padding-top: 15px;
    margin-bottom: 15px;
    width: 350px;
}
.login-check-box{
    padding-left: 50px;
    margin-bottom: 10px;
}
.login-button{
    padding-left: 50px;
    padding-top: 15px;
    margin-bottom: 0px;
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


