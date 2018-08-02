<template>
  <div class="demo-loadmore-wrap listContainer">
    <!-- 上拉加载,下拉刷新 -->
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <!--单个item  -->
          <div class="listItem"
          v-if="articleList!==[]"
          v-for="item in articleList" :key='item.index'>
            <div class="userInfo">
              <div class="avatar">
                <img :src="item.userInfo[0].avatar" alt="">
              </div>
              <div class="userNameInfo">
                <p class="userName">{{item.userInfo[0].nickName}}</p>
                <p class="time">{{item.lastModify}}</p>
              </div>
            </div>
            <div class="articleInfo" @click="goToDetail(item._id)">
              <p>{{item.article_title}}</p>
            </div>
            <div class="comments">
              <!-- <div class="commentUsers">
                <img v-for="(imgSrc, index) in imgList" :key="index" :src="imgSrc" :style="{ left: index*20 + 'px' }" v-if="index < 5" alt="">
                <div v-if="imgList.length>5 && imgList.length<15" class="more">+{{imgList.length-5}}</div>
                <div v-if="imgList.length>=15" class="toomore">+{{imgList.length-5}}</div>
              </div> -->
              <div class="viewers">
                <!-- 点赞按过后颜色改为gray -->
                <!-- <mu-button color="blue" icon>
                  <mu-icon value="thumb_up"></mu-icon>
                  <span>123</span>
                </mu-button> -->
                <mu-button color="blue" icon>
                  <i class="iconfont icon-chakan"></i>
                  <span>{{item.views}}</span>
                </mu-button>
              </div>
            </div>
          </div>
          <div class="space"></div>

        <!--单个item  -->
      </mu-load-more>
    </mu-container>
    <div class="space"></div>
    <!-- 上拉加载,下拉刷新 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: '',
  data () {
    return {
      queryData: {
        cate_1_id: 1,
        cate_2_id: 1,
        page: 1,
        pageSize: 8
      },
      articleList: [],
      refreshing: false,
      loading: false
      // imgList: [
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg',
      //   'http://s9.rr.itc.cn/r/wapChange/20169_13_19/a83r0r6186461648352.jpeg'
      // ]
    }
  },
  computed: {
    ...mapState({
      cate_1_id: state => state.cate.select_1_id,
      cate_2_id: state => state.cate.select_2_id
    })
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    this.refresh()
  },
  methods: {
    refresh () {
      this.articleList = []
      this.refreshing = true
      this.$refs.container.scrollTop = 0
      this.initQueryData()
      this.getArticleList()
    },
    initQueryData () {
      this.queryData.page = 1
    },
    load () {
      this.loading = true
      this.queryData.page++
      this.getArticleList()
      // axios
    },
    goToDetail (id) {
      this.$emit('chooseArticle', id)
    },
    getArticleList () {
      this.articleList = []
      this.$http.getArticleList(this.queryData).then(res => {
        this.refreshing = false
        this.loading = false
        if (res.data.code === 200) {
          res.data.data.forEach(item => {
            this.articleList.push(item)
          })
        } else {
          console.log(res.data)
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  watch: {
    // 监听对象的属性一定要加deep
    cate_1_id: {
      handler: function (val, oldval) {
        this.queryData.cate_1_id = this.cate_1_id
        this.queryData.cate_2_id = this.cate_2_id
        console.log(this.queryData)
        this.getArticleList()
      }
    },
    cate_2_id: {
      handler: function (val, oldval) {
        this.queryData.cate_1_id = this.cate_1_id
        this.queryData.cate_2_id = this.cate_2_id
        this.getArticleList()
      }
    }
  }
}
</script>

<style scoped lang="less">
.space{
  width: 100%;
  height: 70px;
}
.demo-loadmore-content {
  width: 100%;
  height: 100%;
  // padding: 20px 20px 50px 20px;
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.listContainer{
  // width: 100%;
  // height: 700px;
  // padding: 20px;
  // box-sizing: border-box;
  width: 100%;
  height: 700px;
  // padding: 20px 20px 50px 20px;
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .listItem{
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: #999 2px 2px 12px;
    .userInfo{
      width: 100%;
      height: 40px;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      .avatar{
        width: 15%;
        img{
          box-sizing: border-box;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          border:solid 3px #e3e3e3;
        }
      }
      .userNameInfo{
        width: 85%;
        padding-left: 5px;
        p{
          margin: 0;
        }
        .userName{
          font-size: 13px;
        }
        .time{
          font-size: 12px;
          color:#999
        }
      }
    }
    .comments{
      display: flex;
      justify-content: space-around;
      .commentUsers{
        position: relative;
        width: 55%;
        height: 48px;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
        width: 45%;
        display: flex;
        justify-content: space-around;
        .icon-container .mu-icon {
          font-size: 10px;
          margin-bottom: 12px;
        }
        span{
          font-size:10px
        }
      }
    }
  }
}
</style>
