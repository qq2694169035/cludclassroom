<template>
    <div>
        <p class="curriculum"> 直播课程</p>
        <el-tabs :tab-position="tabPosition" style="height: 350px;" class="tab">
            <el-tab-pane v-for="(item,index) in deail" :key="index" :label="item.course.courseTitle"
                         style="margin-right: 200px" class="pic-content">
                <div class="tab-pic">
                    <img :src="item.course.coverFileUrl" alt="">
                    <div class="content">
                        <p class="content-title">{{item.course.courseTitle}}</p>
                        <p style="margin:20px 0 ">尚未开播</p>
                        <button class="broadcast">尚未开播
                        </button>

                    </div>
                </div>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>


<script>
    import {streaming} from "../api/curros-api";

    export default {
        name: "Livestreaming",
        data() {
            return {
                tabPosition: 'right',
                deail: []
            }
        },
        created() {
            streaming().then(res => {
                console.log(res)
                this.deail = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /deep/ .el-tabs--right .el-tabs__header.is-right {
        float: right;
        width: 50%;
            margin-left: 0;
    }

    /deep/ .is-right {
        width: 545px;
        /*margin-right: 50px;*/
    }
    /deep/ .el-tabs__header {
        box-sizing: border-box;
        height: 350px;
        width: 50%;
        margin-left: 0 !important;
        background-color: #f4f4f4;


    }
    /deep/ .el-tabs__item {
        background-color: #f4f4f4;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
        border-left: 5px solid transparent;

        &:hover {
            background-color: #fff;
            border-left: 5px solid #00cf8c;
            color: #00cf8c;
        }

        /deep/ .is-active {
            color: #00cf8c !important;
        }
    }
    /deep/ .el-tabs__active-bar{
        background-color:#00cf8c ;
    }
    .curriculum {
        font-size: 24px;
        text-align: center;
        /*line-height: 20px;*/
        margin-top: 20px;
    }

    .content {
        position: absolute;
        top: -1px;
        left: 46px;
        width: 557px;
        padding: 80px 50px;
        height: 350px;
        background-color: rgba(0, 0, 0, .6);
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        color: white;
        text-align: center;

    }

    .content-title {
        font-size: 24px;
    }

    .tab {
        /*margin-top: 50px;*/
        width: 1200px;
        margin: 25px auto 0;
        height: 350px;

        .tab-pic {
            width: 600px;
            height: 350px;
            margin-left: 47px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .broadcast {
        width: 180px;
        height: 50px;
        font-size: 18px;
        background-color: #00cf8c;
        outline-style: none;
        border: 0;
        cursor: pointer;
    }
</style>