import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state: {
    // 查询参数
    queryData: {
      date: '', // 时间
      keyword: '', // 关键字
      cate_1_id: null, // 一级分类id
      cate_2_id: null, // 二级分类id
      pageSize: 10, // 每页展示列表数量
      page: 1 // 页码
    }
  },
  mutations,
  actions,
  getters
}
