import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/',
      redirect:'/home',
    },
    {
      path: '/Second',
      name: 'Second',
      component: () => import('../views/Second.vue')
    },
    {
      path:'/Third',
      name:'Third',
      component:() => import('../views/Third.vue')
    }
  ]
})

export default router
