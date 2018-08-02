// 改变index.js中的状态
export default {
  // 设置分类数据
  setCateInfo (state, data) {
    state.cateInfo = data
  },
  // 设置已选择的分类数据
  setChooseCateInfo (state, cateInfo) {
    state.select_1_id = cateInfo.cateId1
    state.select_2_id = cateInfo.cateId2
  }
}
