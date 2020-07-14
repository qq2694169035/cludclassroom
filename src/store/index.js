import Vue from 'vue'
import Vuex from 'vuex'
import {userInformation} from "../api/curros-api";
// import {getuserInfor} from "../api/curros-api";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        dialogVisible: false,
        isLogin1: false,
        userInfor: {},
        shopCar: []
    },
    mutations: {
        changedialogVisible(state, {isShow}) {
            state.dialogVisible = isShow
        },
        changeisLogin(state, {isLogin1}) {
            state.isLogin1 = isLogin1
        },
        changeuserInfor(state, {userInfor}) {
            state.userInfor = userInfor
        },
        addshopCar(state, payload) {
            state.shopCar = payload.shopCar
        }
    },
    getters: {},
    actions: {
        checkLoginStatus(context,) {
            return userInformation().then(res => {
                // eslint-disable-next-line
                // debugger
                if (res.code === 0) {
                    //  已经登录了
                    context.commit("changeisLogin", {isLogin1: true})
                    context.commit("changeuserInfor", {userInfor: res.userInfo})
                } else {
                    //    没有登录
                    context.commit("changeisLogin", {isLogin1: false})
                    context.commit("changeuserInfor", {userInfor: {}})
                }
            })
        }
    }
})

export default store