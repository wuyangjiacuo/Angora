// 改变index.js中的状态
export default {
  setUserInfo (state, data) {
    state.userInfo.islogin = true
    state.userInfo.isAdmin = data.data[0].isAdmin
    state.userInfo.phone = data.data[0].phone
    state.userInfo.token = data.token
    state.userInfo.avatar = data.data[0].avatar
    state.userInfo._id = data.data[0]._id
  },
  setUserOut (state, data) {
    state.userInfo.islogin = false
    state.userInfo.isAdmin = false
    state.userInfo.phone = ''
    state.userInfo.token = ''
    state.userInfo._id = ''
  }
}
