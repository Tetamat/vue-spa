import { createRouter, createWebHistory } from 'vue-router'
import OperatorSelection from '../views/OperatorSelection.vue'
import JobList from '../views/JobList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'operator-selection',
      component: OperatorSelection,
    },
    {
      path: '/jobs/:operator',
      component: JobList,
      props: true
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
