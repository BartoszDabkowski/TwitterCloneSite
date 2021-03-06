import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Explore.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../views/Messages.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/users/:userName/squawks/:squawkId',
    name: 'Squawks',
    component: () => import('../views/Squawks.vue')
  },
  {
    path: '/users/:userName',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
