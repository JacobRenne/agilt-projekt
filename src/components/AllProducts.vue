<script setup>
import ProductListing from './ProductListing.vue'
import { defineProps, onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { BSpinner } from 'bootstrap-vue-next'
import axios from 'axios'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  },
})

const api_url = 'https://67b27350bc0165def8cd952b.mockapi.io/api/products'

const status = reactive({
  products: [],
  loading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get(api_url)
    status.products = response.data
  } catch (error) {
    console.error('Hämta produkter. Misslyckades ', error)
  }
  finally {
    status.loading = false;
  }
})
</script>

<template>
  <section class="bg-dark px-4 py-4 pb-5">
    <div class="container-lg mx-auto">
      <h4 class="fw-bold text-light mb-4 text-center">
        Produkter
      </h4>
      <div class="row g-3">
        <div v-if="status.loading" class="text-center">
          <b-spinner variant="light" label="loading..."></b-spinner>
        </div>
        <div class="col-md-3 d-flex flex-column h-100"
          v-for="product in status.products.slice(0, limit || status.products.length)"
          :key="product.id">
          <ProductListing :product="product" />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-dark py-4 d-flex">
    <div v-if="showButton" class="mx-auto my-4 px-3">
      <RouterLink to="/products"
        class="text-dark text-center py-3 px-4 rounded text-decoration-none fw-bold"
        id="show-all-button">
        Visa alla produkter
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
#show-all-button
{
  background: #f8f9fa;
}

#show-all-button:hover
{
  background: #d3d5d7;
}
</style>