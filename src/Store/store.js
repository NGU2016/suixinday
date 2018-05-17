import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

const state ={
    hotCity:{},
    currentUser:'',
    currentState:'2',//右上角标签选中的状态,
    currentCityInfo:{},//某个城市的景点合集
    currentStrategy:{},//城市的具体某个景点的具体游玩攻略和评论数据
    currentUser:{}
}

const mutations={
    initHotCity (state,data){
        state.hotCity=data;
    },
    setCurrentSate (state,data){
        state.currentState=data;
    },
    setCurrentCityInfo (state,data){ //点击城市排行的时候更行城市景点信息
        state.currentCityInfo=data;
    },
    setCurrentStrategy (state,data){ //城市的具体某个景点的具体游玩攻略和评论数据
        state.currentStrategy = data;
    },
    setCurrentUser (state,data){
        state.currentUser=data
    }
}

const actions ={
    actionsHostCity(context,data){//context 当前的store对象
        context.commit('initHotCity',data)
    },
    actionsCurrentCityInfo(context,data){
        context.commit('setCurrentCityInfo',data)
    },
    actionSetCurrentUser (context,data){
        context.commit('setCurrentUser',data)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})