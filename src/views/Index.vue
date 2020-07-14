<template>
    <div>

        <Title></Title>

        <div class="block">
            <span class="demonstration"></span>
            <el-carousel height="400px">
                <el-carousel-item v-for="(item,index) in list" :key="index"
                                  :style="{'backgroundImage':'url('+item.imgUrlPc+')'}" class="small">

                </el-carousel-item>
            </el-carousel>
        </div>
        <div style="clear: both"></div>
        <Livestreaming></Livestreaming>
        <CourseList type="free" :pageSize="10" :pageNume="1" course="免费课程"></CourseList>
        <CourseList type="boutique" :pageSize="5" :pageNume="1" course="收费课程"></CourseList>
        <CourseList type="discount" :pageSize="5" :pageNume="1" course="限时折扣课程"></CourseList>
        <Headline></Headline>

    </div>
</template>

<script>


    import CourseList from "../components/CourseList";
    import {getpic} from "../api/curros-api";
    import Title from "../layout/index/components/Title";
    import Headline from "../components/Headline";
    import Livestreaming from "../components/Livestreaming";

    export default {
        name: "Index",
        components: {
            CourseList,
            Title,
            Headline,
            Livestreaming,
        },
        data() {
            return {
                list: [],


            }
        },
        created() {
            getpic(4).then(res => {
                console.log(res)
                this.list = res.data;
            });

        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .block {
        height: 400px;
        width: 100%;
    }


    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .small {
        background-position: 50%;
        width: 100%;
        /*height: 400px;*/
        background-size: cover;
    }



    /deep/ .el-tabs--right .el-tabs__header.is-right {
        float: right;
    }

    /deep/ .is-right {
        width: 545px;
        /*margin-right: 50px;*/
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
        left: 47px;
        width: 497px;
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


</style>