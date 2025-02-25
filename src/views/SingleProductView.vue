<script setup>
import { reactive, onMounted, ref } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
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
  console.log(status.product);
});

console.log(status.product);

function saveToWishList(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some((fav) => fav.productID === status.product)) {
    favorites.push(status.product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}
</script>

<template>
  <section class="bg-dark d-flex flex-column" style="min-height: 100vh">
    <div class="container py-5 flex-grow-1">
      <div class="row">
        <main class="col-md-8">
          <div class="card mb-2 border-0">
            <div class="card-body rounded text-white text-center text-md-start" id="bg">
              <p>Artikelnr: {{ status.product.artnr }}</p>
              <h4 class="card-title">{{ status.product.title }}</h4>
              <div class="d-flex align-items-center justify-content-center justify-content-md-start"></div>
              <img :src="status.product.bild" :alt="status.product.title" class="img-fluid" />
            </div>
          </div>
        </main>

        <aside class="col-md-4 d-flex flex-column justify-content-end">
          <div class="card mb-2 border-0">
            <div class="card-body text-white" id="bg">
              <h3 class="text-white mb-2">Beskrivning:</h3>
              {{ status.product.beskrivning }}
            </div>
          </div>

          <div class="card border-0 mb-2">
            <div class="card-body" id="bg">
              <h3 class="text-white">{{ status.product.pris }} kr</h3>
              <button class="btn btn-success btn-block">Köp</button>
              <button class="btn btn-danger btn-block ms-2" @click="saveToWishList(product)">Add to wishlist</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
#bg {
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
