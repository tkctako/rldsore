<template>
  <div class="new-content">
    <div class="col-12">
      <h1>Most Wanted</h1>
    </div>
    <div class="col-12">
      <h1 class="emphasize-title">The</h1>
    </div>
    <div class="col-12">
      <h1 class="emphasize-title">Italian</h1>
    </div>
    <div class="col-12">
      <h1 class="emphasize-title">linen-cotton</h1>
    </div>
    <div class="col-12">
      <h1 class="emphasize-title">Ludlow</h1>
    </div>
    <div class="col-12">
      <h1 class="emphasize-title">blazer</h1>
    </div>
    <div class="col-12">
      <router-link to="/productslist?category=男士" class="btn btn-primary">
      Shop now</router-link>
      <br>
      <br>
      <router-link to="/productslist?category=男士" class="btn btn-primary">
      Visit the mens shop</router-link>
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
.new-content{
  // 2022jul_0628_m_mostwated_img0.jpg
  background: url('../../../assets/image/news/mostWanted/2022jul_0628_m_mostwated_img0.jpg') center center no-repeat;
  background-size: cover;
  padding: 10rem 6rem;
  display:flex;
  flex-direction: column;
  width:100%;
  @media (max-width: 992px) {
    justify-content: center;
    text-align: center;
  }
}
h1{
  color:$hot-color;
}
.emphasize-title{
  font-size: $emphasize-title-size;
  @media (max-width: 992px) {
    font-size: $banner-title-size;
  }
}
</style>
