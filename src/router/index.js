import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
