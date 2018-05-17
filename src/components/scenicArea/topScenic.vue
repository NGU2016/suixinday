<template>
    <div @mouseover="mouseoverStop"  @mouseout="mouseoutBegin">
        <Carousel :autoplay="mouseOnStop" v-model="value2" loop :autoplay-speed=4000 :height="840">
                <!-- 先循環最外層tab頁，再循環每個tab頁的數據 -->
                <CarouselItem v-for="(tab,index)  in city" :key="index" >
                    <div @mouseover="onCity(items.cityName)" @mouseout="outCity" class="demo-carousel" v-for="items in tab" 
                    :key="items.cityName"  :style="{backgroundImage:'url(' + require('../../assets/img/'+items.img) + ')',
                    backgroundSize:'100% 100%'}" @click="getCityInfo(items)" 
                    >
                        <router-link :to="{ name: 'city', params: {id:items.cityName}}">
                        <div class="routeClick">
                            <!-- <img  alt="" class="backgImg"> -->
                            <div v-if="items.cityName == currentSelect" class="currentCity">
                                <p class="fontStyle">{{items.dis}}</p>
                            </div>
                            <span class="cityName">{{items.cityName}}</span></br>
                            {{items.dis}}
                        </div>
                        </router-link>
                    </div>
                </CarouselItem>
            </Carousel>
    </div>
</template>

<script>
export default {
    data () {
            return {
                value2: 0,
                mouseOnStop:true,
                city:this.$store.state.hotCity,
                currentSelect:''//当前鼠标移动到的城市
            }
        },
    methods: {
        mouseoverStop(){
            this.mouseOnStop = false;
        },
        mouseoutBegin (){
            this.mouseOnStop=true;
        },
        onCity (name){
            this.currentSelect=name
        },
        outCity(){
            this.currentSelect=""
        },
        getCityInfo(items){
            const me=this;
            this.$axios.get("/static/data/"+items.id+".json").then(response=>{
                me.$store.dispatch("actionsCurrentCityInfo",response.data)
            },response=>{

            })
        }
    },
    //获取左边热门景点
    mounted (){
        const me=this;
        this.$axios.get("/static/data/hotCity.json").then(response=>{
            me.city=response.data;
            this.$store.dispatch("actionsHostCity",response.data)
        },response=>{

        })
    }
}
</script>

<style scoped>
.showMessage{
    width: -webkit-fill-available;
    height:"840px";
}
.demo-carousel{
    background-color: aliceblue;
    height: 200px;
    margin: 3px 10px 3px 3px;
    border-radius:8px;
    position: relative;
}
/* .cityName{

} */
.backgImg{
    width: 292px;
    height: 202px;
}
.currentCity{
    background: #66d1ff;
    width: 100%;
    height: 20%;
    bottom: 0px;
    position: absolute;
    opacity:0;
    filter:Alpha(opacity=50);     
    transition: opacity 2s;
    border-radius:8px;
}
.currentCity:hover{
    opacity: 1;
    filter:Alpha(opacity=0)
}
.fontStyle{
    color:#1e345d;
}
.routeClick{
    width: 100%;
    height: 100%;
}
</style>


