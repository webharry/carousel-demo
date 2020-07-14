<template>
  <div class="swiper-container">
    <swiper
      class="swiper-wrapper"
      ref="mySwiper"
      id="parent"
      :options="swiperOptions"
    >
      <swiper-slide class="swiper-slide">
        <img src="../../assets/img/logo.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../assets/img/logo.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../assets/img/logo.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../assets/img/logo.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="../../assets/img/logo.png" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  data() {
    return {
      swiperOptions: {
        effect: "coverflow",
        pagination: {
          el: ".swiper-pagination",
          clickab: true,
        },
        // Some Swiper option/callback...
        speed: 300,
        autoplay: {
          delay: 1000, // 可选选项，自动滑动
        },
        // width: 800,
        height: 300,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 1000, false);
  },
};
</script>
<style lang="less">
#parent /deep/ .swiper-pagination-bullet {
  background-color: "red";
}
</style>
