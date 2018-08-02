import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state: {
    tabInfo: 'home' // 当前选择的选项卡
  },
  mutations,
  actions,
  getters
}
