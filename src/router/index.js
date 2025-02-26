import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import ProductsView from '../views/ProductsView.vue'
import SellView from '../views/SellView.vue'
import SingleProductView from '../views/SingleProductView.vue'


const routes = [
  { path: '/', name: 'hem', component: HomeView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/products', name: 'Products', component: ProductsView },
  { path: '/sell', name: 'Sell', component: SellView },
  { path: '/products/:id', name: 'Product', component: SingleProductView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; 
    }
  }
});

export default router