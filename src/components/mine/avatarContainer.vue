<template>
  <div class="avatarBox">
    <div class="background">
      <img src="../../assets/corgi.jpeg" alt="">
    </div>
    <div class="userInfo">
      <div class="avatar">
        <img src="../../assets/corgi.jpeg" alt="">
      </div>
      <p>戏精本精</p>
      <div class="userdata">
        <div>
          <span class="cate">vue</span>
          <span class="num">666</span>
        </div>
        <div>
          <span class="cate">vue</span>
          <span class="num">666</span>
        </div>
        <div>
          <span class="cate">vue</span>
          <span class="num">666</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      selected: 'gif',
      avatarUrl: '../../assets/corgi.jpeg'
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {},
  watch: {
    selected: function (val, oldval) {
      this.$emit('tableChange', val)
    }
  }
}
</script>

<style scoped lang="less">
.avatarBox {
  width: 100%;
  height: 300px;
  position: relative;
  .background {
    position: absolute;
    width: 100%;
    height: 200px;
    overflow: hidden;
    top: 0;
    z-index: 99;
    img {
      width: 100%;
      filter: blur(7px);
    }
  }
  .userInfo {
    position: absolute;
    top: 120px;
    left: 12.5%;
    width: 75%;
    height: 160px;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 5px 5px 9px #e6e6e6;
    background: #fff;
    z-index: 101;
    .avatar {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      border-radius: 25px;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    p {
      margin: 5px 0;
      text-align: center;
    }
    .userdata {
      display: flex;
      justify-content: space-around;
      .div {
        width: 30%;
      }
      .cate {
        display: block;
        font-size: 25px;
        font-weight: bold;
        color: #a1c45a;
        width: 100%;
      }
      .num{
        display: block;
        width: 100%;
        text-align: center;
        color:#455d7a;
      }
    }
  }
}
</style>
