<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import Header from "./components/Header";

    export default {
        name: "IndexLayout",
        components:{
            Footer,
            Header
        }
    }
</script>

<style scoped lang="less">

</style>