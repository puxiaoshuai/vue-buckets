import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/', redirect: {name:'vuex'}
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../packages/todolist/Index.vue'),
  },
  
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../packages/vuexdemo/Index.vue'),
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
