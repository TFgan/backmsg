import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import( '../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path: '/',
        name: 'userList',
        component: ()=>import( '../views/two/userList.vue')
      },
      {
        path: 'userList',
        name: 'userList',
        component: ()=>import( '../views/two/userList.vue')
      }, 

      {
        path: 'addUser',
        name: 'addUser',
        component: ()=>import( '../views/two/addUser.vue')
      },
      {
        path: 'removeUser',
        name: 'removeUser',
        component: ()=>import( '../views/two/removeUser.vue')
      },
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
