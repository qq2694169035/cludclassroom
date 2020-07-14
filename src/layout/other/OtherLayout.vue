<template>
    <div>
        <DetailsHeader></DetailsHeader>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import DetailsHeader from "./components/DetailsHeader";
    import Footer from "../index/components/Footer";

    export default {
        name: "OtherLayout",
        components:{
            DetailsHeader,
            Footer
        }
    }
</script>

<style scoped>

</style>