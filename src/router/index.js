import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Notion from "../views/Notion.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:screenName.html',
    name: 'Home2',
    component: Home
  },
  // {
  //   path: '/notion',
  //   name: 'Notion',
  //   component: Notion
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
