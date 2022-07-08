import Vue from 'vue';
import VueRouter from 'vue-router';
const includPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    // 後台
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/admin',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: 'productsmanage',
          name: 'ProductsManage',
          component: () => import('../views/Admin/ProductsManage.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    // 前台
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/front/Home.vue')
        },
        {
          path: '/news',
          name: 'News',
          component: () => import('../views/front/News.vue'),
          children: [
            {
              path: '/news/love',
              name: 'Love',
              component: () => import('../views/front/news/love.vue')
            },
            {
              path: '/news/mostwant',
              name: 'Mostwant',
              component: () => import('../views/front/news/mostwant.vue')
            },
            {
              path: '/news/suit',
              name: 'Suit',
              component: () => import('../views/front/news/suit.vue')
            }
          ]
        },
        {
          path: '/productslist',
          name: 'ProductList',
          component: () => import('../views/front/ProductList.vue')
        },
        {
          path: '/productslist/:productId',
          name: 'Product',
          component: () => import('../views/front/Product.vue')
        },
        {
          path: 'createorder',
          name: 'CreateOrder',
          component: () => import('../views/front/CreateOrder.vue')
        }
      ]
    }
  ]
});
