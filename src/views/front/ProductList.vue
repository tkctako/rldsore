<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class=" breadcrumb bg-light">
                <li class="breadcrumb-item">
                    <router-link to="/">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                    產品列表
                </li>
                <li class="breadcrumb-item">
                    {{filterCategory}}服裝
                </li>
                <li class="breadcrumb-item" v-if="filterText">
                    搜尋 {{filterText}}
                </li>
            </ol>
        </nav>
        <div class="d-flex mb-2 flex-wrap">
            <div class="text-center mt-0 col-12 d-flex justify-content-center align-items-center">
              <h3>{{filterCategory}}服裝</h3>
              <a href="#" class="querBoxBtn" @click.prevent="openQueryBox">
                <i class="fa-solid fa-plus" ></i>
              </a>
            </div>
            <div class="col-lg-3 col-md-3 p-0 queryBox" :class="{'active' : !queryBox}">
                <div>
                  <div class="accordion" id="categoryBox">
                    <div class="card border-0">
                      <div class="card-header border-0 bg-transparent" id="headingThree">
                        <a  href="#" class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseThree"
                        aria-expanded="true" aria-controls="collapseThree">
                          <b>主分類</b>
                          <i class="fa-solid fa-plus"></i>
                        </a>
                      </div>
                      <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#categoryBox">
                        <div class="card-body row py-0 justify-content-around mb-2">
                          <button v-for="(categoryCheck, index) in category" :key="index"
                          type="button" class="btn  btn-sm rounded-0 w-40 mb-2 categoryBtn"
                          :class="{'btn-dark': categoryCheck.choose,'btn-outline-dark': !categoryCheck.choose}"
                          @click="getCategory(categoryCheck.title)">{{ categoryCheck.title }}</button>
                        </div>
                      </div>
                      <hr class="m-0">
                    </div>
                  </div>
                  <div class="accordion" id="subCategoryBox">
                    <div class="card border-0">
                      <div class="card-header border-0 bg-transparent" id="headingOne">
                        <a  href="#" class="boxCheck d-flex justify-content-between align-items-center"
                        data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                          <b>子分類</b>
                          <i class="fa-solid fa-plus"></i>
                        </a>
                      </div>
                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#subCategoryBox">
                        <div class="card-body d-flex flex-column py-0 mb-2">
                          <div v-for="(category, index) in subCategories" :key="index">
                            <input type="checkbox" :value="category.title" v-model="filterSubCategories"
                            @click="getSubCategories">
                          {{ category.title}}
                          </div>
                        </div>
                      </div>
                      <hr class="m-0">
                    </div>
                  </div>
                  <div class="accordion" id="sizeBox">
                    <div class="card border-0">
                      <div class="card-header border-0 bg-transparent" id="headingTwo">
                        <a  href="#" class="d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                          <b>Size</b>
                          <i class="fa-solid fa-plus"></i>
                        </a>
                      </div>
                      <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#sizeBox">
                        <div class="card-body row py-0 justify-content-around mb-2">
                          <button v-for="(sizeCheck, index) in filterSize" :key="index"
                          type="button" class="btn btn-sm rounded-0 w-40 mb-2 sizeBtn"
                          :class="{'btn-dark': sizeCheck.choose,'btn-outline-dark': !sizeCheck.choose}"
                          @click="getSize({name : sizeCheck.name, action : 'button'})">{{ sizeCheck.name }}</button>
                        </div>
                      </div>
                      <hr class="m-0">
                    </div>
                  </div>
                  <form class="input-group mb-3 px-3 py-2" @submit.prevent="search">
                      <input type="search" class="form-control" placeholder="search" v-model="searchText">
                      <div class="input-group-append">
                          <button class="input-group-text bg-light">
                              <i class="fas fa-search"></i>
                          </button>
                      </div>
                  </form>
                </div>
            </div>
            <div class="col-lg-9 col-md-9">
                <div class="row py-2 align-items-center">
                  <div>搜索條件：</div>
                  <div class="d-flex" v-for="(subCategory) in filterSubCategories" :key="subCategory">
                    <button type="button" class="btn btn-outline-dark btn-sm rounded-0 px-2
                     py-0 mr-2 d-flex align-items-center"
                     @click="removeSubCategory(subCategory)">
                      {{ subCategory}}&nbsp;
                      <i class="fa-solid fa-close"></i>
                    </button>
                  </div>
                  <div class="d-flex" v-for="(sizeCheck) in size" :key="sizeCheck.name">
                    <button type="button" v-if="sizeCheck.choose"
                    class="btn btn-outline-dark btn-sm rounded-0 px-2
                     py-0 mr-2 d-flex align-items-center"
                     @click="removeSize(sizeCheck.name)">
                      {{ sizeCheck.name }}&nbsp;
                      <i class="fa-solid fa-close"></i>
                    </button>
                  </div>
                  <div class="d-flex" v-if="filterText!=''">
                    <button type="button"
                    class="btn btn-outline-dark btn-sm rounded-0 px-2
                     py-0 mr-2 d-flex align-items-center"
                     @click="removeFilterText()">
                      關鍵字：{{ filterText }}&nbsp;
                      <i class="fa-solid fa-close"></i>
                    </button>
                  </div>
                  <div>
                    <a href="#" @click.prevent="removeAll"><b><u>clear all</u></b></a>
                  </div>
                  <div class="ml-auto pr-3 d-flex align-items-center">
                    <div class="mr-2">
                      <select name="" id="" class="p-1" v-model="nowPage" >
                        <option v-for="(page, index) in totalPage" :key="index" :value="page">
                        {{ page }}
                        </option>
                      </select>
                      of {{ totalPage}}
                    </div>
                    <small>共 {{ listProducts.length }} 筆</small>
                  </div>
                </div>
                <div class="row align-items-center mb-2">
                </div>
                <div class="row list">
                  <div class="col-lg-4 px-0 py-2" v-for="product in listProducts" :key="product.id">
                    <div class="card">
                        <router-link :style="{background: `url(${product.imageUrl}) center center no-repeat`,
                          backgroundSize: 'cover', height:'200px', cursor:'pointer'}"
                          :to="`productslist/${product.id}`"></router-link>
                        <div class="favorite">
                            <a href="#" class="text-danger" v-show="product.is_favorite"
                            @click.prevent="removeFavorite(product, false)">
                                <i class="fas fa-heart fa-lg"></i>
                            </a>
                            <a href="#" class="text-danger" v-show="!product.is_favorite"
                            @click.prevent="addFavorite(product)">
                                <i class="far fa-heart fa-lg"></i>
                            </a>
                        </div>
                        <div class="card-body py-2">
                            <h5 class="card-title mb-0"> {{ product.title }}</h5>
                            <div class="d-flex align-items-baseline">
                                <p class="card-text text-secondary mb-0">
                                    <del v-if="product.origin_price !== product.price"> {{ product.origin_price | currency}}</del>
                                </p>
                                <p class="card-text ml-auto h5"
                                    :class="{'text-danger':product.origin_price !== product.price}">
                                    NT {{ product.price | currency }}
                                </p>
                            </div>
                        </div>
                        <div class="product-more">
                            <router-link :to="`productslist/${product.id}`">查看更多</router-link>
                        </div>
                        <div class="product-soldout" v-if="!product.is_enabled">
                            <button class="btn btn-danger border" disabled>Sold Out</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      listProductLength: 9,
      nowPage: 1,
      queryBox: true,
      filterText: '',
      searchText: '',
      category: [
        { title: '男士', choose: false },
        { title: '女士', choose: false }
      ],
      subCategories: [
        { title: '套裝' },
        { title: '上半身' },
        { title: '下半身' }
      ],
      filterSubCategories: [],
      size: [
        { name: 'S', choose: false },
        { name: 'M', choose: false },
        { name: 'L', choose: false },
        { name: 'XL', choose: false },
        { name: '2L', choose: false },
        { name: '3L', choose: false }
      ],
      querySize: []
    }
  },
  computed: {
    // 總頁數
    totalPage: function() {
      const vm = this;
      if (vm.filterProducts.length % vm.listProductLength === 0) {
        return Math.floor(vm.filterProducts.length / vm.listProductLength);
      } else {
        return Math.floor(vm.filterProducts.length / vm.listProductLength) + 1;
      }
    },
    // 主分類篩選
    filterCategory: function() {
      const vm = this;
      const queryCategory = vm.$route.query.category;
      vm.category.forEach((v, i) => {
        if (queryCategory === v.title) {
          vm.category[i].choose = true;
        } else {
          vm.category[i].choose = false;
        }
      })
      return queryCategory;
    },
    // 尺寸篩選
    filterSize: function() {
      const vm = this;
      const sizeSet = new Set(vm.$route.query.size);
      vm.size.forEach((v, i) => {
        if (sizeSet.has(v.name)) {
          vm.size[i].choose = true;
        } else {
          vm.size[i].choose = false;
        }
      })
      return vm.size;
    },
    // 產品篩選
    filterProducts: function() {
      const vm = this;
      let result = vm.products;
      // 紀錄產品是否被收藏
      vm.favorites.forEach((v) => {
        const id = v.id;
        result.forEach((v, i) => {
          if (v.id === id) {
            result[i].is_favorite = true;
          }
        })
      })
      // 篩選主類別、子類別、尺寸以及關鍵字等條件
      if (vm.$route.query.category) {
        result = result.filter(item => item.options.mainCategory === vm.$route.query.category);
      }
      if (vm.$route.query.subCategory &&
        vm.$route.query.subCategory.length !== 0) {
        const querySubCategory = new Set(vm.$route.query.subCategory);
        result = result.filter((product) => {
          if (querySubCategory.has(product.category)) {
            return true;
          } else {
            return false;
          }
        });
      }
      if (vm.$route.query.size && vm.$route.query.size.length !== 0) {
        const querySize = new Set(vm.$route.query.size);
        result = result.filter((product) => {
          let sizeCheck = false;
          product.options.size.forEach((v) => {
            if (querySize.has(v)) {
              sizeCheck = true;
            }
          });
          return sizeCheck;
        });
      }
      if (vm.$route.query.filterText && vm.$route.query.filterText !== '') {
        result = result.filter(item => item.title.toLowerCase().match(vm.$route.query.filterText.toLowerCase()));
      }
      return result;
    },
    // 顯示於頁面的產品列表
    listProducts: function() {
      const vm = this;
      return vm.filterProducts.slice((vm.nowPage - 1) * vm.listProductLength, (vm.nowPage) * vm.listProductLength);
    },
    ...mapGetters('productsModules', ['products']),
    ...mapGetters('favoriteModules', ['favorites'])
  },
  watch: {
    '$route.query': function() {
      const vm = this;
      vm.getProducts();
      vm.nowPage = 1;
    }
  },
  methods: {
    // 手機版面，打開篩選列表
    openQueryBox() {
      const vm = this;
      vm.queryBox = !vm.queryBox;
    },
    addFavorite(product) {
      const vm = this;
      vm.$store.dispatch('favoriteModules/addToFavorite', product);
    },
    removeFavorite(productItem, delall) {
      const vm = this;
      vm.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: productItem, delall });
    },
    getCategory(category) {
      const vm = this;
      vm.filterText = '';
      vm.querySize = [];
      vm.filterSubCategories = [];
      vm.$router.push({ path: '/productslist', query: { category: category } });
    },
    getSubCategories() {
      setTimeout(() => {
        const vm = this;
        vm.routeMethod();
      }, 0);
    },
    getSize(size) {
      const vm = this;
      if (!vm.$route.query.size) {
        vm.$route.query.size = new Set();
      } else {
        vm.$route.query.size = new Set(vm.$route.query.size);
      }
      // 如果action為button，代表是從篩選列表選擇尺寸按鍵
      // eg: 選擇X和Ｌ尺寸，路由後的size變數就會更動
      if (size.action === 'button') {
        if (!vm.$route.query.size.has(size.name)) {
          vm.$route.query.size.add(size.name);
        } else {
          vm.$route.query.size.delete(size.name);
        }
      } else {
        vm.$route.query.size.delete(size.name);
      }
      vm.querySize = [...vm.$route.query.size];
      console.log(vm.querySize);
      this.routeMethod();
    },
    getProducts() {
      const vm = this;
      vm.$store.dispatch('productsModules/getProducts', { isPagination: false });
      if (!vm.$route.query.category) {
        vm.$router.push({ path: '/productslist', query: { category: '女士' } });
      }
      if (vm.$route.query.subCategory) {
        if (!Array.isArray(vm.$route.query.subCategory)) {
          const array = [];
          array.push(vm.$route.query.subCategory);
          vm.$route.query.subCategory = array;
        }
        vm.filterSubCategories = vm.$route.query.subCategory;
      }
    },
    removeSubCategory(subCategory) {
      const vm = this;
      vm.filterSubCategories = vm.filterSubCategories.filter(item => item !== subCategory);
      this.getSubCategories();
    },
    removeSize(size) {
      const vm = this;
      vm.size.forEach((v, i) => {
        if (v.name === size) {
          v.choose = false;
        }
      });
      this.getSize({ name: size });
    },
    removeFilterText() {
      const vm = this;
      vm.filterText = '';
      vm.routeMethod();
    },
    removeAll() {
      const vm = this;
      let category = '';
      vm.filterSubCategories = [];
      vm.filterText = '';
      vm.category.forEach((v) => {
        if (v.choose) {
          category = v.title;
        }
      })
      vm.$router.push({ path: '/productslist', query: { category: category } });
    },
    // 搜尋關鍵字
    search() {
      const vm = this;
      vm.filterText = vm.searchText;
      vm.searchText = '';
      this.routeMethod();
    },
    // 變更條件後的切換路由
    routeMethod() {
      const vm = this;
      const query = {
        category: vm.$route.query.category,
        subCategory: vm.filterSubCategories
      };
      if (vm.querySize.length !== 0) {
        query.size = vm.querySize;
      }
      if (vm.filterText !== '') {
        query.filterText = vm.filterText;
      }
      vm.$router.push({
        path: '/productslist',
        query: query
      });
    }
  },
  created() {
    const vm = this;
    vm.getProducts();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_custom.scss';
.querBoxBtn{
  display:none;
  // position:absolute;
  // top:30%;
  // right:5.7%;
  @media (max-width: 767px) {
    display:block;
  }
}
.active{
  display:none;
}
.favorite{
  position:absolute;
  top:0px;
  right:0px;
  padding:0.5rem;
  cursor:pointer;
}
.sizeBtn, .categoryBtn{
  &:focus {
    box-shadow: unset;
  }
}
.card-title{
  height: 50px;
}
.list
{
 .card{
    margin-right:1rem;
 }
  .card:nth-child(0n+3){
    margin-left: 1rem;
  }
}
.product-more{
    display:flex;
    text-align: center;
    border-top: 1px solid $hot-color;
    a{
        flex:1;
        padding: 0.5rem;
        &:hover{
            background: $hot-color;
        }
    }
}
</style>
