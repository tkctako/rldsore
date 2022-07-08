<template>
  <div class="row">
    <div class="d-flex flex-wrap mb-4">
      <div class="col-12 title  aos-init aos-animation"  data-aos="fade-down" data-aos-duration="1000">
        <h1 class="emphasize-title">Suitng Up</h1>
        <h1 class="banner-title">with Knox Robinson</h1>
      </div>
      <div class="col-12 col-lg-7">
        <img src="../../../assets/image/news/suit/2022may_0517_knox_img0a.jpg" class="img-fluid rounded">
      </div>
      <div class="col-12 col-lg-5">
        <img src="../../../assets/image/news/suit/2022may_0517_knox_img0b.jpg" class="img-fluid rounded">
      </div>
    </div>
    <div class="d-flex new-box">
      <div class="col-md-6">
         <img src="../../../assets/image/news/suit/2022may_0517_knox_img8.jpg" class="img-fluid rounded">
      </div>
      <div class="col-md-6 text-center d-flex flex-column justify-content-center align-items-center aos-init aos-animation"
      data-aos="fade-right" data-aos-duration="1000">
        <h2>“</h2>
        <h2 class="col-md-9">
          What do I love about being queer? Just about everything! I
          feel proud of my identity every hour of every day. I feel
          proud of my community from the moment I wake up to the
          moment I go to bed. I think we’re in a powerful moment of
          revolution and education and that thrills me to no end.
        </h2>
        <h2>“</h2>
      </div>
      <div class="col-md-6 mt-5">
        <img src="../../../assets/image/news/suit/2022may_0517_knox_img6.jpg" class="img-fluid rounded">
      </div>
      <div class="col-md-6 mt-5">
        <img src="../../../assets/image/news/suit/2022may_0517_knox_img5.jpg" class="img-fluid rounded">
      </div>
      <div class="col-md-12 mt-5 mb-5 text-center d-flex flex-column flex-column justify-content-center align-items-center">
      <h1>“</h1>
      <h1 class="col-md-9">
        The spirit of freedom and liberation
        that running gives you is a gift, and a passport
        to go anywhere and look at anything.
      </h1>
      <h1>“</h1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '../../../assets/all.scss';
.title{
  @media (min-width: 992px) {
    position: absolute;
    top:50px;
    z-index: 1111;
    color: $white;
    padding:4rem;
  }
}
.new-box{
  display:flex;
  flex-wrap:wrap;
  margin-top: 3rem;
  @media (max-width: 767px) {
    >div{
      margin-bottom: 3rem;
    }
  }
}
.emphasize-title{
  font-size: $emphasize-title-size;
  @media (max-width: 767px) {
    font-size: $emphasize-mobile-size;
  }
}
.banner-title{
  font-size: $banner-title-size;
  @media (max-width: 767px) {
    font-size: $banner-subTitle-size;
  }
}
</style>
