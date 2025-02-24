import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/cart', name: 'Cart', component: CartView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;