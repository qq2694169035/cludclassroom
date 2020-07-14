<template>
    <div class="title1-conpainer">
        <!--     <ul>-->
        <!--         <li>首页</li>-->
        <!--         <li>课程分类</li>-->
        <!--         <li>专属课程</li>-->
        <!--     </ul>-->
        <!--        <div style="clear: both"></div>-->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">课程分类</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>

            </el-submenu>

            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">专属课程</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "title1",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    .title1-conpainer {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }

    /*ul li {*/
    /*    float: left;*/
    /*    list-style: none;*/
    /*    margin-right: 20px;*/
    /*    !*margin-top: 20px;*!*/
    /*    cursor: pointer;*/
    /*    font-size: 16px;*/
    /*    margin-bottom: 5px;*/
    /*}*/
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>