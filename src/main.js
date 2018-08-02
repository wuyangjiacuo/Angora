// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
// mint
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import { Indicator } from 'mint-ui'
// 懒加载
// import VueLazyload from 'vue-lazyload'
// 我的API配置
import API from './api/API'
Vue.use(MintUI)
// Vue.use(VueLazyload, {
//   // 设置默认显示的图片
//   loading: require('./assets/corgi.jpeg')
// })
Vue.config.productionTip = false// 引入自己配置的API
Vue.prototype.$http = API// 修改原型链,使得可以全局使用this.$http调用http请求
Vue.prototype.$store = store// 把store挂在原型上
axios.interceptors.request.use(function (config) { // 这里的config包含每次请求的内容
  // console.log(config)
  Vue.$indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  let appToken = ''
  if (localStorage.getItem('token')) {
    appToken = localStorage.getItem('token')
  }
  if (appToken) {
    // config.headers.token = app_token;//新添加了token,在后台设置请求头的地方加上token就不会出现跨域问题
    config.data.token = appToken
    // config.headers.common['App-Token'] = app_token;
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

// 添加一个响应拦截器---请求后
axios.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  Vue.$indicator.close()
  return res
}, function (err) {
  // Do something with response error
  return Promise.reject(err)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
