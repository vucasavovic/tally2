import { createRouter, createWebHistory } from 'vue-router'
 
import ErrorView from '@/views/ErrorView.vue'
import AppEntryView from '@/views/AppEntryView.vue'
import DashboardView from '@/views/DashboardView.vue'
import InvoiceView from '@/views/InvoiceView.vue'
import AccountSettingsView from '@/views/AccountSettingsView.vue'

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
      meta:{auth:true,showSideBar:true}
    },
    {
      path: '/invoice/new',
      name: 'invoice-new',
      component: InvoiceView,
      meta:{auth:true,showSideBar:true}
    },
    {
      path: '/invoice/edit/:id',
      name: 'invoice-edit',
      component: InvoiceView,
      meta:{auth:true,showSideBar:true}
    },
    {
      path: '/settings',
      name: 'account-settings',
      component: AccountSettingsView,
      meta:{auth:true,showSideBar:true}
    },
    {
      path: '/:pathMatch(.*)*',
      name:'404',
      component: ErrorView,
      meta:{showSideBar:true}
    },
    
  ]
})

export default router
