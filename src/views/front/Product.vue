<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class=" breadcrumb bg-light">
                <li class="breadcrumb-item">
                    <router-link to="/">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                   <router-link :to="{path : '/productslist', query:{category: product.options.mainCategory}}">
                   {{ product.options.mainCategory }}服裝
                   </router-link>
                </li>
                <li class="breadcrumb-item">
                    {{ product.title }}
                </li>
            </ol>
        </nav>
        <div class="row mb-3">
          <div class="col-md-8 product-content">
              <img class="img-fluid" :src="product.imageUrl">
              <!-- <div>
                <pic-zoom :url=url :scale="3" :scroll="true"></pic-zoom>
              </div> -->
          </div>
          <div class="col-md-4 mb-3">
              <div style="top:10px">
                  <h1 class="h3"> {{ product.title}} </h1>
                  <div class="d-flex align-items-baseline" v-if="product.origin_price !== product.price">
                      <del class="text-muted">售價： {{ product.origin_price | currency }}</del>
                      <div class="ml-auto h5 text-danger">
                          <small>特價：</small>
                          <strong> {{ product.price | currency}}</strong>
                      </div>
                  </div>
                  <div class="d-flex align-items-baseline" v-if="product.origin_price == product.price">
                      <div class="ml-auto h5 ">
                          <small>售價：</small>
                          <strong> {{ product.price | currency}}</strong>
                      </div>
                  </div>
                  <hr>
                    <button v-for="(size, index) in filterSize" :key="index" type="button" class="btn btn-outline-dark  rounded-0 px-2 py-0 mr-2"
                    :class="{'btn-dark': selectedSize === size.name , 'sizeDisabled' : !size.select}" :disabled="!size.select"
                    @click="selectSize(size.name)">
                     {{ size.name }}
                    </button>
                  <hr>
                  <ul class="product-primary">
                      <li>
                          <button type="button" class="btn btn-link p-0"
                          data-toggle="modal" data-target="#sizeModalCenter">
                              <i class="fas fa-ruler-horizontal"></i> 尺寸
                          </button>
                      </li>
                      <li>
                          <button type="button" class="btn btn-link p-0"
                          data-toggle="modal" data-target="#tryonModalCenter">
                              <i class="fas fa-tshirt"></i> 試穿報告
                          </button>
                      </li>
                      <li>
                      </li>
                  </ul>
                  <hr>
                  <div class="addcart">
                      <select class="form-control mb-1 w-50" v-model="qty">
                          <option value="0" disabled>請選擇數量</option>
                          <option :value="num" v-for="num in 15" :key="num">
                              {{ num }} {{ product.unit }}
                          </option>
                      </select>
                      <button class="btn btn-primary w-85 " @click.prevent="addToCart(qty)">
                        <i class="fas fa-plus"></i>
                        加入購物車
                      </button>
                      <button type="button" class="btn btn-outline-primary float-right rounded-0" :class="{'d-none': isFavorite}"
                      @click.prevent="addFavorite()">
                          <i class="fas fa-heart"></i>
                      </button>
                      <button type="button" class="btn btn-outline-primary float-right rounded-0" :class="{'d-none': !isFavorite}"
                      @click.prevent="removeFavorite(false)">
                          <i class="fas fa-heart-broken"></i>
                      </button>
                  </div>
                  <!-- <router-link to="/coupongame" class="badge badge-warning float-right">
                      折價券適用
                  </router-link> -->
                  <hr>
                  <h3>商品介紹</h3>
                  <p> {{ product.description}}</p>
                  <p class="mr-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus, laudantium hic perferendis necessitatibus dolorem ipsam
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam rem sed vitae facilis modi maxime veniam similique eveniet.
                  </p>
              </div>
          </div>
          <div class="modal fade" id="sizeModalCenter" role="dialog"
          aria-labelledby="sizeModalCenterTitle" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                      <div class="modal-header pb-0 border-0">
                          <button type="button" class="close p-2" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body text-center">
                          <h5 class="mb-4" >產品尺寸</h5>
                          <div class="row">
                              <div class="col-12">
                                  <div class="table-responsive">
                                      <table class="table d-table">
                                          <thead>
                                              <tr>
                                                  <th>尺碼</th>
                                                  <th>胸寬</th>
                                                  <th>腰寬</th>
                                                  <th>全長</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th>S</th>
                                                  <td>40.5</td>
                                                  <td>43</td>
                                                  <td>54</td>
                                              </tr>
                                              <tr>
                                                  <th>M</th>
                                                  <td>42.5</td>
                                                  <td>45.5</td>
                                                  <td>55.5</td>
                                              </tr>
                                              <tr>
                                                  <th>L</th>
                                                  <td>45</td>
                                                  <td>48</td>
                                                  <td>57</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                  <p>*單位：cm</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal fade" id="tryonModalCenter" role="dialog"
          aria-labelledby="tryonModalCenterTitle" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                      <div class="modal-header pb-0 border-0">
                          <button type="button" class="close p-2" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body text-center">
                          <h5 class="mb-4" >試穿報告</h5>
                          <div class="row">
                              <div class="col-12">
                                  <div class="table-responsive">
                                      <table class="table d-table">
                                            <thead>
                                              <tr>
                                                  <th>試穿人員</th>
                                                  <th>身高(cm)</th>
                                                  <th>體重(kg)</th>
                                                  <th>適合尺碼</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <th>Model</th>
                                                  <td>165</td>
                                                  <td>45</td>
                                                  <td>S</td>
                                              </tr>
                                              <tr>
                                                  <th>A</th>
                                                  <td>151</td>
                                                  <td>45</td>
                                                  <td>S</td>
                                              </tr>
                                              <tr>
                                                  <th>B</th>
                                                  <td>155</td>
                                                  <td>50</td>
                                                  <td>M</td>
                                              </tr>
                                              <tr>
                                                  <th>C</th>
                                                  <td>160</td>
                                                  <td>70</td>
                                                  <td>XL</td>
                                              </tr>
                                              <tr>
                                                  <th>D</th>
                                                  <td>165</td>
                                                  <td>50</td>
                                                  <td>M</td>
                                              </tr>
                                              <tr>
                                                  <th>E</th>
                                                  <td>170</td>
                                                  <td>55</td>
                                                  <td>L</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                  <p>*個人比例條件不同，僅供參考</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <CardSider/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import CardSider from '@/components/CardSider.vue';
export default {
  data() {
    return {
      product: [],
      productId: '',
      size: [
        { name: 'S', select: false },
        { name: 'M', select: false },
        { name: 'L', select: false },
        { name: 'XL', select: false },
        { name: '2L', select: false },
        { name: '3L', select: false }
      ],
      selectedSize: '',
      qty: 0,
      isFavorite: false
    };
  },
  computed: {
    filterSize() {
      const vm = this;
      const filterSize = [];
      const productSize = new Set(vm.product.options.size);
      vm.size.forEach((v) => {
        const name = v.name;
        if (productSize.has(name)) {
          filterSize.push({ name, select: true });
        } else {
          filterSize.push({ name, select: false });
        }
      });
      return filterSize;
    },
    ...mapGetters('favoriteModules', ['favorites'])
  },
  methods: {
    getProduct() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      vm.$store.dispatch('updateLoading', true);
      axios.get(url).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product;
          vm.$store.dispatch('productsModules/setNowCategory', vm.product.options.mainCategory);
          vm.favorites.forEach((item) => {
            if (vm.product.id === item.id) {
              vm.isFavorite = true;
            }
          });
        } else {
          vm.$store.dispatch('alertMessageModules/updateMessage', { message: '找不到此商品', status: 'danger' });
        }
      });
      vm.$store.dispatch('updateLoading', false);
    },
    selectSize(size) {
      const vm = this;
      vm.selectedSize = size;
    },
    addToCart(qty) {
      const vm = this;
      if (vm.selectedSize === '') {
        vm.$store.dispatch('alertMessageModules/updateMessage', { message: '請選擇尺寸', status: 'danger' });
      } else if (qty === 0) {
        vm.$store.dispatch('alertMessageModules/updateMessage', { message: '請選擇數量', status: 'danger' });
      } else {
        vm.$store.dispatch('cartModules/addToCart', { id: this.productId, qty, size: vm.selectedSize });
      }
    },
    addFavorite() {
      const vm = this;
      vm.$store.dispatch('favoriteModules/addToFavorite', this.product);
      vm.isFavorite = true;
    },
    removeFavorite(delall) {
      const vm = this;
      vm.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: this.product, delall });
      vm.isFavorite = false;
    }
  },
  watch: {
    $route() { // 路由id變換時重新讀取商品資訊 //疑慮
      const vm = this;
      vm.productId = this.$route.params.productId;
      vm.getProduct();
      vm.selectedSize = '';
      vm.qty = 0;
    }
  },
  created() {
    const vm = this;
    vm.productId = this.$route.params.productId;
    vm.getProduct();
  },
  components: {
    CardSider
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_custom.scss';

#pixBox{
  width: 500px;
  height: 600px;
}
.product-primary{
  width:55%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.addcart{
  margin-bottom: 0.5rem;
}
.product-content{
  text-align: center;
  img, p {
    margin-bottom: 1.5rem;
  }
  p{
    font-size: 1.25rem;
  }
}
.sizeDisabled{
  text-decoration:line-through;
}
</style>
