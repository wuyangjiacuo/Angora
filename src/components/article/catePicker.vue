<template>
  <div class="">
    <div class="catePicker">
      <mt-button type="default" @click="showPicker">{{firstLevelCate}}</mt-button>
      <mt-button type="default" @click="showPicker">{{secondLevelCate}}</mt-button>
      <!-- <mu-button flat @click="showPicker">{{firstLevelCate}}</mu-button>
      <mu-button flat @click="showPicker">{{secondLevelCate}}</mu-button> -->
    </div>
    <mt-popup
      class="popUp"
      v-model="popupVisible"
      :position="popupPositon"
      popup-transition="popup-fade">
      <mt-button class="searchBtn" type="primary"@click="cateChoose">确认</mt-button>
      <mt-picker :slots="slots" valueKey="cate_name" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      popupVisible: false,
      popupPositon: 'bottom',
      cateList: null, // 请求到的分类数据
      firstLevelCate: '',
      firstLevelCateId: '',
      secondLevelCate: '',
      secondLevelCateId: '',
      slots: [
        {
          flex: 1,
          values: [], // 一级分类
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    let hasCateInfo = true
    if (hasCateInfo) {
      this.getCateInfo()
    }
  },
  methods: {
    onValuesChange (picker, values) {
      this.firstLevelCate = values[0]
      this.secondLevelCate = values[1]
      this.getSecondLevel(picker)
      // this.cateChoose()
    },
    showPicker () {
      this.popupVisible = true
    },
    getCateInfo () {
      this.$http.getCate({})
        .then(res => {
          if (res.data.code === 200) {
            this.cateList = res.data.data
            // this.$store.commit("cate/setCateInfo", res.data.data);
            this.getFirstLevel()
          } else {
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    getFirstLevel () {
      let arr = []
      if (this.cateList) {
        this.cateList.forEach(item => {
          arr.push(item.cate_name)
        })
        this.slots[0].values = arr
      }
    },
    getSecondLevel (picker) {
      let arr = []
      if (!this.cateList) {
        return
      }
      for (let i = 0; i < this.cateList.length; i++) {
        if (this.firstLevelCate === this.cateList[i].cate_name) {
          this.cateList[i].children.forEach(item => {
            arr.push(item.cate_name)
          })
        }
      }
      picker.setSlotValues(1, arr)
    },
    cateChoose () {
      this.popupVisible = false
      // 循环cateList，获取id，查询文章列表
      for (let i = 0; i < this.cateList.length; i++) {
        if (this.firstLevelCate === this.cateList[i].cate_name) {
          this.firstLevelCateId = this.cateList[i].cate_id
          for (let j = 0; j < this.cateList[i].children.length; j++) {
            if (this.secondLevelCate === this.cateList[i].children[j].cate_name) {
              this.secondLevelCateId = this.cateList[i].children[j].cate_id
            }
          }
        }
      }
      // console.log(this.firstLevelCateId + ':' + this.secondLevelCateId)
      let chooseCate = {
        cateId1: this.firstLevelCateId,
        cateId2: this.secondLevelCateId
      }
      this.$store.commit('cate/setChooseCateInfo', chooseCate)
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.catePicker{
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  span{
    display: inline-block;
  }
}
.popUp{
  width: 100%;
  padding-bottom: 50px;
}
.searchBtn{
  margin-left: 80%;
}
</style>
