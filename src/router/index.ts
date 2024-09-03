import { createRouter, createWebHistory } from 'vue-router'
import { useAlgorithm } from '@/use/useTool'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // leetcode算法模块
    {
      path: '/algorithm',
      name: 'algorithm',
      component: () => import('../views/algorithm/IndexView.vue'),
      children: useAlgorithm().routes,
    },
    // ...useAlgorithm().routes,
    {
      path: '/tbb',
      name: 'tbb',
      component: () => import('../views/birthday/BirthdayView.vue')
    },
  ]
})

export default router
