<template>
  <div style="padding-top:30px">
    <router-view></router-view>
    <div class="d-flex flex-wrap more-news  aos-init aos-animation"   data-aos="fade-up" data-aos-duration="1000">
      <div class="col-12">
        <h1 class="doc">More stories to explore…</h1>
      </div>
      <div class="col-lg-4 mb-3" v-for="(news, index) in moreNews" :key="index">
        <img :src="news.img" class="img-fluid rounded">
        <div class="more-news-content_title">
          <h4 class="doc">{{ news.title }}</h4>
        </div>
        <router-link class="doc btn btn-primary" to="/productslist?category=男士">{{ news.button }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moreNews: [
        {
          img: require('../../assets/image/moreNews-2.jpg'),
          title: 'The edit: summer in the city',
          button: 'See the roundup'
        },
        {
          img: require('../../assets/image/moreNews-6.jpg'),
          title: 'Suiting up at The Somerset House',
          button: 'See the roundup'
        },
        {
          img: require('../../assets/image/moreNews-7.jpg'),
          title: 'The edit: summer blues',
          button: 'Shop the roundup'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/all.scss';
.more-news{
  padding: 2rem;
  background-color: $news-color;
  .doc{
    color:$hot-color;
  }
}
.more-news-content{
  &_title{
    height:70px;
  }
}
</style>
