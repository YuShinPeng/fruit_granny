import { createRouter, createWebHistory } from 'vue-router'
import homepage from'../views/homepage.vue'
import loginpage from'../views/loginpage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
       path: '/homepage',
       name: 'home',
       component:homepage
    },
    {
      path: '/loginpage',
      name: 'login',
      component:loginpage
    }
  ]
})

export default router
