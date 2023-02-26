import { createRouter, createWebHistory } from 'vue-router'
 
import ErrorView from '@/views/ErrorView.vue'
import AppEntryView from '@/views/AppEntryView.vue'
import DashboardView from '@/views/DashboardView.vue'
import InvoiceView from '@/views/InvoiceView.vue'

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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta:{showSideBar:true}
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoiceView,
      meta:{showSideBar:true}
    },
    {
      path: '/:pathMatch(.*)*',
      component: ErrorView
    },
    
  ]
})

export default router
