// 改变index.js中的状态
export default {
  // 设置查询参数
  setQueryData (state, data) {
    state.queryData.keyword = data.keyword
    state.queryData.date = data.date
    state.queryData.cate_1_id = data.cate_1_id
    state.queryData.cate_2_id = data.cate_2_id
  },
  // 页面+1
  setQueryPagePlus (state, data) {
    state.queryData.page++
  },
  // 页面初始化
  setQueryPageZero (state, data) {
    state.queryData.page = 1
  }
}
