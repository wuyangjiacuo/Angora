component:
import { mapState } from 'vuex'
computed: {
  ...mapState({
    wishList: state => state.evaluate.wish.groups,
    // userInfo: state => state.evaluate.wish.baseInfo,
    eval: state => state.evaluate.wish.eval
  })
},
watch: {
  // 监听对象的属性一定要加deep
  userState: {
    handler: function(val, oldval) {
      //console.log(this.queryInfo);
      //console.log(this.userState.islogin)
      if (this.userState.islogin) {
        this.show = 'homepage'
        this.LoginStatus = 'AfterLogin'
        this.getUserInfo();
      } else{
        this.show = 'loginBox'
        this.LoginStatus = 'beforeLogin'
      }
    },
    deep: true
  }
}

this.$store.commit('evaluate/setWishTable', res.data)
store/mutation:
setWishTable (state, data) {
  state.wish = data
  // state.wish.groups.forEach(item => {
  //   item.colleges.forEach(items => {
  //     items.isreviseshow = false
  //   })
  // })
},

main.js:
Vue.prototype.$store = store//把store挂在原型上

component:
created () {
  if (this.$store.state.evaluate.wish.groups.length === 0) {
    this.getCollege() // 获取志愿表
  }
},
computed: {
  ...mapState({
    wishList: state => state.evaluate.wish.groups,
    userInfo: state => state.evaluate.wish.baseInfo,
    eval: state => state.evaluate.wish.eval
  })
},