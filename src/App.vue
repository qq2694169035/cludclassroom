<template>
  <div id="app">
      <router-view></router-view>
 </div>
</template>

<script>


    import {createKet, getItem} from "./utils/localstore-utils";
    import {userInformation} from "./api/curros-api";
    // import {getuserInfor} from "./api/curros-api";

export default {
  name: 'app',
    created() {
        userInformation().then(res=>{
            if (res.code==0){
                let isLogin=getItem(createKet('isLogin1'))
                // console.log(isLogin)
                this.$store.commit('changeisLogin',{isLogin1:isLogin});
                this.$store.commit('changeuserInfor',{userInfor:res.userInfo});
            }
        })
      // let isLogin=localStorage.getItem(createKet('isLogin1'))||false;

        // let userInfor=JSON.parse(localStorage.getItem(createKet('userInfor'))||'{}')
    }

}
</script>

<style>

</style>
