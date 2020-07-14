<template>
    <div class="box">
        <div class="details-container">
            <!--        <div style="clear: both"></div>-->
            <div class="title">
                <i class="el-icon-house"></i>
                <router-link to="/index" tag="span">首页</router-link>
                <span style="margin: 0 10px;">/</span>
                <span>视频详情</span>
            </div>
            <DetailsTitle></DetailsTitle>
            <DetailsTab></DetailsTab>
        </div>
    </div>
</template>

<script>
    import DetailsTitle from "./DetailsTitle";
    import DetailsTab from "./DetailsTab";

    export default {
        name: "Coursedetails",
        components: {
            DetailsTitle,
            DetailsTab
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .box {
        background: #f4f4f4;
    }

    .details-container {
        width: 1200px;
        margin: 0px auto;
        /*border: 1px solid red;*/
        color: rgba(0, 0, 0, .45);
        /*background: white;*/
    }

    .title {
        height: 30px;
        margin-top: 10px;
        line-height: 40px;
    }
</style>