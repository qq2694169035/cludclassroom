import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/Index'
import IndexLayout from "../layout/index/IndexLayout";
import Coursedetails from "../components/Coursedetails";
import OtherLayout from "../layout/other/OtherLayout";
import play from "../components/play";
import ShopCar from "../views/ShopCar";


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
                  path:'/play',
                  component: play
              },
              {
                  path: '/shop',
                  component: ShopCar
              }
          ]
      }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
