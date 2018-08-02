import axios from 'axios'
import config from './config'
// import qs from 'qs'
const API = {
// 测试
  APItest (param) {
    config.data = param
    return axios.post('test', {}, config)
  },
  // 登录注册
  reg (param) {
    config.data = param
    return axios.post('user/reg', {}, config)
  },
  login (param) {
    config.data = param
    return axios.post('user/login', {}, config)
  },
  tokenLogin (param) {
    config.data = param
    return axios.post('user/tokenLogin', {}, config)
  },
  logOut (param) {
    config.data = param
    return axios.post('user/logOut', {}, config)
  },
  getUserInfo (param) {
    config.data = param
    return axios.post('user/getUserInfo', {}, config)
  },
  setAvatar (param) {
    config.data = param
    return axios.post('user/setAvatar', {}, config)
  },
  // GIF
  getGifList (param) {
    config.data = param
    return axios.post('gif/getGifList', {}, config)
  },
  getGifDetail (param) {
    config.data = param
    return axios.post('gif/getGifDetail', {}, config)
  },
  // 分类操作
  getCate (param) {
    config.data = param
    return axios.post('cate/getCate', {}, config)
  },
  addCate (param) {
    config.data = param
    return axios.post('cate/addCate', {}, config)
  },
  delCate (param) {
    config.data = param
    return axios.post('cate/delCate', {}, config)
  },
  updateCate (param) {
    config.data = param
    return axios.post('cate/updateCate', {}, config)
  },
  // 文章操作
  addArticle (param) {
    config.data = param
    return axios.post('article/addArticle', {}, config)
  },
  delArticle (param) {
    config.data = param
    return axios.post('article/delArticle', {}, config)
  },
  updateArticle (param) {
    config.data = param
    return axios.post('article/updateArticle', {}, config)
  },
  getArticleList (param) {
    config.data = param
    return axios.post('article/getArticleList', {}, config)
  },
  getArticleDetail (param) {
    config.data = param
    return axios.post('article/getArticleDetail', {}, config)
  }
}
export default API
