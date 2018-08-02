import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state: {
    userInfo: { // 当前登录用户的登录状态/token
      islogin: false,
      isAdminl: false,
      avatar: '',
      phone: '',
      token: '',
      _id: ''
    }
  },
  mutations,
  actions,
  getters
}
