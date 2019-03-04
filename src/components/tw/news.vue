<template>  
  <div class="news">
    <div class="map">
      <img src="/images/map.png" alt="" srcset="">
    </div>
    <div class="copyright">
      <p>
        <span v-for="(i, k) in copyright" :key="k">
          {{i.name}}
        </span>
      </p>
      <p>© 2019 CopyRight, Inc.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'news',
      copyright:[
        {name:'条款'},
        {name:'隐私政策'},
        {name:'Cookie'},
        {name:'广告信息'},
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.news{
  width: 190px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-left: 10px;
  .map{
    img{
      display: inline-block;
      width: 170px;
      height: 170px;
      margin: 10px;
    }
  }
  .copyright{
    p{
      line-height: 20px;
      margin: 0 10px;
      span{
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
}
</style>

