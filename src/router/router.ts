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
      path: '/catalog/:id',
      component: () => import('@/views/CatalogView.vue')
    },
    {
      name: 'product',
      path: '/product/:id',
      component: () => import('@/views/ProductView.vue')
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
