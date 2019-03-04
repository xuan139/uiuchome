<template>
  <div class="home">
    <header-mod></header-mod>
    <swiper></swiper>
    <div class="content">
      <twitter class="tw-fixed"></twitter>
    </div>
    <footer-mod></footer-mod>
  </div>
</template>

<script>
import header       from '@/components/header.vue'
import footer       from '@/components/footer.vue'
import swiper       from '@/components/swiper.vue'
import twitter      from '@/components/tw/index.vue'

export default {
  name: 'home',
  components: {
    headerMod: header,
    footerMod: footer,
    swiper,
    twitter,
  },
  data() {
    return {
      msg: 'uiuc'
    }
  },
  mounted() {
    // toDo
  },
}
</script>
<style lang="less" scoped>
.home{
  position: relative;
}
// .content{
  // background-color: rgba(255,229,100,.3);
// }
</style>
