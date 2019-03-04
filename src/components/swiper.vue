<template>  
  <div class="swiper">
    <div class="warp">
      <Carousel autoplay v-model="value" loop class="swiper-list">
        <CarouselItem>
          <div class="demo-carousel">
            <img class="img-pic" src="/images/pic-1.jpg" alt="" srcset="">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img class="img-pic" src="/images/pic-3.jpg" alt="" srcset="">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img class="img-pic" src="/images/pic-4.jpg" alt="" srcset="">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'swiper',
      value: 0,
    }
  },
  mounted() {  
  }
}
</script>

<style lang="less">
.swiper{
  width: 100%;
  height: 300px;
  .warp{
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    .swiper-list{
      width: 1200px;
      height: 300px;
      .img-pic{
        display: block;
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
