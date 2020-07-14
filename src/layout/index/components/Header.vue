<template>
    <div class="header-conpainer">
        <img src="../../../assets/logo1.png" alt="" class="logn">
        <input type="text" placeholder="搜索内容">
        <el-button type="primary" icon="el-icon-search" class="button">搜索</el-button>
        <div class="header-shop">
          <router-link to="/shop">  <i class="el-icon-shopping-cart-1" style="font-size: 20px;margin-right: 15px; color: #ccc" @click="shopCar"></i></router-link>

            <span @click="isLogin" v-if="!isLogin1">登录/注册</span>
            <span @click="layout" v-if="isLogin1">{{userInfor.nickname}}</span>
            <i class="el-icon-user" style="text-align: center" v-if="isLogin1==false"></i>
            <img :src="userInfor.avatarUrl"  v-if="isLogin1==true" class="pic" style="width: 20px;">
        </div>
        <div style="clear: both"></div>
        <Login></Login>
    </div>
</template>

<script>
    import Login from "../../../components/Login";
    import {mapState} from "vuex";
    import {getuserInfor} from "../../../api/curros-api";
    import login from '../../../mixin/login'
    export default {
        name: "Header",
        components:{
            Login
        },
        mixins:[login],
        created() {
            console.log(this.rules2)
        },
        methods:{
            isLogin(){
                this.$store.commit('changedialogVisible',{isShow:true})
            },
            layout(){
                getuserInfor().then(res=>{
                    if (res.code==0){
                        this.$store.commit('changeisLogin',{isLogin1:false})
                    }

                })
            },
            shopCar(){
                if (this.loginClick()){
                    console.log('可以跳转')
                }
            }
        },
        computed:{
            ...mapState(['isLogin1','userInfor'])
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .header-conpainer {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
        height: 106px;
        /*border: 1px solid red;*/

        .logn {
            float: left;
            margin-top: 22px;
            height: 55px;
            margin-right: 200px;
        }

        input {
            width: 400px;
            margin: 30px 6px 0 0;
            height: 38px;
            border-radius: 20px;
            border: 1px solid #d9d9d9;
            outline-style: none;
            padding: 10px;
            font-size: 14px;
        }

        button {
            background-color: rgb(0, 207, 140);
            color: white;
            line-height: 100%;
            border-radius: 20px;
            height: 38px;
            margin-left: -91px;
            width: 85px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border: 0;
            outline-style: none;
        }

        .header-shop {
            float: right;
            padding: 32px 0 0;
            margin-right: 100px;
            font-size: 14px;

            span {
                margin-right: 8px;
            }
        }
    }

</style>