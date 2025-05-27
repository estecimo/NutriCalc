import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name:'NutiCalc', component: LoginView },
    { path: '/signup', component: SignupView },
    { path: '/forgot-password', component: ForgotPasswordView },
    {path: '/dashboard', name: 'Dashboard', component: DashboardView
}
  ],
})

export default router
