<template>
  <div class="container">
    <my-loading :active.sync="isLoading"></my-loading>
    <Alert/>
    <nav class="bg-white fixed-top navbar navbar-expand-lg navbar-light px-0">
      <div class="container px-3">
        <router-link class="navbar-brand logo" to="/">J.CREW</router-link>
        <div class="order-lg-2 float-right user-box">
          <router-link class="px-2 login" to="/login">
            <i class="fas fa-user-circle fa-lg"></i>
          </router-link>
          <div class="btn-group favorite">
              <button id="btnGroupDrop1" type="button" class="btn favorite-btn" data-toggle="dropdown">
              <i class="fas fa-heart fa-lg"></i>
                  <span class="badge badge-pill badge-danger">{{ favoritesLength }}</span>
              </button>
              <div class="dropdown-menu  dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                  <div class="p-2 px-sm-3">
                      <h5 class="text-center">我的最愛</h5>
                      <table class="table mb-2" style="min-width:270px">
                          <tbody>
                              <tr v-for="favorite in favorites" :key="favorite.id">
                                  <td class="text-center d-flex">
                                      <div class="thumbnail col-3"
                                      :style="{backgroundImage: `url(${favorite.imageUrl})`}">
                                      </div>
                                      <div class="col-9 text-left">
                                      <a href="#" class="text-danger favorite-list-delbtn float-right"
                                      @click.prevent="removeFavorite(favorite, false)">
                                          <i class="fas fa-times"></i>
                                      </a>
                                      <router-link :to="`/productslist/${favorite.id}`">
                                      {{ favorite.title }}
                                      </router-link>
                                      <br>
                                      <small>{{ favorite.price | currency}} / {{ favorite.unit }}</small>
                                      </div>
                                  </td>
                              </tr>
                              <tr v-if="carts.length==0">
                                  <td class="text-center">購物車是空的</td>
                              </tr>
                          </tbody>
                      </table>
                      <button class="btn btn-outline-danger btn-block"
                      :class="{'d-none' : !favorites.length}"
                      data-toggle="modal" data-target="#delFavoriteModal">
                          刪除全部
                      </button>
                  </div>
              </div>
          </div>
          <div class="btn-group cart" :class="{'show': isCartShow}">
              <button id="btnGroupDrop1" type="button" class="btn cart-btn" data-toggle="dropdown">
              <i class="fas fa-shopping-cart fa-lg"></i>
              <span class="badge badge-pill badge-danger">{{ cartsLength }}</span>
              </button>
              <div class="dropdown-menu  dropdown-menu-right" :class="{'show': isCartShow}">
                  <div class="p-2 px-sm-3">
                      <h5 class="text-center">購物車清單</h5>
                      <table class="table mb-2" style="min-width:270px">
                          <tbody>
                              <tr v-for="cart in carts.carts" :key="cart.id">
                                  <td class="text-center d-flex">
                                      <div class="thumbnail col-3"
                                      :style="{backgroundImage: `url(${cart.product.imageUrl})`}">
                                      </div>
                                      <div class="col-9 text-left">
                                      <a href="#" class="float-right text-danger" @click.prevent="removeCartItem(cart.id)">
                                          <i class="fas fa-trash-alt"></i>
                                      </a>
                                      <p class="mb-0">{{ cart.product.title }} ({{ cart.size }})</p>
                                      <small>數量: {{ cart.qty }} {{ cart.product.unit }}</small>
                                      <br>
                                      <small>{{ cart.total | currency }}</small>
                                      </div>
                                  </td>
                              </tr>
                              <tr v-if="carts.length==0">
                                  <td class="text-center">購物車是空的</td>
                              </tr>
                          </tbody>
                      </table>
                      <hr>
                      <div class="text-center">
                          <p>總金額 : {{ carts.final_total | currency }}</p>
                      </div>
                      <router-link to="/createorder" class="btn btn-primary mb-2 d-block"
                      v-if="carts.total">
                          <i class="fas fa-cart-arrow-down"></i> 結帳去
                      </router-link>
                  </div>
              </div>
          </div>
        </div>
        <button class="navbar-toggler navbtn" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse toggle-menu" id="navbarSupportedContent">
            <ul class="navbar-nav  w-100">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">首頁</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    女士
                    </a>
                    <div class="dropdown-menu">
                        <router-link class="nav-link subcategory" :to="{ path: '/productslist', query: { category: '女士', subCategory: '套裝'} }">
                          套裝
                          <img src="../assets/image/dress.svg" width="25px" alt="">
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link subcategory" :to="{ path: '/productslist', query: { category: '女士', subCategory: '上半身'} }">
                          <div>上半身</div>
                          <img src="../assets/image/neck-T-shirt.svg" width="25px" alt="">
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link subcategory" to="/productslist?category=女士&subCategory=下半身">
                          <div>下半身</div>
                          <img src="../assets/image/pant.svg" width="25px" alt="">
                        </router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    男士
                    </a>
                    <div class="dropdown-menu">
                        <router-link class="nav-link subcategory" to="/productslist?category=男士&subCategory=套裝">
                          <div>套裝</div>
                          <img src="../assets/image/suit.svg" width="25px" alt="">
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link subcategory" to="/productslist?category=男士&subCategory=上半身">
                          <div>上半身</div>
                          <img src="../assets/image/jacket.svg" width="25px" alt="">
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link subcategory" to="/productslist?category=男士&subCategory=下半身">
                          <div>下半身</div>
                          <img src="../assets/image/pant.svg" width="25px" alt="">
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </nav>
    <main style="padding-top:64px">
     <router-view></router-view>
    </main>
    <div id="footerContact">
        <a href="#" class="d-md-flex align-items-center justify-content-center" title="LINE 客服">
            <!-- <i class="fab fa-line" style="font-size: 50px;"></i> -->
            <img src="../assets/image/line_logo_icon_187301.svg" width="50px" alt="">
        </a>
        <a href="#" class="fab-icon d-md-flex align-items-center justify-content-center mp-click d-flex" title="Facebook 客服">
            <!-- <i class="fab fa-facebook-messenger text-primary rounded-0" style="font-size: 40px;"></i> -->
            <img src="../assets/image/messenger_icon_187316.svg" width="50px" alt="">
        </a>
        <a href="#" class="fab-icon d-md-flex align-items-center justify-content-center mp-click d-flex" title="Facebook 客服">
            <!-- <i class="fab fa-facebook-messenger text-primary rounded-0" style="font-size: 40px;"></i> -->
            <img src="../assets/image/instagram_logo_icon_187313.svg" width="50px" alt="">
        </a>
    </div>
    <div id="arrowTop" :class="{ 'top': istop, 'notTop': !istop}">
      <a href="#" @click.prevent="backToTop" class="fab-icon d-md-flex align-items-center justify-content-center mp-click d-flex" title="回到頂部">
          <!-- <i class="fas fa-angle-up" style="font-size: 40px;"></i> -->
          <img src="../assets/image/TOP.svg" width="50px" alt="">
      </a>
    </div>
    <div class="bg-light">
        <ul class="d-md-flex footer aos-init aos-animation"  data-aos="fade-up" data-aos-duration="1000">
            <li >
                <h5 class="footer-title">Help</h5>
                <ul>
                  <li><a href="#">Customer Service</a></li>
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Returns & Exchanges</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">International Orders</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
            </li>
            <li >
                <h5 class="footer-title">Quick Links</h5>
                <ul>
                  <li><a href="#">Find a Store</a></li>
                  <li><a href="#">Size Charts</a></li>
                  <li><a href="#">Offers & Promotions</a></li>
                </ul>
            </li>
            <li>
                <h5 class="footer-title">Follow Us</h5>
                <ul>
                    <li>
                        <a href="#" class="text-primary">
                            <span class="fa-stack fa-lg">
                            <i class="fa-brands fa-facebook-square fa-2x"></i>
                            </span>
                        </a>
                        <a href="#" class="text-primary">
                            <span class="fa-stack fa-lg">
                            <i class="fa-brands fa-twitter-square fa-2x"></i>
                            </span>
                        </a>
                        <a href="#" class="text-primary">
                            <span class="fa-stack fa-lg">
                            <i class="fa-brands fa-instagram-square fa-2x"></i>
                            </span>
                        </a>
                        <a href="#" class="text-primary">
                            <span class="fa-stack fa-lg">
                            <i class="fa-brands fa-line fa-2x"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="ml-lg-auto">
              <p class="mb-1"><b>Like Being First?</b></p>
              <p>Get can't-miss style news, before everybody else.</p>
              <form class="input-group">
                  <input class="form-control" type="mail" placeholder="Enter your email.">
                  <div class="input-group-append">
                      <button type="button" class="btn btn-dark">
                          SIGN UP
                      </button>
                  </div>
              </form>
            </li>
        </ul>
        <div class="copyright">
            ⓒ 2022 僅練習用，非商業用途，圖片來源自 https://www.jcrew.com/tw/
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from 'jquery';
import Alert from '@/components/AlertMessage';
export default {
  data() {
    return {
      istop: true,
      active: ''
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('cartModules', ['carts', 'cartsLength', 'isCartShow']),
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength'])
  },
  methods: {
    backToTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    },
    handleScroll() {
      this.active = window.scrollY;
    },
    removeCartItem(id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    removeFavorite(favorite, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: favorite, delall });
    },
    ...mapActions('cartModules', ['getCart', 'showCart']),
    ...mapActions('favoriteModules', ['getFavorite'])
  },
  components: {
    Alert
  },
  watch: {
    active() {
      if (this.active === 0) {
        this.istop = true;
      } else {
        this.istop = false;
      }
    }
  },
  created() {
    $('html,body').animate({
      scrollTop: 0
    }, 700)
    this.$store.dispatch('cartModules/getCart');
    this.$store.dispatch('favoriteModules/getFavorite');
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="scss">
@import '../assets/_custom.scss';
.logo {
  background-color: transparent;
  box-shadow: none;
  font-size: 2rem;
  font-weight: bold;
}
.navbtn {
    border: 0;
}
.user-box{
  display:flex;
  align-items: center;
  @media (max-width: 1180px) {
    position: relative;
    right:-25%;
  }
  @media (max-width: 767px) {
    position: relative;
    right:0%;
  }
}
.subcategory{
  display:flex;
  align-items: center;
}
.thumbnail{
    margin: auto;
    background-size: cover;
    width: 60px;
    height: 65px;
}
.cart-btn, .favorite-btn {
// padding-bottom: 3px;
font-size: 1rem;
cursor: pointer;
    .badge{
        position: absolute;
        top: auto;
        bottom: 1px;
        right: -1px;
        padding: 0.5 0rem;
        font-size: 0.7rem;
    }
}

.nav-item .dropdown-menu{
  border:0;
  @media (max-width: 992px) {
    border:0;
  }
}
.dropdown-menu {
  z-index: 9999;
  @media only screen and (max-width: 992px) {
    right:-70px;
  }
}
#footerContact{
  z-index: 9999;
  position:fixed;
  right: 1%;
  bottom: 30%;
  padding:0.2rem;
  display: flex;
  flex-direction: column;
  a{
      margin-bottom: 1rem;
      transition: all 0.3s ease 0s;
      filter: drop-shadow(0px 0px 5px #bfbfc6);
  }
  a:hover{
    filter: drop-shadow(0px 0px 8px #28282a);
  }
}
#arrowTop{
  z-index: 9999;
  position:fixed;
  bottom: 5%;
  padding:0.2rem;
  transition: 1s right ease;
  filter: drop-shadow(0px 0px 5px #e8e8ee);
}
.top{
  right:-5%;
  @media (max-width: 992px) {
    right:-10%;
  }
  @media (max-width: 767px) {
    right:-15%;
  }
}
.notTop{
  right:1%;
}
.footer{
  padding: 2rem;
  >li{
    padding-left: 1.5rem;
    @media (max-width: 767px) {
      padding-left: 0;
      margin-bottom: 1.5rem;
    }
  }
}
.copyright{
  padding: 1rem;
  text-align: right;
  color: $secondary-color;
  font-size: 0.6rem;
}
</style>
