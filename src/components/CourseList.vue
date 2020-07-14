<template>
    <div>
        <div class="content-title">
            <p class="more">{{course}}
                <span style="float: right;font-size: 14px">更多
                <i class="el-icon-right"></i>
            </span>

            </p>

            <div class="Content-conpainer1"></div>
        </div>
        <div class="Content-conpainer">

            <ul>
                <router-link tag="li" :to="'/other/'+item.courseId" v-for="item in list"
                             :key="item.courseId">
                    <img :src="item.coverFileUrl" alt="">
                    <p class="title">{{item.courseTitle}}</p>
                    <p class="course">共{{item.subSectionNum}}节课 | {{item.participationsCount}}人报名</p>
                    <p v-if="item.isFree == 1" class="text3">免费</p>
                    <div v-if="item.isFree == 0">
                    <span style="color:#ff4500; font-size: 12px;">￥{{ item.discountPrice }}</span>
                        <span class="text2">￥{{ item.coursePrice }}</span>
                        <div class="nofress">{{ item.discountDesc }}</div>
                    </div>


                </router-link>

            </ul>
            <div style="clear: both"></div>
        </div>

    </div>
</template>

<script>
    import {getcourse} from "../api/curros-api";
    import login from "../mixin/login";

    export default {
        name: "Content",
        mixins:[login],
        props: {
            type: String,
            pageNume: Number,
            pageSize: Number,
            course: String
        },
        data() {
            return {
                list: []
            }
        },
        created() {
            console.log(this.type)
            getcourse(this.type, this.pageNume, this.pageSize).then(res => {
                console.log(res)
                this.list = res.rows

            })
        }
    }
</script>

<style scoped lang="less">
    .Content-conpainer1 {
        text-align: center;
        padding: 0 12px 10px 62px;
        border-bottom: 2px solid #e8e8e8;
        width: 1200px;
        margin: 0px auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .Content-conpainer {
        /*text-align: center;*/
        /*padding: 0 12px 10px 62px;*/
        /*border-bottom: 2px solid #e8e8e8;*/
        width: 1200px;
        margin: 30px auto;
    }

    span {
        /*display: block;*/
        font-size: 24px;
        margin-top: 20px;
    }

    ul {
        margin-top: 14px;
    }

    li {
        width: 20%;
        float: left;
        padding-left: 8px;
        padding-right: 8px;
        margin-bottom: 6px;
        list-style: none;
        /*margin-top: 50px;*/
        /*height: 128px;*/

        img {
            height: 126px;
            width: 100%;
        }
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .course {
        color: #888;
    }

    .type {
        color: #00cf8c;
        font-size: 16px;
    }

    .content-title {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    .more {
        font-size: 24px;
        /*float: right;*/
        /*margin-right: 200px;*/
        margin-top: 20px;
    }
    .text3{ color: #00cf8c;}

    .nofress {
        color: #fa8c16;
        background: #fff7e6;
        border-color: #ffd591;
        font-size: 12px;
        width: 50px;
        float: right;
        /*margin-right: 25px;*/
        margin-top: 5px;
    }

    .text2 {
        text-decoration: line-through;
        color: #8888;
        font-size: 12px;
    }
</style>