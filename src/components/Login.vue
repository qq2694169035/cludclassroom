<template>
    <div>


        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                @close="close"
                >
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

                <el-form-item label="用户名" prop="age">
                    <el-input type="text" v-model="ruleForm2.age" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
    <el-button @click="close" >取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>

        </el-dialog>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {isLogin} from "../api/curros-api";
    import {createKet, setItem} from "../utils/localstore-utils";

    export default {
        name: "Login",

        data() {
            var checkAge = (rule, value, callback) => {
                if (value.length<5) {
                    return callback(new Error('账号不能少于5位'));
                }

            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };

            return {
                // dialogVisible: false
                ruleForm2: {
                    pass: '',

                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],

                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        computed:{
            ...mapState(['dialogVisible'])
        },
        methods: {
            close(){
                this.$store.commit('changedialogVisible',{isShow:false})
            },
            submit(){
               isLogin(this.ruleForm2.age,this.ruleForm2.pass).then(res=>{
                   console.log(res)
                   if(res.code==0){
                       this.$message({
                           message: '登录成功',
                           type: 'success'
                       });
                       this.$store.commit('changeisLogin',{isLogin1:true})
                       // localStorage.setItem(createKet('isLogin1'),'true')
                       setItem(createKet('isLogin1'),true,Date.now()+300000000)
                       this.$store.commit('changeuserInfor',{userInfor:res.userInfo})
                       // localStorage.setItem(createKet('userInfor'),JSON.stringify(res.userInfo))
                       this.$store.commit('changedialogVisible',{isShow:false})

                   }

               })

            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            console.log(this.ruleForm2)
        }


    }
</script>

<style scoped>

</style>