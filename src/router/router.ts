import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('@/views/MainView.vue')
    },
    {
      name: 'catalog',
      path: '/catalog',
      component: () => import('@/views/CatalogView.vue')
    },
    {
      name: 'product',
      path: '/product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('@/views/CartView.vue')
    }
  ]
})

export default router
