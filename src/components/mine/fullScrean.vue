<template>
  <div class="fullScrean">
    <div class="bg">
      <img src="../../assets/corgi.jpeg" alt="">
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
.fullScrean{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .bg{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    img{
      height: 100%;
    }
  }
}
</style>
