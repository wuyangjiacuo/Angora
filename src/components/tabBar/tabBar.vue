<template>
  <div class="">
    <div class="tableBar">
        <i class="iconfont icon-kaixinguo" @click="goTo('/gif')"></i>

        <i class="iconfont icon-wenzhangshoucang" @click="goTo('/article')"></i>

        <i class="iconfont icon-message" @click="goTo('/gif')"></i>

        <i class="iconfont icon-Processsettings" @click="goTo('/mine')"></i>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      selected: 'gif'
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {
    change (val) {
      this.$emit('tableChange', val)
    },
    goTo (path) {
      this.$router.replace(path)
    }
  }
  // watch: {
  //   selected: function (val, oldval) {
  //     this.$emit('tableChange', val)
  //   }
  // }
}
</script>

<style scoped lang="less">
.tableBar{
  position: fixed;
  width: 100%;
  height: 40px;
  bottom: 5px;
  display: flex;
  border-top: 1px solid #eee;
  justify-content: space-around;
  align-items: center;
  color:red;
  .iconfont{
    font-size:30px;
  }
}
</style>
