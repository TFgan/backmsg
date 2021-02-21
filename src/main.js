import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 请求拦截
axios.interceptors.request.use(function(config){
  console.log(config,11)
  config.headers["token"]=sessionStorage.getItem("token");
  return config;
},function(error){
  return Promise.reject(error)
})


// 接受拦截
axios.interceptors.response.use(function(response){
  console.log(response)
  response=response.data;
  if(response.status===400){
    router.push('/')
  }
   return response
},function(error){
  return Promise.reject(error)                             
})









new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')




