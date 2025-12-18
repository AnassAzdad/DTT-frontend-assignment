import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HouseDetailView from '../views/HouseDetailView.vue'
import CreateHouseView from '../views/CreateHouseView.vue'

const routes = [
    {
  path: '/create',
  name: 'create-house',
  component: CreateHouseView
},
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/houses/:id',
    name: 'house-detail',
    component: HouseDetailView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
