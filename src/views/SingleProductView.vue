<script setup>

import { reactive, onMounted, ref } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const productId = route.params.id;

const status = reactive({
  product: {},
});

const api_url = "https://67b27350bc0165def8cd952b.mockapi.io/api/products";

onMounted(async () => {
  try {
    const response = await axios.get(`${api_url}/${productId}`);
    status.product = response.data;
  } catch (error) {
    console.error("Gick ej att hämta produkt", error);
  }
});

function addToCart() {
  let cart = []
  if (JSON.parse(localStorage.getItem('cart'))) {
    cart = JSON.parse(localStorage.getItem('cart'))
  }

  cart.push({
    id: status.product.id,
    title: status.product.title,
    pris: status.product.pris,
    bild: status.product.bild
  })

  localStorage.setItem('cart', JSON.stringify(cart))
  alert(`${status.product.title} har lagts till i varukorgen!`)

}

function saveToWishList() {
  let wishList = JSON.parse(sessionStorage.getItem("wishList")) || [];
  if (!wishList.some((wiLs) => wiLs.id === status.product.id)) {
    wishList.push(status.product);
    sessionStorage.setItem("wishList", JSON.stringify(wishList));
  }
}
</script>

<template>
  <section class="product-section d-flex flex-column">
    <div class="container py-4 flex-grow-1">
      <div class="row">
        <main class="col-md-8">
          <div class="card mb-3 product-card">
              <div class="d-flex justify-content-center my-3">
                <img :src="status.product.bild" :alt="status.product.title"
                  class="img-fluid">
              </div>

          </div>
        </main>

        <aside class="col-md-4">

          <div class="card mb-3 product-card">
            <div class="card-body">
              <h5 class="text-light">Artikelnr: {{ status.product.artnr }}</h5>
              <h4 class="text-white">{{ status.product.title }}</h4>
            </div>
          </div>

          <div class="card mb-3 product-card">
            <div class="card-body">
              <h3 class="text-white">Beskrivning:</h3>
              <p class="text-light">{{ status.product.beskrivning }}</p>
            </div>
          </div>
          <div class="card product-card">
            <div class="card-body text-center">
              <h3 class="text-white">{{ status.product.pris }} kr</h3>
              <button class="btn btn-primary w-100" @click="addToCart">Köp</button>
              <button
                class="btn btn-danger btn-block ms-2"
                @click="saveToWishList"
              >
                Add to wishlist
              </button>
              
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-section
{
  background: #121212;
  color: #ffffff;
  padding: 2rem 0;
}

.product-card
{
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: none;
}

.img-fluid
{
  max-width: 100%;
  height: 500px;
  border-radius: 8px;
  object-fit: contain;
}

.text-primary
{
  color: #bb86fc !important;
}

.text-light
{
  color: #b0b0b0 !important;
}

.text-grey
{
  color: #757575 !important;
}

.btn-primary
{
  background-color: #bb86fc;
  border: none;
  padding: 12px;
  font-size: 1.1rem;
  border-radius: 8px;
}

.btn-primary:hover
{
  background-color: #9a67ea;
}

#bg
{
  background: #413d46;
}

.img-fluid {
  max-width: 450px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
