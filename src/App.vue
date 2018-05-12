<template>
  <div class="app">
     <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" ref="selectState" :active-name="1"  :name="getCurrentState">
                    <router-link to="/">
                        <div class="layout-logo">

                        </div>
                    </router-link>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Badge dot style="right: 1px;">
                                <Icon type="ios-bell"></Icon>
                            </Badge>
                            消息
                        </MenuItem>
                        <MenuItem name="2">
                            zrrrr
                            <Icon type="person"></Icon>
                        </MenuItem>
                        <router-link to="/login">
                            <MenuItem name="3">
                                <Icon type="log-in"></Icon>
                                登录
                            </MenuItem>
                        </router-link>
                        <router-link to="/register">
                            <MenuItem name="4">
                                <Icon type="ios-email"></Icon>
                                注册
                            </MenuItem>
                        </router-link>
                        <MenuItem name="5">
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
          select:''
      }
  },
  computed :{
      getCurrentState (){
          return this.$store.state.currentState
      }
  },
  created (){
  },
  methods :{
      aaa(name){
          alert(name)
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
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 475px;
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
</style>
