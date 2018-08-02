<template>
  <div class="detailContainer" @scroll="articleScroll">
    <div class="bottomBack">
      <mu-button v-if="showBottomBack" class="bottom_thumb_up" color="blue" icon @click="thumb_up">
        <mu-icon value="thumb_up"></mu-icon>
      </mu-button>
      <mu-button v-if="showBottomBack" class="bottom_back" color="blue" icon @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <mu-button v-else class="backBtn" color="blue" icon @click="back">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
    </div>
    <div class="bgImg">
      <img :src="imgUrl" alt="" ref="bgImg">
    </div>
    <div class="articleContainer" ref="wheel" @touchmove="move">
      <div class="richHtml" v-html="articleDetailMD">
        富文本渲染区域
      </div>
      <!-- <div class="">
        123
      </div> -->
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  props: ['articlId'],
  name: '',
  data () {
    return {
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532580468660&di=2fd9de1ea6c375d7ae1a6ef04b1407d4&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F17%2F99%2F58%2F38m58PICErX_1024.jpg',
      articleDetailMD: '',
      showBottomBack: false
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    this.getArticleInfo()
  },
  methods: {
    articleScroll (e) {
      // 监听屏幕滑动,获取文章框到屏幕上方高度
      let topMoveValuue = 300 - this.$refs.wheel.getBoundingClientRect().top
      this.$refs.bgImg.style.height = 100 + topMoveValuue / 30 + '%'
      if (topMoveValuue > 200) {
        this.showBottomBack = true
      } else {
        this.showBottomBack = false
      }
      // 滑动到一定程度出现点赞和返回图标
    },
    move (e) {
      // console.log(e.changedTouches[0].clientY)
    },
    back () {
      this.$emit('back')
    },
    thumb_up () {
      console.log('点赞')
    },
    getArticleInfo () {
      let reqData = {
        '_id': this.articlId
      }
      this.$http.getArticleDetail(reqData)
        .then(res => {
          if (res.data.code === 200) {
            this.articleDetailMD = marked(res.data.data.article_content)
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  watch: {
    articlId: {
      handler: function (val, oldval) {
        console.log(val)
      }
    }
  }
}
</script>

<style scoped lang="less">
.detailContainer{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  .bgImg{
    position: fixed;
    width: 100%;
    top: -50px;
    height: 400px;
    overflow: hidden;
    z-index:-1;
    img{
      height: 100%;
      // animation: bgScale 5s;
    }
  }
  .articleContainer{
    background: #fff;
    width: 100%;
    margin-top: 300px;
    padding: 30px 30px 70px 30px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .bottomBack{
    .backBtn{
      position: fixed;
      top: 30px;
      left: 30px;
    }
    .bottom_thumb_up{
      position: fixed;
      bottom: 100px;
      right: 80px;
    }
    .bottom_back{
      position: fixed;
      bottom: 100px;
      right: 20px;
    }
  }
}
// @keyframes bgScale {
//   0% {transform: scale(1);}
//   100% {transform: scale(1.3);}
// }
</style>
