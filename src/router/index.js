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
  },
  {
    path: '/orderDone',
    name: 'OrderDone',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDonePage.vue')
  },
  {
    path: '/register',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationPage.vue')
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagination.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import(/* webpackChunkName: "about" */ '../views/EnglishTask.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
