<template>
  <div class="demo-loadmore-wrap">
    <!-- 上拉加载,下拉刷新 -->
    <mt-loadmore :top-method="refresh" :bottom-method="load" :bottom-all-loaded="allLoaded" ref="loadmore" class="demo-loadmore-content">
      <div class="listItem" v-for="item in gifList" :key='item.gallery_sesson' @click="choose(item)">
        <div class="ImgContainer">
          <img :src="item.picInfo[0].cover_url" alt="">
        </div>
        <div class="title">
          {{item.gallery_title}}
        </div>
      </div>
      <!-- <div class="space"></div> -->
    </mt-loadmore>
    <!-- <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <div class="listItem" v-for="item in gifList" :key='item.gallery_sesson' @click="choose(item)">
          <div class="ImgContainer">
            <img :src="item.picInfo[0].cover_url" alt="">
          </div>
          <div class="title">
            {{item.gallery_title}}
          </div>
        </div>
      </mu-load-more>
    </mu-container> -->

    <!-- 上拉加载,下拉刷新 -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      allLoaded: false,
      gifList: [],
      queryData: {
        page: 1,
        pageSize: 8
      }
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    this.refresh()
  },
  methods: {
    refresh () {
      this.gifList = []
      this.$refs.loadmore.onTopLoaded()
      this.initQueryData()
      this.getGifList()
    },
    load () {
      this.$refs.loadmore.onBottomLoaded()
      this.queryData.page++
      this.getGifList()
      // axios
    },
    initQueryData () {
      this.queryData.page = 1
      this.queryData.pageSize = 8
    },
    getGifList () {
      this.$http.getGifList(this.queryData).then(res => {
        this.refreshing = false
        this.loading = false
        if (res.data.code === 200) {
          res.data.data.forEach(item => {
            this.gifList.push(item)
          })
          this.allLoaded = true// 若数据已全部获取完毕
        }
      })
    },
    choose (gifData) {
      this.$emit('choose', gifData)
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.demo-loadmore-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  width: 100%;
  height: 600px;
  // padding: 0px 20px;
  flex: 1;
  overflow: auto;
  // box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  background: #eee;
}
.demo-loadmore-content {
  .listItem {
    width: 100%;
    height: 200px;
    margin: 20px auto 0 auto;
    overflow: hidden;
    border-radius: 10px;
    .ImgContainer {
      width: 100%;
      height: 150px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .title {
      width: 100%;
      height: 50px;
      padding: 10px;
      line-height: 30px;
      background: #fff;
      overflow: hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
    }
  }
}
// .space{
//   width: 100%;
//   height: 50px;
// }
</style>
