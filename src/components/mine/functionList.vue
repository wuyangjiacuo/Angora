<template>
  <div class="list">
      <div class="listItem">
        <div class="icon icon1">
          <span class="iconfont icon-buoumaotubiao44"></span>
        </div>
        <span class="listInfo">收藏</span>
        <span class="iconfont enter icon-jinrujiantouxiao"></span>
      </div>
      <div class="listItem">
        <div class="icon icon2">
          <span class="iconfont icon-icon-"></span>
        </div>
        <span class="listInfo">消息通知</span>
        <span class="iconfont enter icon-jinrujiantouxiao"></span>
      </div>
      <div class="listItem">
        <div class="icon icon3">
          <span class="iconfont icon-Processsettings"></span>
        </div>
        <span class="listInfo">个人设置</span>
        <span class="iconfont enter icon-jinrujiantouxiao"></span>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {},
  watch: {}
}
</script>

<style scoped lang="less">
.list {
  padding: 10px;
  .listItem {
    width: 80%;
    height: 40px;
    margin-left: 10%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    border-left: solid 1px #eee;
    border-top: solid 1px #eee;
    box-shadow: 5px 5px 9px #e6e6e6;
    .listInfo {
      width: 60%;
      // text-align: center;
    }
    .iconfont {
      color: #fff;
    }
    .enter {
      color: #000;
    }
    .icon {
      width: 30px;
      height: 30px;
      box-sizing: border-box;
      border-radius: 15px;
      padding: 5px;
    }
    .icon1{
      background: #53d397;
    }
    .icon2{
      background: #f8c43a;
    }
    .icon3{
      background: #ff7a5c;
    }
  }
}
</style>
