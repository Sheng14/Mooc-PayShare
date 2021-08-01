import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta:{title: '首页'}
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity.vue'),
    meta:{title: '详情'}
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../views/pay.vue'),
    meta:{title: '支付'}
  },
  {
    path: '*',
    component: () => import('../views/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
