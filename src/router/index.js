import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../packages/todolist/Index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../packages/test/Index.vue'),
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
