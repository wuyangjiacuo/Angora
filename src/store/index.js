import Vue from 'vue'
import Vuex from 'vuex'

import user from './user/index.js'
import query from './query/index.js'
import cate from './cate/index.js'
import common from './common/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    query,
    cate,
    common
  }
  // strict: process.env.NODE_ENV !== 'production'
})
