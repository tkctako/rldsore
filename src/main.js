import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import PicZoom from 'vue-piczoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';

import App from './App.vue';
import router from './router';
import store from './store';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(AOS);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate, {
  locale: 'zh_TW'
});
Vue.component('my-loading', Loading);
Vue.component('pic-zoom', PicZoom);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);
window.$ = $;

axios.defaults.withCredentials = true;

new Vue({
  created() {
    AOS.init({ });
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  $('html,body').animate({
    scrollTop: 0
  }, 700)
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login'
        });
      }
    });
  } else {
    next();
  }
});
