import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../modules/general/views/homePage.vue';
import aboutPage from '../modules/general/views/aboutPage.vue';

import taskPage from '../modules/task/views/taskPage.vue';
import taskDetails from '../modules/task/views/taskDetails.vue';
import taskEdit from '../modules/task/components/taskEdit.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/task',
    name: 'taskPage',
    component: taskPage,
    children: [
      {
        path: 'edit/:_id?',
        component: taskEdit
      }
    ]
  },
  {
    path: '/task/:_id',
    name: 'taskDetails',
    component: taskDetails
  },
  {
    path: '/about',
    name: 'About',
    component: aboutPage
  }
]

const router = new VueRouter({
  routes
})

export default router
