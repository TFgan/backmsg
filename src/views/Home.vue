<template>
    <div class="home">
    <el-container>
   <el-header>
     <span>logo</span>
   </el-header>
   <el-container>
    <el-aside width="200px">
      <el-menu
      :default-active="arr"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='is'
      >
      <el-submenu :index=String(item.id)  v-for="(item,index) in items" :key="item.id">
        <template slot="title">
          <i :class="icon_list[index]"></i>
          <span>{{item.authName}}</span>
        </template>
       
          <el-menu-item 
          :index=String(it.id) 
           v-for="it in item.children" 
           :key="it.id"
           :route="{path:'/home/'+it.path}"
           >
            {{it.authName}}
          </el-menu-item>


      
      </el-submenu>
    </el-menu> 
    </el-aside>
    <el-main>
     <router-view></router-view>
    </el-main>
   </el-container>
   </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
         icon_list:['el-icon-s-custom','el-icon-lock','el-icon-shopping-bag-1','el-icon-s-data','el-icon-s-marketing'],
         items:[],
         is:true,
         arr:''
         
        };
    },
    mounted() {
      this.axios.get('/api/sliderbar').then(res=>{
        console.log(res.list[0].children[2].path)
        this.items=res.list
        this.arr=res.list[0].children[0].id
      })
        
      
    },
};
</script>
<style scoped lang="less">
.home{
 
  height: 100%;
  .el-header{
   line-height: 60px; 
  }
  .el-container{
    height: 100%;
    .el-aside{
     background: #545C64;
    }
      .el-menu{
        border-right: none;
      }
     }
  }
  .el-main{
    background: #F0F2F5;
    
  }
 
</style>

