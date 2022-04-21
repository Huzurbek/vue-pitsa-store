import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue')
  },
  {
    path: '/aboutCompany',
    name: 'AboutCompany',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutCompany.vue')
  },
  {
    path: '/termOfUses',
    name: 'TermOfUses',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermOfUses.vue')
  },
  {
    path: '/warranty',
    name: 'WarrantyTerms',
    component: () => import(/* webpackChunkName: "about" */ '../views/WarrantyTerms.vue')
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurant.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "about" */ '../views/Support.vue')
  },
  {
    path: '/trackOrder',
    name: 'TrackOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrackOrder.vue')
  },

  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderPage.vue')
  },
  {
    path: '/orderDone/:orderCode',
    name: 'OrderDone',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDonePage.vue')
  },
  {
    path: '/myAccount',
    name: 'MyAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyAccount.vue')
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
    path: '/collapseExample',
    name: 'Collapse',
    component: () => import(/* webpackChunkName: "about" */ '../views/CollapseExample.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: 'smooth',
      }
    }
  }
})

export default router
