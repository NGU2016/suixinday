<template>
    <div class="strategyInfo">
        <Tabs type="card" :value="activeType">
            <TabPane label="游玩攻略" name="strategy" icon="model-s">
                <div class="strategy-content1">
                        <h2 class="strategy-public" style="margin-left:30px;">{{this.$route.params.id}}</h2>
                        <div class="strategy-public">
                            <img class="strategy-public" src="../../assets/img/1-gugong-4.jpg" alt="" style="width:500px;">
                            <img src="../../assets/img/1-gugong-6.jpg" style="width:450px;" alt="">
                        </div>
                        <h4 class="strategy-public" style="width:69%;margin-left:30px;">
                            又名紫禁城，是中国乃至世界上保存最完整，规模最大的木质结构古建筑群，被誉为“世界五大宫之首”。
                            由永乐帝朱棣下令建造，依据其布局与功用分为“外朝”与“内廷”两大部分。以乾清门为界，乾清门以南为外朝，以北为内廷。
                            外朝也称为“前朝”，以太和殿(金銮殿)、中和殿、保和殿三大殿为中心，是封建皇帝行使权力、举行盛典的地方。
                            内廷以乾清宫、交泰殿、坤宁宫后三宫为中心，以及东西两侧的东六宫和西六宫，是封建帝王与后妃居住之所，也就是俗称的“三宫六院”。
                            故宫内珍藏有大量珍贵文物，据统计有上百万件，占全国文物总数的六分之一。钟表馆每天11点和14点有钟表演示，不可错过。 
                        </h4>
                         <Collapse v-model="value2" accordion style="margin-left:30px;margin-top:15px;width:70%;">
                            <Panel name="1">
                                Tips：
                                <p slot="content">故宫需要从南到北参观，午门是唯一的入口，出口是东华门和神武门。
                                                    故宫提供免费存包服务，寄存的包裹可以在午门存入，在神武门出口取包。</p>
                            </Panel>
                            <Panel name="2">
                                交通
                                <p slot="content">故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。
                                                    公交：市区乘坐1路、2路、52路、59路、82路、99路、120路、126路、观光1线、夜17路、夜1路、夜2路、专2路在“天安门东”站下车然后步行约900米到达午门。或，乘坐1路、5路、52路、99路、观光1线、夜1路、专2路公共汽车在“天安门西”下车，然后步行约1000米从午门进入。
                                                    地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）
                                                    故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。</p>
                            </Panel>
                            <Panel name="3">
                                门票
                                <p slot="content">故宫门票全部在官网提前十天预售，现场已不设购票窗口，但可微信支付入馆，每天入馆人数与网络售票共享。
                                    </br>
                                    1.门票价格：</br>
                                    （1）每年4月1日至10月31日为旺季，大门票60元/人；</br>
                                    （2）每年11月1日至次年3月31日为淡季，大门票40元/人。</br>
                                    （3）珍宝馆（即进入宁寿宫区，还包括戏曲馆、石鼓馆）参观门票：10元/人。</br>
                                    （4）钟表馆（即进入奉先殿区）参观门票：10元/人。</br>
                                    2.大门票优惠政策（不含珍宝馆、钟表馆）：</br>
                                    （1） 大、中、小学学生（不含成人教育、研究生），可凭学生证或学校介绍信购买学生票，20元/人。</br>
                                    （2）60岁以上（含60岁）老年人凭有效证件，门票半价优惠。</br>
                                    （3）持有本市城乡居民最低生活保障金领取证的人员（凭有效证件），门票半价优惠。</br>
                                    （4）离休干部凭离休证，免费参观。</br>
                                    （5）1.2米以下儿童免票参观。</br>
                                    （6）残疾人凭残疾人证件，免费参观。</br>
                                    （7）随团导游凭本人导游证，免费参观。</br>
                                    （8）“三八”妇女节，女性观众享受门票半价优惠。</br>
                                    （9）“六一”儿童节，14周岁以下儿童（含14周岁），免费参观。随同家长一人，享受半价优惠。</br>
                                    （10）“八一”建军节，现役军人凭有效证件，免费参观。</br>
                                    3.内馆优惠政策（珍宝馆、钟表馆）：</br>
                                    *特定人群半价优惠票（每人5元），范围包括：</br>
                                    （1）大、中、小学生，含港、澳、台学生，不含成人教育、研究生（凭学生证或学校介绍信）；</br>
                                    （2）6周岁（不含6周岁）至18周岁（含18周岁）未成年人（凭有效身份证件）；</br>
                                    （3）60周岁以上（含60周岁）老年人（凭有效身份证件）；</br>
                                    （4）持有本市城乡居民最低生活保障金领取证的人员（凭有效证件）。　　</br>
                                    *部分人群免费参观，范围包括：</br>
                                    （1） 6周岁（含6周岁）以下或身高1.2米（含1.2米）以下的儿童；</br>
                                    （2）残疾人（凭残疾人证件）；</br>
                                    （3）离休干部（凭离休证）；</br>
                                    （4）随团导游（凭导游证）。　　</br>
                                    *特殊节日优惠，范围包括：</br>
                                    （1） “三八”妇女节（3月8日），妇女享受门票半价优惠，每人5元；</br>
                                    （2） “六一”儿童节（6月1日），14周岁（含14周岁）以下儿童免费参观，随同家长一人享受半价优惠，每人5元；</br>
                                    （3）“八一”建军节（8月1日），现役军人持相关证件免费参观。</p>
                            </Panel>
                            <Panel name="4">
                                开放时间
                                <p slot="content">除法定节假日和暑期（每年7月1日至8月31日）外，故宫博物院全年实行周一全天闭馆的措施。
                                    请随时关注故宫官网的公告。</br>
                                    </br>
                                    每年4月1日至10月31日采用旺季开放时间</br>
                                    开始售票、开放进馆时间：　　　08:30</br>
                                    止票时间（含钟表馆、珍宝馆）：16:00</br>
                                    停止入馆时间：　　　　　　　　16:10</br>
                                    清场时间：　　　　　　　　　　17:00</br>
                                    闭馆时间：　　　　　　　　　　17:30</br>
                                    </br>
                                    每年11月1日至来年3月31日采用淡季开放时间</br>
                                    开始售票、开放进馆时间：　　　08:30</br>
                                    止票时间（含钟表馆、珍宝馆）：15:30 </br>
                                    停止入馆时间：　　　　　　　　15:40</br>
                                    清场时间：　　　　　　　　　　16:30</br>
                                    闭馆时间：　　　　　　　　　　17:00</p>
                            </Panel>
                        </Collapse>
                </div>
            </TabPane>
            <TabPane label="网友热评" name="comment" icon="android-textsms">
                <div class="strategy-content1">
                    <div style="display:-webkit-box;margin-left:9%;">
                        <Button  v-for="(items,index) in commentType" :key="index" class="strategy-commenttype">
                                <p style="color: white;">{{items.title}}({{items.count}})</p>
                        </Button>
                    </div>
                    <div class="strategy-comment">
                        <div class="strategy-comment-style" v-for=" (items,index) in commentContent" :key="index">
                            <div style="display:-webkit-box; ">
                                <div>
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                    <p style="margin-left:5px;color:#ea3c1a;">LV.{{items.level}}</p>
                                </div>
                                <div style="margin-left:15px;margin-top:5px;color:#ff9d00">
                                    <p>{{items.name}}</p>
                                </div>
                                <div style="margin-left:10px;">
                                    <Rate disabled  v-model="items.routate"></Rate>
                                </div>
                            </div>
                            <div style="margin-left:47px;width:950px;">
                                {{items.content}} <br>
                                <div style="display:-webkit-box; ">
                                    <div style="margin-right:10px;margin-bottom:10px;" v-for="(imgU,index) in items.imgs" :key="img">
                                        <!-- <img src="../../assets/img/img/"+imgU+"" alt="" width="200px"> -->
                                        <div :style="{backgroundImage:'url(' + require('../../assets/img/'+imgU) + ')',
                                            backgroundSize:'100% 100%'}" class="strategy-comment-img"></div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
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
            activeType:this.$route.params.type,
            strategyData:this.$store.state.currentStrategy,
            value2: '1',
            commentType:[{title:"全部",type:1,count:7399},{title:"有图",type:2,count:674},{title:"好评",type:3,count:123},
                         {title:"中评",type:4,count:23},{title:"差评",type:5,count:43},{title:"金牌点评",type:6,count:236}],
            routate:1,
            commentContent:[{name:'aaa',level:2,imgs:["1-gugong-1.jpg","1-gugong-5.jpg","1-gugong-6.jpg"],
                                routate:5,content:"故宫真的很壮观，很值得一去，如果想拍景色，就记住三点，早去，早去，还是早去，我差不多7点半去天安门广场，人已经很多了，排在最前面，放开以后进去先把景色拍完，然后慢慢参观，不然你的照片里全部都是游客。这次旅行，有一个感受就是游客素质还有待提高，穿校服的学生攀爬过去消防储水的水缸，一个缸里站着都是学生，没有人管理，还有乱丢垃圾的！"},
                            {name:'bbb',level:3,imgs:["1-gugong-1.jpg","1-gugong-3.jpg","1-gugong-6.jpg","1-gugong-4.jpg"],
                                routate:5,content:"故宫真的很壮观，很值得一去，如果想拍景色，就记住三点，早去，早去，还是早去，我差不多7点半去天安门广场，人已经很多了，排在最前面，放开以后进去先把景色拍完，然后慢慢参观，不然你的照片里全部都是游客。这次旅行，有一个感受就是游客素质还有待提高，穿校服的学生攀爬过去消防储水的水缸，一个缸里站着都是学生，没有人管理，还有乱丢垃圾的！"},
                            {name:'ccc',level:13,imgs:["1-gugong-2.jpg","1-gugong-3.jpg","1-gugong-5.jpg"],
                                routate:4,content:"故宫真的很壮观，很值得一去，如果想拍景色，就记住三点，早去，早去，还是早去，我差不多7点半去天安门广场，人已经很多了，排在最前面，放开以后进去先把景色拍完，然后慢慢参观，不然你的照片里全部都是游客。这次旅行，有一个感受就是游客素质还有待提高，穿校服的学生攀爬过去消防储水的水缸，一个缸里站着都是学生，没有人管理，还有乱丢垃圾的！"},
                            {name:'ddd',level:34,imgs:["1-gugong-1.jpg","1-gugong-6.jpg","1-gugong-6.jpg"],
                                routate:5,content:"故宫真的很壮观，很值得一去，如果想拍景色，就记住三点，早去，早去，还是早去，我差不多7点半去天安门广场，人已经很多了，排在最前面，放开以后进去先把景色拍完，然后慢慢参观，不然你的照片里全部都是游客。这次旅行，有一个感受就是游客素质还有待提高，穿校服的学生攀爬过去消防储水的水缸，一个缸里站着都是学生，没有人管理，还有乱丢垃圾的！"},
                            {name:'愛、淡ㄋ',level:34,imgs:["1-gugong-2.jpg","1-gugong-3.jpg","1-gugong-6.jpg"],
                                routate:5,content:"故宫真的很壮观，很值得一去，如果想拍景色，就记住三点，早去，早去，还是早去，我差不多7点半去天安门广场，人已经很多了，排在最前面，放开以后进去先把景色拍完，然后慢慢参观，不然你的照片里全部都是游客。这次旅行，有一个感受就是游客素质还有待提高，穿校服的学生攀爬过去消防储水的水缸，一个缸里站着都是学生，没有人管理，还有乱丢垃圾的！"},
                            {name:'愛、淡ㄋ',level:34,imgs:["1-gugong-1.jpg","1-gugong-1.jpg","1-gugong-6.jpg","1-gugong-2.jpg"],
                                routate:5,content:"故宫真的很壮观，很值得一去，如果想拍景色，就记住三点，早去，早去，还是早去，我差不多7点半去天安门广场，人已经很多了，排在最前面，放开以后进去先把景色拍完，然后慢慢参观，不然你的照片里全部都是游客。这次旅行，有一个感受就是游客素质还有待提高，穿校服的学生攀爬过去消防储水的水缸，一个缸里站着都是学生，没有人管理，还有乱丢垃圾的！"}
            ],
       }
    },
    mounted (){
    },
    computed :{
        strategyData (){
            return this.$store.state.currentStrategy;
        }
    },
    watch :{
        '$route'  (to,from){
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
    height: 750px;
    margin-top:-16px;
    overflow-y: auto;
}
.strategy-public{
    margin-left:15px;
    margin-top:10px;
}
.strategy-img-middle{
    width:295px;
    position:fixed;
    padding-top:10px;
}
.strategy-commenttype{
    width: 100px;
    height: 30px;
    background-color: #fca729;
    margin-left: 20px;
    margin-top: 10px;
    border-radius:8px;
}
.strategy-comment{
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
    height: 700px;
    overflow-y: auto;
    border-top: 1px solid #eeeeee;
}
.strategy-comment-style{
    margin-top:10px;
    border-bottom:1px dashed #dedede;
}
.strategy-comment-img{
    width: 200px;
    height: 130px;
}
</style>


