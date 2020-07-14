<template>
    <div class="header-conpainer">
        <img src="../../../assets/logo1.png" alt="" class="logn">


        <div class="box">
            <ul>
                <router-link to="/index" tag="li">首页</router-link>
                <li>课程分类</li>
                <li>专属课程</li>
            </ul>
        </div>


        <div style="float: left">

            <input type="text" placeholder="搜索内容">
            <el-button type="primary" icon="el-icon-search" class="button">搜索</el-button>
        </div>
<!--        <div style="clear: both"></div>-->


        <div class="header-shop">
          <router-link to="/shop">  <i class="el-icon-shopping-cart-1" style="font-size: 20px;margin-right: 15px; color: #ccc" @click="shop"></i></router-link>
            <span @click="isLogin" v-if="!isLogin1">登录/注册</span>
            <span @click="isLogin" v-else>{{userInfor.nickname}}</span>
            <i class="el-icon-user" style="text-align: center" v-if="isLogin1==false"></i>
            <img :src="userInfor.avatarUrl"  v-if="isLogin1==true" class="pic" style="width: 20px;">
        </div>
        <div style="clear: both"></div>
        <Login></Login>
    </div>
</template>

<script>
    import Login from "../../../components/Login";
    import login from '../../../mixin/login'
    import {mapState} from "vuex";

    export default {
        name: "DetailsHeader",
        components: {
            Login
        },
        mixins:[login],
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        created() {
            console.log(this.rules2)
        },
        methods: {
            isLogin() {
                this.$store.commit('changedialogVisible', {isShow: true})
            },
            shop(){
                if(this.loginClick()){
                    console.log(123)
                }
            }


        },
        computed:{
            ...mapState(['isLogin1',"userInfor"])
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

    li {
        float: left;
        margin-right: 20px;

    }

    ul {
        list-style: none;
        /*overflow: hidden;*/

    }

    .box {
        margin-top: 37px;
        float: left;
        margin-right: 30px;
        margin-left: -152px;
        /*width: 200px;*/
    }

</style>