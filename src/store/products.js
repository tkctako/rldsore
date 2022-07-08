import axios from 'axios';

export default ({
  namespaced: true,
  state: {
    products: [],
    pagination: {},
    nowCategory: 'all'
  },
  actions: {
    getProducts(context, { isPagination, page }) {
      let api;
      if (isPagination) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      } else {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      }
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTS', response.data.products);
          if (isPagination) {
            context.commit('PAGINATION', response.data.pagination);
          }
        } else {
          context.dispatch('alertMessageModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
        }
        context.commit('LOADING', false, { root: true });
      });
    },
    setNowCategory(context, mainCategory) {
      context.commit('NOWCATWGORY', mainCategory);
    }
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    NOWCATWGORY(state, payload) {
      state.nowCategory = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    }
  },
  getters: {
    products: state => state.products,
    nowCategory: state => state.nowCategory,
    pagination: state => state.pagination
  }
});
