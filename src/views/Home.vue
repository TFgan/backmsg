<template>
    <div class="home">
    <el-container>
   <el-header>
     <span>电商后台管理系统</span>
   </el-header>
   <el-container>
    <el-aside width="200px">
      <el-menu
      :default-active="arr"
      class="el-menu-vertical-demo"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='is'
      >
      <el-submenu :index=String(index)  v-for="(item,index) in items" :key="index">
        <template slot="title">
          <i :class="icon_list[index]"></i>
          <span>{{item.name}}</span>
        </template>
       
          <el-menu-item 
          :index=String(index) 
           v-for="(it,index) in item.list" 
           :key="index"
           :route="{path:'/home/'+it.path}"
           >
            {{it.username}}
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
         items:[
           {name:'用户管理',
           list:[
             {username:"用户列表",path:'addUser' }
           ]},
           {name:'权限管理',
            list:[
             {username:"角色列表",path:'addUser' },
             {username:"权限列表",path:'addUser' }
           ]},
           {name:'商品管理',
            list:[
             {username:"商品列表",path:'addUser' },
             {username:"分类参数",path:'addUser' },
             {username:"商品分类",path:'addUser' }
           ]
           },
           {name:'订单管理',
           list:[
             {username:"订单列表",path:'addUser' },
            
           ]},
           {name:'数据统计',
            list:[
             {username:"数据报表",path:'addUser' },
            
           ]}
           ],
         is:true,
         arr:''
         
        };
    },
    mounted() {
      // this.axios.get('/api/sliderbar').then(res=>{
      //   console.log(res.list[0].children[2].path)
      //   this.items=res.list
      //   this.arr=res.list[0].children[0].id
      // })
        
      
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
     background: #333744;
    }
      .el-menu{
        border-right: none;
      }
     }
  }
  .el-main{
    background: #F0F2F5;
  }
  .el-header{
    background: #373D41;
    color: #fff;
  }
 
</style>

