export default {
    computed:{
        isLogin1(){
            return this.$store.state.isLogin1
        }
    },
    methods:{
        loginClick(){
            if (this.isLogin1){
                return true
            }else {
                this.$store.commit("changedialogVisible",{isShow:true})
                return false
            }
        }
    }
}