<template>
  <div class="about">
    <div class="login">
    <h1>登录</h1>
   <el-form  :model="formLabelAlign" :rules="rules" ref="ruleForm">
  <el-form-item prop="username">
    <el-input v-model="formLabelAlign.username" 
     prefix-icon="el-icon-user-solid"
     placeholder="请输入密码"
     ></el-input>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input v-model="formLabelAlign.pass" 
     prefix-icon="el-icon-lock" show-password 
      placeholder="请输入账号"
     ></el-input>
   </el-form-item>
  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
   </el-form>
    </div>
 
  </div>
</template>
<script>
export default {
    props: {

    },
    data() {
        return {
        formLabelAlign: {
          username: 'admin',
          pass: '123456',
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
        }
      };
      
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/login",{
                username:this.formLabelAlign.username,
                password:this.formLabelAlign.pass 
            }).then((res) => {
             console.log(res,123)
             let {token}=res;
             sessionStorage.setItem("token",token)
             if(res.status===200){
              this.$message({
               message: '登录成功',
               type: 'success',
               duration:1000,
               onClose:()=>{
                this.$router.push('/home')
              }})
             }})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.about{
  h1{
    margin-bottom: 22px;
    text-align: center;
  }
   height: 100%;
   background-color: #282C34;
   display: flex;
   align-items: center;
   justify-content: center;
   .login{
     background: #fff;
     padding: 50px;
     width: 400px;
     border-radius: 10px;
     .el-button--primary{
       width: 100%;
     }
   }
}
</style>
