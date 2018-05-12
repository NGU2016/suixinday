import Vue from 'vue'
import Router from 'vue-router'
import Dashbord from '../components/dashbord'
import MainContent from '../components/mainContent'
import ChinaMap from '../components/dashbordCom/chinaMap'
import cityInfo from '../components/scenicArea/cityInfo'
import Register from '../components/register/register'
import Login from '../components/register/login'
import Telephone from '../components/register/loginNumber'
import Scan from '../components/register/loginScan' 
import Strategy from '../components/scenicArea/Strategy'
Vue.use(Router)

export default new Router({
  routes:[{
    path:'/',
    component:Dashbord,
    children:[{//Dashbord的子路由，渲染children子组件，因为这是子组件能匹配到的最高路由
      path:'',
      component:ChinaMap
    },{
      path:'/city/:id',
      name:'city',
      component:cityInfo
    },{
      path:'/strategy/:id',
      name:'strategy',
      component:Strategy
    }]
  },{//和跟路劲/同级，当访问/register时会将app.vue下得routerView替换
    path:'/register',
    component:Register,
    name:'register'
  },{
    path:'/login',
    component:Login,
    name:'login',
    children:[{
      path:'/login',
      component:Telephone
    },{
      path:'/login/telephone',
      component:Telephone
    },{
      path:'/login/scan',
      component:Scan
    }]
  }]
})
