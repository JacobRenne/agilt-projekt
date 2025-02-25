import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import ProductsView from '../views/ProductsView.vue'
import SellView from '../views/SellView.vue'
import SingleProductView from '../views/SingleProductView.vue'


const routes = [
  { path: '/', name: 'hem', component: HomeView, meta: { showSearch: true } },
  { path: '/profile', name: 'Profile', component: ProfileView, meta: { showSearch: false } },
  { path: '/cart', name: 'Cart', component: CartView, meta: { showSearch: false } },
  { path: '/products', name: 'Products', component: ProductsView, meta: { showSearch: true } },
  { path: '/sell', name: 'Sell', component: SellView, meta: { showSearch: false } },
  { path: '/products/:id', name: 'Product', component: SingleProductView, meta: { showSearch: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;