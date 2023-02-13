import { createRouter, createWebHistory } from 'vue-router'
import Table from '../views/Table.vue'

const routes = [
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/layout',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
