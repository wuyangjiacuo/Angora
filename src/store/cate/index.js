import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state: {
    // 分类的数据
    cateInfo: {},
    select_1_id: null,
    select_2_id: null
  },
  mutations,
  actions,
  getters
}
