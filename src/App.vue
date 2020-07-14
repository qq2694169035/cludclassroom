<template>
  <div id="app">
      <router-view></router-view>
 </div>
</template>

<script>


    import {createKet, getItem} from "./utils/localstore-utils";
    // import {getuserInfor} from "./api/curros-api";

export default {
  name: 'app',
    created() {

      // let isLogin=localStorage.getItem(createKet('isLogin1'))||false;
        let isLogin=getItem(createKet('isLogin1'))
      this.$store.commit('changeisLogin',{isLogin1:isLogin});
        let userInfor=JSON.parse(localStorage.getItem(createKet('userInfor'))||'{}')
        this.$store.commit('changeuserInfor',{userInfor});

    }

}
</script>

<style>

</style>
