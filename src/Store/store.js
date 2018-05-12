import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

const state ={
    hotCity:{},
    currentUser:'',
    currentState:'2',//右上角标签选中的状态,
    currentCityInfo:{},//某个城市的景点合集
    currentStrategy:{}//城市的具体某个景点的具体游玩攻略数据
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
    }
}

const actions ={
    actionsHostCity(context,data){
        context.commit('initHotCity',data)
    },
    actionsCurrentCityInfo(context,data){
        context.commit('setCurrentCityInfo',data)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})