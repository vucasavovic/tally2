import { createRouter, createWebHistory } from 'vue-router'
 
import ErrorView from '@/views/ErrorView.vue'
import AppEntryView from '@/views/AppEntryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias:['/register','/login'],
      name: 'home',
      component: AppEntryView
    },
    {
      path: '/:pathMatch(.*)*',
      component: ErrorView
    } 
  ]
})

export default router
