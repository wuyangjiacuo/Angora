<template>
  <div class="listContainer">
    <div class="listItem">
      <div class="userInfo">
        <div class="avatar">
          <img src="../../assets/corgi.jpeg" alt="">
        </div>
        <div class="articleInfo">
          <p class="title">标题</p>
          <p class="summary">内容简介</p>
          <p class="time">2018/07/22</p>
        </div>
      </div>
      <div class="comments">
        <div class="commentUsers">
          <img v-for="(imgSrc, index) in imgList" :key="index" :src="imgSrc" :style="{ left: index*20 + 'px' }" v-if="index < 5" alt="">
          <div v-if="imgList.length>5 && imgList.length<15" class="more">+{{imgList.length-5}}</div>
          <div v-if="imgList.length>=15" class="toomore">+{{imgList.length-5}}</div>
        </div>
        <div class="viewers">
          <span class="iconfont icon-chakan"></span>66666
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
      imgList: [
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
        'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg'
      ]
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {},
  watch: {}
}
</script>

<style scoped lang="less">
.listContainer{
  width: 100%;
  height: 700px;
  padding: 20px;
  box-sizing: border-box;
  .listItem{
    width: 100%;
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: #999 2px 2px 12px;
    .userInfo{
      width: 100%;
      height: 100px;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      .avatar{
        width: 25%;
        img{
          box-sizing: border-box;
          width: 75px;
          height: 75px;
          border-radius: 36px;
          border:solid 3px #e3e3e3;
        }
      }
      .articleInfo{
        width: 75%;
        padding-left: 10px;
        p{
          margin: 0;
        }
        .title{
          font-size: 25px;
          font-weight: bold;
        }
        .summary{
          color:#999
        }
        .time{
          margin-top: 10px;
          color:#1c819e;
        }
      }
    }
    .comments{
      display: flex;
      justify-content: space-around;
      .commentUsers{
        position: relative;
        width: 75%;
        height: 30px;
        .more{
          position: absolute;
          box-sizing: border-box;
          left: 100px;
          width: 30px;
          height: 30px;
          font-size: 10px;
          border-radius: 15px;
          color: #fff;
          text-align: center;
          line-height: 26px;
          background: #2aa9d2;
          border:solid 2px #eee;
        }
        .toomore{
          position: absolute;
          box-sizing: border-box;
          left: 100px;
          width: 40px;
          height: 30px;
          font-size: 10px;
          border-radius: 15px;
          color: #fff;
          text-align: center;
          line-height: 26px;
          background: #2aa9d2;
          border:solid 2px #eee;
        }
        img{
          position: absolute;
          box-sizing: border-box;
          width: 30px;
          height: 30px;
          border-radius: 15px;
          border:solid 2px #eee;
        }
      }
      .viewers{
        width: 25%;
        line-height: 30px;
        .iconfont{
          color:#53d397;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
