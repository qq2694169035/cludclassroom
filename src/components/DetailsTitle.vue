<template>
    <div style="margin-top: 10px;background: white;padding: 20px">
        <div class="details-pic">
            <img :src="list.coverFileUrl" alt="">
        </div>

        <div class=details-presentation>
            <ul>
                <li style="font-size: 24px;color: black">{{list.courseTitle}}</li>
                <li style="font-size: 14px;color: #999;margin-top: 10px">累计{{list.participationsCount}}人学习</li>
                <li style="color: #00cf8c;font-size: 24px;margin-top: -19px">
                    <p v-if="list.isFree==0">
                        <span class="newprice">￥{{list.coursePrice}}</span> <span class="oldprice">￥{{list.discountPrice}}</span><br>
                        <span class="xianshi">限时钜惠</span>
                    </p>
                    <p v-if="list.isFree==1">

                        <span>免费</span>
                    </p>


                </li>
                <li >
                    <div v-if="list.isFree==0">
                        <button class="btn1">立即购买</button>
                        <button class="btn" @click="add">加入购物车</button>
                    </div>
                    <div v-if="list.isFree==1">
<!--                       <router-link to="/play"> <button class="btn">立即观看</button></router-link>-->
                        <button class="btn" @click="play">立即观看</button>
                    </div>

                </li>
            </ul>
        </div>
        <div>
            <button  class="collect" @click="collect">收藏</button>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import {details, shopCar} from "../api/curros-api";
    import login from "../mixin/login";

    export default {
        name: "DetailsTitle",
        data(){
          return{
              list:{},
              details:[]
          }
        },
        mixins:[login],
        created() {
            details(this.$route.params.id).then(res=>{
                console.log(res)
                this.list=res.data
                this.details.push(res.data)
            })
        },
        methods:{
            play(){
                // console.log(123)
                this.$router.push('/play/'+this.list.courseId)
            },
            collect(){
                if (this.loginClick()){
                    this.$message({
                        message: '收藏成功',
                        type: 'success'
                    });
                }
            },
            add(){
                shopCar(this.list.courseId).then(res=>{
                    console.log(res)
                    this.$message({
                        message: '加入购物车成功',
                        type: 'success'
                    });

                })

            }
        }
    }
</script>

<style scoped lang="less">
.details-pic{
    float: left;
    img {
        width: 330px;
        height: 220px;
    }
}
    .details-presentation{
        float: left;
    }
    ul {
        list-style: none;
        li{
            height: 36px;
        }
    }
    .btn {
        width: 160px;
        height: 45px;
        font-size: 18px;
        margin-right: 10px;
        color: #fff;
        background-color: #23db9b;
        /*border-color: #23db9b;*/
        outline-style: none;
        border: 0;
        margin-top: 23px;
    }
    .btn1 {
        width: 160px;
        height: 45px;
        font-size: 18px;
        margin-right: 10px;
        color: #fff;
        background-color: rgb(255, 128, 0);
        /*border-color: #23db9b;*/
        outline-style: none;
        border: 0;
        margin-top: 23px;
    }
    .collect {
        float: right;
        width: 110px;
        height: 30px;
        text-align: center;
        font-size: 16px;
        line-height: 26px;
        color: #999;
        background: white;
        border: 1px solid black;
        outline-style: none;
        margin-top: 22px;
    }
    .newprice {
        color: black;
        font-size: 24px;
    }
    .oldprice {
        text-decoration: line-through;
        color: rgb(255, 79, 35);
        font-size: 14px;
        margin: 0px 10px;
    }
    .xianshi{
        display: block;
        color: #fa8c16;
        background: #fff7e6;
        border-color: #ffd591;
        height: 22px;
        margin-top: 0px;
        padding: 0 7px;
        font-size: 12px;
        line-height: 20px;
        width: 49px;
    }
</style>