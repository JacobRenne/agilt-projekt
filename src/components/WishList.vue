<script setup>
import { ref, defineEmits } from "vue";

const wishList = ref(JSON.parse(sessionStorage.getItem("wishList")) || []);

const emit = defineEmits(["updateWishList"]);

function removeFromWishList(product) {
  wishList.value = wishList.value.filter((wiLs) => wiLs.id !== product.id);
  sessionStorage.setItem("wishList", JSON.stringify(wishList.value));
  emit("updateWishList", wishList.value);
}
</script>

<template>
  <div
    v-for="product in wishList"
    :key="product.id"
    class="rounded shadow-md position-relative mb-3"
    id="bg"
  >
    <div class="p-4">
      <div class="text-secondary my-2">Artikelnr: {{ product.artnr }}</div>
      <h3 class="fs-6 fw-bold text-light">{{ product.title }}</h3>
      <div class="row mb-2">
        <div class="col-10">
          <img :src="product.bild" :alt="product.title" class="img-fluid" />
        </div>
      </div>
      <div class="mb-4 text-light">
        <div class="description-container">
          {{ product.beskrivning }}
        </div>
      </div>
      <div class="border border-light mb-4"></div>

      <div class="d-flex flex-row flex-lg-row justify-content-between">
        <div class="text-light fw-bold mb-3">{{ product.pris }} kr</div>
        <div class="d-flex">
          <RouterLink
            :to="'products/' + product.id"
            class="h-100 hover-bg-primary text-white px-4 py-2 rounded text-center text-sm text-decoration-none fw-bold"
            id="buy-button"
          >
            Välj
          </RouterLink>
          <button
            class="btn btn-danger ms-2"
            @click="removeFromWishList(product)"
          >
            Remove From Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description-container {
  height: 3rem;
  overflow: hidden;
  line-clamp: 2;
  line-height: 1.5;
}

#bg {
  background: #413d46;
}

#buy-button {
  background: #212529;
}

#buy-button:hover {
  background: #6b6f71;
}

.img-fluid {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
</style>
