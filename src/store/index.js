import Vue from 'vue'
import Vuex from 'vuex'
// import {getuserInfor} from "../api/curros-api";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        dialogVisible:false,
        isLogin1:false,
        userInfor:{},
        shopCar:[]
    },
    mutations: {
    changedialogVisible(state,{isShow}){
        state.dialogVisible=isShow
    },
        changeisLogin(state,{isLogin1}){
            state.isLogin1=isLogin1
        },
        changeuserInfor(state,{userInfor}){
        state.userInfor=userInfor
        },
        addshopCar(state,payload){
        state.shopCar=payload.shopCar
        }
    },
    getters:{},
    actions:{

    }
})

export default store