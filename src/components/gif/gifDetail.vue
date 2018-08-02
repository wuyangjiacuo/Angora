<template>
  <div class="gifListContainer">
    <div class="gifList">
      <div class="gitItem" v-for="gif in gifData.picInfo" :key="gif.pic_id">
        <img v-lazy="gif.source" :src="gif.source" alt="">
        <!-- <img :src="gif.source" alt=""> -->
        <p>{{gif.add_intro}}</p>
      </div>
    </div>
    <mu-button fab small color="primary" class="backBtn" @click="back">
      <mu-icon value="grade"></mu-icon>
    </mu-button>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['gifData'],
  data () {
    return {}
  },
  methods: {
    back () {
      this.$emit('back')
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.gifListContainer{
  .gifList{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    padding-bottom: 50px;
    .gitItem{
      width: 100%;
      padding: 10px;
      img{
        width: 100%;
      }
      p{
        text-align: center;
      }
    }
  }
  .backBtn{
    position: fixed;
    right: 30px;
    bottom: 70px;
  }
}
</style>
