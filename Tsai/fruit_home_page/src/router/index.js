import { createRouter, createWebHistory } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import LogIn from '../components/LogIn.vue'
import  Signup from '../components/Signup.vue'
import HomeView from '../view/HomeView.vue'
import SetInfo from '../components/SetInfo.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "HomeView",
        component: HomeView
      },
      {
        path: "/log-in",
        name: "LogIn",
        component: LogIn
        // children: [
        //   {
        //     path: "signup",
        //     name: "Signup",
        //     component: () => import('../components/Signup.vue')
        //   }
        // ]
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: '/set-info',
        name: 'SetInfo',
        component: SetInfo
      }
    ]
  })
  
  export default router
  