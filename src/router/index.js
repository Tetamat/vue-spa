import { createRouter, createWebHistory } from 'vue-router'
import OperationSelectionView from '../views/OperationSelectionView.vue'
import ListTasksView from '../views/ListTasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'operation-selection',
      component: OperationSelectionView,
    },
    {
      path: '/operations/:opID',
      name: 'list-tasks',
      component: ListTasksView,
      // props: route => ({ opID: route.params.opID }),
    },
  ],
})

export default router
