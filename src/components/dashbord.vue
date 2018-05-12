<template>
  <div>
      <Search></Search>
      <router-view></router-view>
      <showMessage></showMessage>
  </div>
</template>

<script>
import Search from './dashbordCom/search'
import showMessage from './dashbordCom/show'
import ChinaMap from './dashbordCom/chinaMap'
export default {
  name : 'dashbord',
  components:{
    Search,
    showMessage,
    ChinaMap
  }
}
</script>

<style scoped>

</style>


