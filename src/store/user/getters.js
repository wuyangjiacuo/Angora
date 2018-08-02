export default {
  getUserInfo (state) {
    return state.userInfo
  },
  getUserLoginState (state) {
    return state.userInfo.islogin
  },
  getToken (state) {
    return state.userInfo.token
  }
}
