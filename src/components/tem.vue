<template>
  <div class="">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      queryInfo: state => state.query.queryData
    })
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
  },
  methods: {
    axiso () {
      let response = this.$http
        .login(this.form)
        .then(res => {
          if (res.data.code === 200) {
            this.isLogin = true
            this.message = '登录成功!'
            this.openSimpleDialog()
            localStorage.setItem('user_token', res.data.token)
            this.$store.commit('user/setUserIn', res.data)
          } else {
            this.message = '用户名或密码错误!'
            this.openSimpleDialog()
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  watch: {
    // 监听对象的属性一定要加deep
    queryInfo: {
      handler: function (val, oldval) {
        // console.log(this.queryInfo);
        this.getList()
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="less">
</style>
