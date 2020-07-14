<template>
    <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="课程描述" name="first" v-html="list.courseDetail" style="font-size: 14px;    color: rgba(0,0,0,.65);">
            </el-tab-pane>
            <el-tab-pane label="目录" name="second" >
                <ul class="content">
                    <li v-for="(item,index1) in catalogue" :key="index1">
                       {{index1+1}} 、{{item.sectionName}}

                        <p v-for="(item,index) in item.subSections" :key="index"  class="list" @mouseover="over(index)" @mouseout="leave" >
                            {{index1+1}}  -{{index+1}}  {{item.sectionName}}
                            <span style="float: right;" v-if="index!=show">
                                <span  class="el-icon-caret-right"></span>
                            </span>
                            <span style="float: right" v-else>
                                观看
                            </span>
                        </p>
                    </li>
                </ul>


            </el-tab-pane>
            <el-tab-pane label="评论" name="third">
                <p>评论</p>
                <el-rate
                        v-model="value"
                        show-text>
                </el-rate>
                <textarea placeholder="请发表您对课程的评价"></textarea>
                <button class="btn">发表评论</button>
                <div style="width: 100%; height: 1px; background-color: rgb(232, 232, 232); margin-top: 85px;"></div>
                <div v-for="(item,index) in comment" :key="index" class="ping">
                    <div class="name">{{item.user.nickname}}</div>
                    <p class="CommentsContent">{{item.commentContent}}</p>
                    <p class="CommentsTime">{{item.createdTime}}</p>
                    <hr>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {comment, details} from "../api/curros-api";

    export default {
        name: "DetailsTab",
        data() {
            return {
                activeName: 'second',
                list:{},
                catalogue:[],
                list1:[],
                comment:[],
                    value: null,
                show:-1
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            over(a){
               this.show=a
            },
            leave(){
                this.show=-1
            }
        },
        created() {
            details(this.$route.params.id).then(res=>{
                console.log(res)
                this.list=res.data;
                this.catalogue=res.data.sections;
            });
            comment(this.$route.params.id).then(res=>{
                console.log(res)
                this.comment=res.rows
            })
        },

    }
</script>

<style scoped lang="less">
    .tab {
        background: white;
        margin-top: 20px;
        padding: 30px;
        /*margin-bottom: 20px;*/
    }
    ul{
        list-style: none;
    }
    li {
        color: black;
        font-size: 22px;

    }
    /deep/ .el-tabs__item{
        /*margin-left: 10px;*/
        padding: 0 20px;
    }
    /deep/ .el-tab-pane {
        padding: 20px 1px;
        margin-top: -36px;
        margin-left: 0;
    }
    textarea{
        height: 136px;
        width: 100% ;
        outline-style: none;
        border: 1px solid #00cf8c;
    }
    .btn {
        color: #fff;
        background-color: #00cf8c;
        /*border-color: #00a879;*/
        float: right;
        outline-style: none;
        border: 0;
        margin: 20px 0px 0px;
        width: 80px;
        height: 30px;
    }
    .content {
        margin-left: -40px;
    }
    .list {
        font-size: 14px;
        color: rgba(0,0,0,.65);
        height: 30px;
        line-height: 30px;
        padding: 10px 20px;
        background: #f2f2f2;
        &:hover{
            color: #00cf8c;
        }
        /*margin: 10px 0;*/
    }
    .name {
        height: 32px;
    }
    .CommentsContent {
        padding: 10px 0px 10px 40px;

    }

    .CommentsTime {
        padding: 0 10px 0 0;
        color: #999;
        text-align: right;
    }
    .ping {
        color: black;
    }

</style>