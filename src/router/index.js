import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/Index'
import IndexLayout from "../layout/index/IndexLayout";
import Coursedetails from "../components/Coursedetails";
import OtherLayout from "../layout/other/OtherLayout";
import play from "../components/play";
import ShopCar from "../views/ShopCar";
import store from "../store";

Vue.use(VueRouter)

  const routes = [
      {
          path:'/',
          redirect:'/index'
      },
      {
          path: '/index',
          component:IndexLayout,
          children:[{
              path:"",
              component:index,
          },
            ]

      },{
          path:"/other/:id",
          component: OtherLayout,
          children: [
              {
                  path: '',
                  component: Coursedetails
              },
              {
                  path:'/play/:id',
                  component: play
              },
              {
                  path: '/shop',
                  component: ShopCar,
                  meta:{
                      isAuth:true
                  }
              }
          ]
      }


]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


//执行路由守卫之前，先检测了一下登录状态
const loginPromise = store.dispatch("checkLoginStatus");



//增加了路由前置守卫
router.beforeEach((to, from, next) => {
    // 在跳转之前增加了逻辑判断，根据不同的状态判断是否跳转到指定页面
    if (to.meta.isAuth) {
        //需要鉴权的
        loginPromise.then(() => {
            if (store.state.isLogin1) {
                next()
            } else {
                store.commit("changedialogVisible",{isShow:true})
                next("/index")
            }
        })
    } else {
        next();
    }
})

export default router
