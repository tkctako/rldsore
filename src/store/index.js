import Vue from 'vue';
import Vuex from 'vuex';

import cartModules from '@/store/cart';
import productsModules from '@/store/products';
import alertMessageModules from '@/store/alertMessage';
import favoriteModules from '@/store/favorite';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    }
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    }
  },
  getters: {
    isLoading: state => state.isLoading
  },
  modules: {
    cartModules,
    alertMessageModules,
    productsModules,
    favoriteModules
  }
})
