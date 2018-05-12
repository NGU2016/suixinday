<template>
    <div class="strategyInfo">
        <Tabs type="card" :value="activeType">
            <TabPane label="游玩攻略" name="strategy">
                <div class="strategy-content1">
                        撒旦法师打发斯蒂芬
                        asdfasdf
                        <div>
                        阿斯蒂芬
                        </div>
                        <div>
                        阿斯蒂芬
                        </div>
                        <div>
                        阿斯蒂芬
                        </div>
                        <div>
                        阿斯蒂芬
                        </div>
                        <div>
                        阿斯蒂芬
                        </div>
                </div>
            </TabPane>
            <TabPane label="网友热评" name="comment">
                <div class="strategy-content1">

                </div>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
   name:'strategy',
   data (){
       return {
           activeType:"comment"
       }
    },
    mounted (){
        console.log(this.$route.params)
    },
    watch :{
        beforeRouteUpdate  (to,from){
            console.log(this.$route.params)
        }
    }
}
</script>

<style scoped>
.strategyInfo{
    float: right;
    width : 72%;
    height: 800px;
    margin-right: 5px;
}
.strategy-content1{
    background-color: white;
    width: 100%;
    height: 50px;
    margin-top:-16px;
    overflow-y: auto;
}
</style>


