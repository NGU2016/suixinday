<template>
  <div class="cityInfo">
      <!-- <Spin size="large" v-if="isLoading" class="loading"></Spin> -->
      <Scroll :on-reach-bottom="handleReachBottom" height=800 >
        <Card v-for="(item, index) in cityInfo" :key="index" style="margin: 0 30px 10px 0px">
            <div>
                <h1>{{item.name}}</h1>
            </div> <!-- 景点名称 -->
            <div class="itemsInfo">
                <div class="loopItems">
                    <Carousel loop  :autoplay-speed=3000  v-model="value2" class="loopItems">
                        <CarouselItem v-for="(imgs,index1) in item.img" :key="index1+index">
                            <div :style="{backgroundImage:'url(' + require('../../assets/img/'+imgs) + ')',
                            backgroundSize:'750px 100%'}" class="loopItems"></div>
                        </CarouselItem>
                    </Carousel>
                </div>  <!-- 景点图片 --> 
                <div class="about">
                    <h2>关于{{item.name}}</h2>
                    <Rate disabled  show-text v-model="item.des.core" style="margin-bottom:10px;">
                        <span style="color: #f5a623">{{ item.des.core }}分</span>
                    </Rate>
                    <router-link :to="{ name: 'strategy', params: {id:item.name,type:'commenf'}}" style="display:-webkit-inline-box">
                        <Icon type="android-textsms" :size=20 style="margin-left:40px;">
                        </Icon>
                        <p style="margin-left:5px;">7399条热门评论</p>
                    </router-link>
                    <div>
                        <h3>大家印象:</h3>
                        <p style="width:450px;">{{item.des.description1}}
                            <div>
                                <Button size="small" style="width:60px; height:20px;" type="primary" @click="desInfo = true">详细介绍</Button>
                                <Modal
                                    v-model="desInfo"
                                    title="详细介绍"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <p>{{item.des.description1}}</p>
                                </Modal>
                            </div>
                        </p>
                    </div>
                    <div style="margin-top:10px;">
                        <h3>游玩攻略:</h3>
                        <p style="width:450px;"><h4 style="display:inline;">公交：</h4>{{item.enjoyplan.jiaotong}}</p>
                        <div v-for="(type,key) in item.enjoyplan.tips" :key="key">
                            <div v-if="key<4">
                                <div v-if="typeof(type)==='object'" style="display:-webkit-inline-box">
                                    <h4>{{type.title}}</h4>
                                    <p style="width:450px;">{{type.des}}</p>
                                </div>
                                <p v-if="!typeof(type)==='object'">type</p>
                            </div>
                            <!-- <h3 v-if="typeof(items) == Object">
                                <p v-for="title in items">
                                    {{title}}
                                </p>
                            </h3> -->
                            <!-- {{typeof(items) =="object"}} -->
                                <!-- <div>{{type.title}}</div> -->
                        </div>
                        <div style="margin-left:40%;margin-top:10px;">
                            <router-link :to="{ name: 'strategy', params: {id:item.name,type:'strategy'}}">
                                <a href="">[查看更多]</a>
                            </router-link>
                        </div>
                    </div>
                </div>  <!--  景点描述 -->
            </div><!-- 景点图片和描述 -->
            <div></div> <!-- 景点旅游攻略 -->
        </Card>
    </Scroll>
  </div>
</template>

<script>
export default {
    data (){
      return {
          cityName:this.$route.params,
          currentCityInfo:this.$store.state.currentCityInfo,
          isLoading:true,
          value2:0,
          desInfo:false
        }
     },
    watch:{
      $route (to,from){
        }
    },
    computed:{
        cityInfo (){
            this.isLoading=false;
            return this.$store.state.currentCityInfo;
        }
    },
    methods: {
        handleReachBottom () {
            return new Promise(resolve => {
                setTimeout(() => {
                    const last = this.list1[this.list1.length - 1];
                    for (let i = 1; i < 11; i++) {
                        this.list1.push(last + i);
                    }
                    resolve();
                }, 2000);
            });
        },
        ok (){

        },
        cancel (){

        }/* ,
        displayInfo (items){
            alert(1)
            console.log(items)
            if(typeof(items)=="Object"){
                return true;
            }else{
                return false;
            }
        } */
    },
    mounted (){
    },
    beforeCreate (){
    },

}
</script>

<style scoped>
.cityInfo{
    float: right;
    width : 72%;
    height: 800px;
    margin-right: 5px;
}
.card{
    height: 100px;
}
.loading{
    margin-left: 50%;
    margin-top: 300px;
}
.demo-carousel{
    background-color: aliceblue;
    height: 200px;
    margin: 3px 10px 3px 3px;
    border-radius:8px;
    position: relative;
}
.loopItems{
    width: 650px;
    height: 400px;
    border-radius:8px;
    margin-top: 5px;
    float: left;
}
.about{
    width: 570px;
    height: 400px;
    float: right;
    margin-top: 10px;
}
.itemsInfo{
    height: 500px;
}
</style>

