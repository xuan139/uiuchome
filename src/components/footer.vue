<template>  
  <div class="footer">
    <div class="warp">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'footer'
    }
  },
}
</script>

<style lang="less" scoped>
.footer{
  width: 100%;
  height: 60px;
  background-color: #1a263a;
  .warp{
    width: 1200px;
    margin: 0 auto;
  }
}
</style>

