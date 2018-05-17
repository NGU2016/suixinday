<template>
  <div class="search">
      <div class="hotCity">
          <span class="fontStyle">热门景区</span>
          <Tag checked color="#fc5353" class="taget">北京</Tag>
          <Tag checked color="#f4fc6c" class="tagets">上海</Tag>
          <Tag checked color="#e68b55" class="tagets">广州</Tag>
          <Tag checked color="#9a68ff" class="tagets">深圳</Tag>
            <div style="width:30%;float:right;">
                <Row class="timeRang">
                    <Col span="12">
                        <Select v-model="citySelect" filterable  style="z-index:2;" @on-change="select">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
            <div class="searchTime">
                <span class="fontStyle">出游时间</span>
                <Row class="timeRang">
                    <Col span="12">
                        <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="请选择时间段" class="timeRang-select" style="background-color: #1e345d;"></DatePicker>
                    </Col>
                </Row>
            </div>
      </div>
          
  </div>
</template>

<script>
export default {
  name:'search',
  data (){
      return {
           cityList: [
                    {
                        value: 'qiwen',
                        label: '气温'
                    },
                    {
                        value: 'tianqi',
                        label: '天气'
                    },
                    {
                        value: 'kongqi',
                        label: '空气'
                    },
                    {
                        value: 'dixing',
                        label: '地形'
                    },
                    {
                        value: 'lvhua',
                        label: '绿化'
                    }
                ],
                citySelect: []

      }
  },
  methods :{
      select (){
          console.log(this.citySelect)
      }
  }
}
</script>

<style scoped>
.search{
    background-color: 1e345d;
    width: 72%;
    height: 80px;
    float: right;
}
.hotCity{
    width:100%;
    height:-webkit-fill-available;
    padding-top:15px;
}
.fontStyle{
    color:aliceblue;
    display: inline;
    font-size:26px;
    margin-right: 20px;
}
.searchTime{
    width:25%;
    float: right;
    display: -webkit-box;
}
.taget{
    margin-bottom:13px;
    height:27px;
    line-height:29px;
}
.tagets{
    height:27px;
    margin-bottom:13px;
    line-height:29px;
}
.timeRang{
    margin-top : 3px;
}
.timeRang-select{
    width: 200px;
    background-color: #1e345d;
}
</style>

