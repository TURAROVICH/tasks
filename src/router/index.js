import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: ()=>import('../views/history')
  },
  {
    path: '/history/:id',
    name: 'historyId',
    component: ()=>import('../views/oneCategory')
  },
  {
    path: '/planning',
    name: 'planning',
    component: ()=>import('../views/planning')
  },
  {
    path: '/categories',
    name: 'categories',
    component: ()=>import('../views/categories')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=>import('../views/profile')
  },
  {
    path: '/auth/login',
    name: 'login',
    component: ()=>import('../views/login')
  },
  {
    path: '/auth/register',
    name: 'register',
    component: ()=>import('../views/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
