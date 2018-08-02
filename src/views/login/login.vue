<template>
  <div class="loginBox">
    <div class="bg"></div>
    <div class="loginBox">
      <div class="table" v-if="show==='login'||show==='reg'">
      <div class="login" @click="tab('login')">sign in</div>
      <div class="reg" @click="tab('reg')">sign up</div>
      </div>
      <div class="inputArea" v-if="show==='reg'">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="userInfo.username"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="userInfo.phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userInfo.password"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userInfo.repassword"></mt-field>
      </div>
      <div class="inputArea" v-if="show==='login'">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="userInfo.phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userInfo.password"></mt-field>
      </div>
      <div class="action" v-if="show==='reg'||show==='login'">
        <mt-button type="primary" @click="action">{{btnText}}</mt-button>
      </div>
    </div>

    <!-- 已登录重新登录 -->
    <div v-if="show==='logined'" class="logined">
      <div class="avatar">
        <img src="../../assets/corgi.jpeg" alt="">
      </div>
      <mt-button type="primary" @click="tokenLogin">登录</mt-button>
    </div>

  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      show: 'login', // login:登录，reg：注册，logined：已登录一键登录
      btnText: '登录',
      userInfo: {
        username: '',
        phone: null,
        password: '',
        repassword: ''
      }
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    if (localStorage.getItem('token')) {
      this.show = 'logined'
    }
  },
  methods: {
    tab (type) {
      this.show = type
      if (type === 'reg') {
        this.btnText = '注册'
      }
      if (type === 'login') {
        this.btnText = '登录'
      }
    },
    action () {
      console.log(this.btnText)
      if (this.btnText === '注册') {
        this.reg()
      }
      if (this.btnText === '登录') {
        this.login()
      }
    },
    login () {
      let telReg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!telReg.test(this.userInfo.phone)) {
        this.$message({
          message: '请输入正确的电话号码',
          type: 'error'
        })
        return
      }
      if (this.userInfo.password === '') {
        this.$message({
          message: '请输入密码',
          type: 'error'
        })
        return
      }
      this.$http.login(this.userInfo).then(res => {
        if (res.data.code === 200) {
          this.$toast({
            message: res.data.message,
            position: 'bottom',
            duration: 2000
          })
          this.$store.commit('user/setUserInfo', res.data)
          localStorage.setItem('token', res.data.token)
          this.$router.replace({path: '/gif'})
        } else {
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    reg () {
      let telReg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!telReg.test(this.userInfo.phone)) {
        console.log('请输入正确的电话号码')
        return
      }
      if (
        this.userInfo.password === '' ||
        this.userInfo.password !== this.userInfo.repassword
      ) {
        console.log('两次密码不一致')
        return
      }
      this.$http.reg(this.userInfo).then(res => {
        if (res.data.code === 200) {
          this.$toast({
            message: res.data.message,
            position: 'bottom',
            duration: 2000
          })
          this.tab('login')
        } else {
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    tokenLogin () {
      this.$http.tokenLogin({'token': localStorage.getItem('token')}).then(res => {
        if (res.data.code === 200) {
          this.$toast({
            message: res.data.message,
            position: 'bottom',
            duration: 2000
          })
          this.$store.commit('user/setUserInfo', res.data)
          this.$router.replace({path: '/gif'})
        } else {
          this.show = 'login'
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
@keyframes bgMove {
  0% {
    background-position-y: 10px;
  }
  25% {
    background-position-y: 20px;
  }
  50% {
    background-position-y: 30px;
  }
  100% {
    background-position-y: 40px;
  }
}
@keyframes bgScale {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.3);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}
.loginBox {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: url("../../assets/background.png")
      no-repeat;
    background-size: cover;
    animation: bgScale 60s;
    z-index: -1;
  }
  .table {
    width: 60%;
    height: 50px;
    margin: 250px auto 30px auto;
    display: flex;
    justify-content: space-around;
    // z-index:1000;
    div {
      width: 50%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      box-sizing: border-box;
      background: #fff;
    }
    .login {
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      border-right: solid 1px #eee;
    }
    .reg {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      border-left: solid 1px #eee;
    }
  }
  .inputArea {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    // z-index:1000;
    //transition: height 1s linear 2s;
  }
  .action {
    margin: 50px auto;
    text-align: center;
    // z-index:1000;
  }
  .logined{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    .avatar{
      width: 100px;
      height: 100px;
      margin: 300px auto 50px auto;
      border-radius: 50px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
