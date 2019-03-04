<template>
  <div class="twitter">
    <div class="warp"> 
      <userMod class="left-mod" @changeClick="changeClick"></userMod>
      <contentMod class="content-mod" :selectType="selectType"></contentMod>
      <newsMod class="right-mod"></newsMod>
    </div>    
  </div>
</template>

<script>
import content from './content.vue'
import news from './news.vue'
import user from './user.vue'
export default {
  components:{
    contentMod: content,
    userMod: user,
    newsMod: news,
  },
  data() {
    return {
      selectType: 1,
    }
  },
  mounted() {
    let vm = this;
    let leftDiv   = document.querySelector('.left-mod')
    let mvDIV     = document.querySelector('.content-mod')
    $(window).scroll(function(){
      let scrollWin = $(window).scrollTop();
      if(scrollWin >= 400){
        leftDiv.style.position  = 'fixed';
        leftDiv.style.top       = '60px';
        leftDiv.style.zIndex    = '9';
        mvDIV.style.marginLeft  = '200px';
      }else{
        leftDiv.style.position  = 'relative';
        leftDiv.style.top       = '';
        mvDIV.style.marginLeft  = '0';
      }
    });
  },
  methods: {
    changeClick(id){
      this.selectType = id
    }
  },
}
</script>

<style lang="less" scoped>
.twitter{
  width: 100%;
  padding-top: 20px;
  .warp{
    width: 1200px;
    margin: 0px auto;
    .left-mod{
      float: left;
    }
    .content-mod{
      float: left;
    }
    .right-mod{
      float: right;
    }
  }
  .warp::after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>

