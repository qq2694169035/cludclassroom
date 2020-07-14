<template>
    <div class="Headine">
        <p class="more">今日头条
            <span style="float: right;font-size: 14px;margin-top: 17px;">更多
                <i class="el-icon-right"></i>
            </span>

        </p>
        <div class="Content-conpainer1"></div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.coverImgUrl" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import {headline} from '../api/curros-api'

    export default {
        name: "Headline",
        data() {
            return {
                list: []
            }
        },

        created() {
            headline(1, 5,).then(res => {
                console.log(res)
                this.list = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .Headine {
        width: 1200px;
        margin: 0 auto 20px;
        /*padding: 0 12px 10px 62px;*/
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

        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .Content-conpainer1 {
        text-align: center;
        padding: 0 12px 10px 62px;
        border-bottom: 2px solid #e8e8e8;
        width: 1200px;
        margin: 0px auto;
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
        text-align: center;
    }
</style>