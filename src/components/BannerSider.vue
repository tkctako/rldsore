<template>
    <div class="silder-wrap">
        <swiper :options="swiperOption">
            <swiper-slide >
                <div class="sider sider-1">
                    <div class="sider-rect"></div>
                    <div class="sider-content">
                        <p class="banner-subtitle">The Original</p>
                        <h1 class="banner-title">Chino Short</h1>
                        <p>Our summer-after-summer bast seller,
                        in four lengths and 16 colors.</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="sider  sider-2 sider-left">
                    <div class="sider-content">
                        <p class="banner-subtitle">Quality time</p>
                        <h1 class="banner-title">Chino Shirt</h1>
                        <p>Our summer-after-summer bast seller,
                        In four lengths and 16 colors.</p>
                    </div>
                    <div class="sider-rect"></div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="sider sider-3">
                    <div class="sider-rect"></div>
                    <div class="sider-content">
                        <p class="banner-subtitle">The Original</p>
                        <h1 class="banner-title">Chino Shoes</h1>
                        <p>Get your steps in SculptStretch</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
// eslint-disable-next-line
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        slidePreView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 4500
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 點擊頁碼可跳轉
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="scss">
@import '../assets/all.scss';
// .silder-wrap {
//   position: relative;
// }
.swiper-container {
  width: 100%;
  height: 500px;
  @media (max-width: 767px) {
    height: 400px;
  }
}
.sider{
    display:flex;
    width:100%;
    height:100%;
    // position:relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 767px) {
        flex-direction: column;
    }
}

.sider-left{
    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
}
.sider-1 {
  background-image: url('../assets/image/banner1.png');
  @media (max-width: 767px) {
    background-image: url('../assets/image/banner1(mobile).png');
  }
}
.sider-2 {
  background-image: url('../assets/image/banner3.jpg');
  @media (max-width: 767px) {
    background-image: url('../assets/image/banner3(mobile).png');
  }
}
.sider-3 {
  background-image: url('../assets/image/banner2.png');
  @media (max-width: 767px) {
    background-image: url('../assets/image/banner2(mobile).png');
  }
}
.sider-rect{
  @media (max-width: 767px) {
     flex: 0;
  }
  flex: 0.85;
  margin: 2.5rem;
}
.sider-content{
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: $white-color;
    font-family: $font-family-title;
    .banner-subtitle{
      font-size: $display5-size;
    }
    .banner-title{
      font-size: $display3-size;
    }
    p{
      margin:0 auto;
      width:50%
    }
}
</style>
