<template>
    <div class="footer">
        <div class="box">
            <p style="font-size: 20px">友情链接 :</p>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <a href="">{{item.dictLabel}}</a>
                </li>
            </ul>
            <div style="clear: both"></div>
            <div class="line"></div>
            <p class="presentation">Copyright © 2017-2025 石家庄天亮教育科技有限公司 备案号:冀ICP备17020003号</p>
        </div>
    </div>
</template>

<script>
    import {getfooter} from "../../../api/curros-api";

    export default {
        name: "Footer",
        data() {
            return {
                list: []
            }
        },
        created() {
            getfooter('blogroll', 1, 10, 'dictSort', 'asc').then(res => {
                console.log(res)
                this.list = res.rows
            })
        }
    }
</script>

<style scoped lang="less">
    .footer {
        background-color: #444546;
        color: #999;
        font-size: 14px;
        /*margin-top: 20px;*/

        .box {
            width: 1200px;
            margin: 0 auto;
            padding: 20px;

            li {
                float: left;
                list-style: none;
                margin-right: 30px;

                a {
                    color: #999;
                    text-decoration: none;
                }
            }
            .line {
                /*height: 1px;*/
                border: 1px solid white;
                /*line-height: 30px;*/

                /*margin-top: 54px;*/
                width: 1000px;
                margin: 24px auto;
            }
        }
    }

    .presentation {
        text-align: center;
    }
</style>