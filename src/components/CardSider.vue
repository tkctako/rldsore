<template>
    <div class="mb-4 text-center mt-4 px-5 aos-init aos-animation"
    data-aos="fade-up" data-aos-duration="1000">
        <h1>You’ll Also Love</h1>
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in newProducts" :key="item.id">
                <ul class="sider" :style="{backgroundImage:`url(${item.imageUrl})`}"
                @click.prevent="productBtn(item.id)">
                    <li class="sider-rect">{{ item.title }}</li>
                </ul>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4, // 每一個畫面有幾個swiper-slide
        slidesPerColumn: 1, // 每一個畫面有幾列swiper-slide
        spaceBetween: 15, // swiper-slide間格
        autoplay: { // 自動撥放-delay延遲
          delay: 4500
        },
        loop: true,
        breakpoints: { // RWD
          992: {
            slidesPerView: 4
          },
          767: {
            slidesPerView: 2
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
          draggable: true,
          snapOnRelease: true
        }
      }
    }
  },
  computed: {
    newProducts() {
      const vm = this;
      if (vm.nowCategory !== 'all') {
        return vm.products.filter(item => item.is_enabled === 1 &&
        item.options.mainCategory === vm.nowCategory).slice(0, 12);
      } else {
        return vm.products.filter(item => item.is_enabled === 1).slice(0, 12);
      }
    },
    ...mapGetters('productsModules', ['products', 'nowCategory'])
  },
  methods: {
    getProducts() {
      this.$store.dispatch('productsModules/getProducts', { isPagination: false });
    },
    productBtn(productId) {
      const vm = this;
      vm.$router.push({ path: `/productslist/${productId}` });
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    const vm = this;
    vm.getProducts();
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/all.scss';
.sider{
    min-height:250px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-radius: 0.25rem;
    border: 1px solid $hot-color;
    cursor: pointer;
}
.sider-rect{
    display:flex;
    flex:1;
    justify-content: center;
    opacity: 0;
    position:absolute;
    height:100%;
    width:100%;
    background-color: rgba($primary-color,0.5);
    transition: all 0.3s ease;
    color: $white-color;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    align-items: center;
    &:hover, &:active {
        opacity: 1;
    }
}
</style>
