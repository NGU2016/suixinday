<template>
  <div class="app">
     <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" ref="selectState" :active-name="1"  :name="getCurrentState">
                    <router-link to="/">
                        <div class="layout-logo">
                            <div class="layout-logos">
                                    <span style="font-style:oblique;font-size:x-large;">suixinday</span>
                            </div>
                        </div>
                    </router-link>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Badge dot style="right: 1px;">
                                <Icon type="ios-bell"></Icon>
                            </Badge>
                            消息
                        </MenuItem>
                        <MenuItem name="2" v-if="getCurrentUser.name">
                            {{getCurrentUser.name}}
                            <Icon type="person"></Icon>
                        </MenuItem>
                        <router-link to="/login" v-if="!getCurrentUser.name">
                            <MenuItem name="3">
                                <Icon type="log-in"></Icon>
                                登录
                            </MenuItem>
                        </router-link>
                        <router-link to="/register" v-if="!getCurrentUser.name">
                            <MenuItem name="4">
                                <Icon type="ios-email"></Icon>
                                注册
                            </MenuItem>
                        </router-link>
                        <MenuItem name="5" @click="">
                            <Icon type="log-out"></Icon>
                            注销
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <Bottom></Bottom>
</div>
</template>

<script>
import Bottom from './components/bottom'
export default {
  name: 'App',
  components:{
    Bottom
  },
  data (){
      return {
          select:'',
          logoutInfo:false
      }
  },
  computed :{
      getCurrentState (){
          return this.$store.state.currentState
      },
      getCurrentUser (){
           return this.$store.state.currentUser
      },
      logoutInfoState (){
            return this.logoutInfo
      }
  },
  mounted (){
  },
  methods :{
      logOut (){
          this.logoutInfo =true;
      },
      OK (){
           this.$store.dispatch("actionSetCurrentUser",{})
      },
      CANCEL (){
          
      }
  },
  watch:{
      "$route" (){
      }
  }
}
</script>

<style scoped>
.app{
  background-color: #1e345d;
  height: -webkit-fill-available;
}
.layout{
    background: #f5f7f9;
    height: 53px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 130px;
    height: 40px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 14px;
    left: 20px;
}
.layout-nav{
    margin: 0 auto;
    float: right;
}
.demo-badge{
        width: 20px;
        height: 20px;
        background: #eee;
        border-radius: 1px;
        display: inline-block;
}
.layout-logos{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    bottom:13px;
    left: 14px;
}
</style>
