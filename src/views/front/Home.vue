<template>
    <div>
      <BannerSider/>
      <div class="Arrivals">
        <div class="pt-2">
          <h1>新品到貨</h1>
        </div>
        <div>
          <router-link to="/productslist?category=女士" class="btn btn-outline-light rounded-0 mr-3"> 女士服裝</router-link>
          <router-link to="/productslist?category=男士" class="btn btn-outline-light rounded-0"> 男士服裝</router-link>
        </div>
      </div>
      <div class="row news mb-5">
        <!-- news1 -->
        <div class="col-md-6 aos-init aos-animation" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src="../../assets/image/news-1.png" class="img-fluid rounded">
        </div>
        <div class="col-md-6 news-content aos-init aos-animation" data-aos="zoom-in" data-aos-duration="1000">
            <h3 class="banner-title">Dress</h3>
            <h3 class="banner-subtitle">Yout summer dress code</h3>
            <router-link to="/productslist" class="btn btn-primary"> Shop new dresses</router-link>
        </div>
        <!-- news2 -->
        <div class="col-md-12 new-box">
          <div class="col-md-6 news-content aos-init aos-animation" data-aos="zoom-in" data-aos-duration="1000">
            <h3 class="banner-title">Swim</h3>
            <h3 class="banner-subtitle">Best in swim since 1983</h3>
            <router-link to="/productslist" class="btn btn-primary"> Shop the latest</router-link>
          </div>
          <div class="col-md-6 aos-init aos-animation" data-aos="zoom-in-up" data-aos-duration="1000">
            <img src="../../assets/image/news-2.png" class="img-fluid rounded">
          </div>
        </div>
        <!-- news3 -->
        <div class="col-md-6 aos-init aos-animation" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src="../../assets/image/news-3.png" class="img-fluid rounded">
        </div>
        <div class="col-md-6 news-content aos-init aos-animation" data-aos="zoom-in" data-aos-duration="1000">
            <h3 class="banner-title">Bag</h3>
            <h3 class="banner-subtitle">Summer,in the bag</h3>
            <router-link to="/productslist" class="btn btn-primary"> Shop straw accessories</router-link>
        </div>
        <!-- news4 -->
        <div class="col-md-12 new-box">
          <div class="col-md-6 news-content aos-init aos-animation" data-aos="zoom-in" data-aos-duration="1000">
            <h3 class="banner-title">Fabric</h3>
            <h3 class="banner-subtitle">Get your steps in SculptStretch</h3>
            <router-link to="/productslist" class="btn btn-primary"> Shop our new ribbed active fabric</router-link>
          </div>
          <div class="col-md-6 aos-init aos-animation" data-aos="zoom-in-up" data-aos-duration="1000">
            <img src="../../assets/image/news-4.png" class="img-fluid rounded">
          </div>
        </div>
      </div>
      <div class="mb-5 px-5">
        <h1 class="banner-title">Where style meets creativity</h1>
      </div>
      <div class="row more-news aos-init aos-animation" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-12">
          <div class="more-news-content_one">
            <img src="../../assets/image/moreNews-1.jpg" class="img-fluid rounded more-news-content_img-one">
            <!-- <router-link class="more-news-content_img-one"  to="news/love"></router-link> -->
            <h1 class="doc">Love is for everybody</h1>
            <router-link class="doc btn btn-primary" to="news/love">Celebrate Pride season</router-link>
          </div>
        </div>
        <div class="col-lg-3">
          <img src="../../assets/image/moreNews-2.jpg" class="img-fluid rounded">
          <div class="more-news-content_title">
            <h4 class="doc">The edit: summer in the city</h4>
          </div>
          <router-link class="doc btn btn-primary" to="news/love">Shop the roundup</router-link>
        </div>
        <div class="col-lg-3">
          <img src="../../assets/image/moreNews-3.jpg" class="img-fluid rounded">
          <div class="more-news-content_title">
            <h4 class="doc">Most wanted: the Italian Linen-cotton blazer</h4>
          </div>
          <router-link class="doc btn btn-primary" to="news/mostwant">See the details</router-link>
        </div>
        <div class="col-lg-5">
          <div class="more-news-content_four">
            <img src="../../assets/image/moreNews-4.jpg" class="img-fluid rounded more-news-content_img-four">
            <h2 class="doc">Suiting up with Knox Robinson</h2>
            <router-link class="doc btn btn-primary" to="news/suit">See the story</router-link>
          </div>
        </div>
        <!-- <div class="col-lg-3">
          <div class="more-news-content">
            <img src="../../assets/image/moreNews-5.jpg" class="img-fluid rounded">
            <div class="more-news-content_title">
              <h4 class="doc">Sporting life: Colorado with Kyle Kivijärvi</h4>
            </div>
            <router-link class="doc btn btn-primary" to="news/love">See the story</router-link>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="more-news-content">
            <img src="../../assets/image/moreNews-6.jpg" class="img-fluid rounded">
            <div class="more-news-content_title">
              <h4 class="doc">Suiting up at The Somerset House</h4>
            </div>
            <router-link class="doc btn btn-primary" to="news/love">Go inside the showroom</router-link>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="more-news-content">
            <img src="../../assets/image/moreNews-7.jpg" class="img-fluid rounded">
            <div class="more-news-content_title">
              <h4 class="doc">The edit: summer blues</h4>
            </div>
            <router-link class="doc btn btn-primary" to="news/love">Shop the roundup</router-link>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="more-news-content">
            <img src="../../assets/image/moreNews-8.jpg" class="img-fluid rounded">
            <div class="more-news-content_title">
              <h4 class="doc">Sporting life: in the lab with Cliff Kapono</h4>
            </div>
            <router-link class="doc btn btn-primary" to="news/love">See the story</router-link>
          </div>
        </div> -->
      </div>
      <CardSider/>
    </div>
</template>

<script>
import BannerSider from '@/components/BannerSider.vue';
import CardSider from '@/components/CardSider.vue';
export default {
  data() {
    return {}
  },
  methods: {
  },
  components: {
    BannerSider,
    CardSider
  },
  created() {
    const vm = this;
    vm.$store.dispatch('productsModules/setNowCategory', 'all');
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/all.scss';

.Arrivals{
  background: url('../../assets/image/arrivals.png') center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 3rem 0;
  h1{
    color: $gray-100;
  }
  div,button{
    margin-right: 25px;
  }
  @media (max-width: 767px) {
    div,button{
      margin-right: 0px;
    }
  }
}
.news{
  display: flex;
  align-items: center;
    text-align: center;
    h3 {
    font-family: $font-family-title;
    }
    p {
        font-family: $font-family-text;
    }
    >div{
      margin-bottom: 3rem;
    }
}
.new-box{
  display:flex;
  flex-wrap:wrap;
  @media (max-width: 767px) {
    flex-direction: column-reverse ;
    >div{
      margin-bottom: 3rem;
    }
  }
}
.news-content{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .banner-subtitle{
    font-size: $display4-size;
  }
  .banner-title{
    font-size: $display2-size;
  }

}
.banner-title{
    font-size: $display4-size;
}
.more-news{
  padding: 2rem;
  background-color: $news-color;
  .doc{
    color:rgb(253, 243, 229)
  }
  >div{
    margin-bottom: 2rem;
  }
}
.more-news-content{
  &_title{
    @media (min-width: 1180px) {
      height:90px;
    }
  }
  &_one{
    @media (min-width: 1180px) {
      position: relative;
      top: -10%;
    }
  }
  &_four{
    @media (min-width: 1180px) {
      position: relative;
      top: -23.5%;
    }
  }
  &_img-one{
    // background: url('../../assets/image/moreNews-1.jpg') center center no-repeat;
    // background-size: cover;
    // height:400px;
    // cursor:pointer;
    @media (min-width: 1180px) {
      width:70%;
    }
  }
  &_img-four{
    @media (min-width: 1180px) {
      width:80%;
    }
  }
}
</style>
