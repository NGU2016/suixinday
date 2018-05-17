<template>
  <div class="showMessage" id="showMessage">
      <div class="suixin1">
        <span class="fontStyle">{{hotCidtyName}}热门景点排行</span>
      </div>
      <topScenics></topScenics>
  </div>
</template>

<script>
import topScenics from "../scenicArea/topScenic"
export default {
    name :"ahowMessage",
    components:{
        topScenics
    },
    computed :{
        hotCidtyName (){
            return this.$store.state.hotCityName
        }
    }
}
</script>

<style scoped>
.showMessage{
    background-color: #1e345d;
    width: 27%;
    height: 890px;
    margin-left: 3px;
}
.fontStyle{
    color:aliceblue;
    display: inline;
    font-size:26px;
    margin-left :33%;
}
.suixin1{
    padding-top:2.5%;
}
</style>