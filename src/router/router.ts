import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/',
      redirect: { name: 'home' }
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
