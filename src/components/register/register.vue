<template>
    <div class="register-center">
        <div class="register-corn">
            <div class="register-login">
                已有suixinday账号了?
                <router-link to="/login">
                    <div class="register-login-link">
                        登录
                    </div>
                </router-link>
            </div>
        </div>
        <div class="register-top">
            <div class="register-code">suixinday 账号注册</div>
        </div>
        <div class="register-content">
            <!-- <p>当前正在进行第 {{ current + 1 }} 步</p> -->
                <Steps :current="current"  class="register-next">
                    <Step title="用户名设置"></Step>
                    <Step title="密码设置"></Step>
                    <Step title="完成"></Step>
                </Steps>
                <div >
                    <div class="register-input" v-if="0==current">
                        <div class="register-input-style-number">
                            <div class="register-label-number"> 手机号码:</div>
                            <Input v-model="tnumber"  placeholder="请输入手机号码" clearable style="width: 300px"/><br>
                        </div>
                        <div class="register-input-style">
                            <div class="register-label">验证码:</div>
                            <Input  v-model="marsks"  placeholder="验证码" clearable style="width: 300px"/><br>
                        </div>
                        <div class="register-input-style">
                            <div class="register-label">校验码:</div>  
                            <Input  v-model="marskNumber"  placeholder="校验码" clearable style="width: 300px"/><br>
                             <Button  class="register-daymin" type="primary" @click="ok">获取动态密码</Button>
                        </div>
                        <div class="register-input-style">
                            <div class="register-label">邀请码:</div>
                            <Input  v-model="inviteMask"  placeholder="邀请码" clearable style="width: 300px"/>
                        </div>
                        <div class="register-checkbox">
                                <Checkbox v-model="checkboxProtocol"></Checkbox>
                                <protocol></protocol>
                        </div>
                    </div>
                    <div class="register-input" v-if="1==current">
                        <div class="register-input-style">
                            <div class="register-label"> 用户名:</div>
                            <Input v-model="password"  placeholder="输入用户名" clearable style="width: 300px"/><br>
                        </div>
                        <div class="register-input-style-number">
                            <div class="register-label-number"> 输入密码:</div>
                            <Input v-model="password"  placeholder="输入密码" clearable style="width: 300px"/><br>
                        </div>
                        <div class="register-input-style-number">
                            <div class="register-label-number">确认密码:</div>
                            <Input  v-model="cpassword"  placeholder="确认密码" clearable style="width: 300px"/><br>
                        </div>
                        <div class="register-checkbox">
                           <Checkbox v-model="showPassword">显示密码</Checkbox>
                        </div>
                    </div>
                    <div class="register-input" v-if="2==current">
                        <div style="background:#eee;padding: 20px;width: 500px;">
                            <Card :bordered="false">
                                <p slot="title">suixinday 账号注册成功！</p>
                                <div class="register-success">
                                <img src="../../assets/img/system/success.jpg" alt="">
                                <p class="register-success-font">恭喜，您已成功注册suixinday账号！</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                <Button class="register-next-button" type="primary" @click="next">{{nextButton}}</Button>
                </div>
        </div>
    </div>
</template>

<script>
import protocol from './protocol'
export default {
  data () {
            return {
                current: 0,
                inviteMask:'',//邀请码
                tnumber:'',//号码
                marsks:'',//验证码
                marskNumber:'',//校验码
                checkboxProtocol:'',//协议
                password:'',//密码
                cpassword:'',//确认密码
                showPassword:'',//是否显示密码
                nextButton:'下一步'
            }
        },
        methods: {
            next () {
                /* console.log(this.current)
                if (this.current == 2) {
                    this.nextButton='跳转登录界面'
                } else { */
                if(this.current<2){
                    this.current += 1;
                }else{
                    //这里跳转至登录界面
                    this.$router.push({path:'/login'})
                }
               /*  } */
                if(this.current==2){
                    this.nextButton='跳转登录界面'
                }
            },
            ok () {
                this.$Message.info('密码已发送至您的手机，请注意查收！');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        },
        mounted(){
            this.$store.commit("setCurrentSate",4)
        },
        components:{
            protocol
        }
}
</script>

<style scoped>
.register-center{
    background-color: white;
    width: 60%;
    height: 700px;
    margin-left: 20%;
    margin-top: 3%;
    position: absolute;
    box-shadow:5 2 3px #fff;
}
.register-top{
    width: 100%;
    height: 10%;
    top: 0px;
    background-color: #43b413;
}
.register-corn{
    width: 100%;
    height: 50px;
    background: #1e345d;
}
.register-login{
    float: right;
    width: 226px;
    margin-top: 10px;
    font-size:initial;
    color: white;
}
.register-login-link{
    display: inline;
    color: white;
    border:1px solid white;
    padding:5px;
    font-size: smaller;
}
.register-code{
    width:50%;
    margin-left :38%;
    font-size :xx-large;
    padding-top:7px;
    color:white;
}
.register-content{
    width: 100%;
    height: 580px;
    padding-top: 40px;
}
.register-next-button{
    margin-left:38%;
    margin-top: 400px;
    width: 300px;
}
.register-next{
    margin-left: 24%;
    width: 70%;
}
.register-input{
    padding-left:32%;
    position:absolute;
    margin-top:5%;
    font-size: larger;
    width: 100%;
}
.register-input-style{
    margin-top:2%;
    display: flex;
}
.register-input-style-number{
    margin-top:2%;
    display: flex;
}
.register-input-style-check{
    margin-left:2%;
    margin-top:2%;
    display: flex;
}
.register-label{
    margin-top:4px;
    margin-right:19px;
}
.register-label-number{
    margin-top:4px;
    margin-right:4px;
}
.register-daymin{
    margin-left: 20px;
}
.register-checkbox{
    margin-left:66px;
    margin-top:14px;
    display: -webkit-box;
}
.register-success{
    display: -webkit-box;
}
.register-success-font{
    margin-top:10px;
    margin-left:7px;
}
</style>


