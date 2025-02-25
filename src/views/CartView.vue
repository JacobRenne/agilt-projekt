<script setup>
import { ref, onMounted, computed } from 'vue'

const cartItems = ref([])

onMounted(() => {
  let cart = []
  if (JSON.parse(localStorage.getItem('cart'))) {
    cart = JSON.parse(localStorage.getItem('cart'))
  }
  cartItems.value = cart
  console.log(cartItems.value)
})

const totalPrice = computed(() => {
  let price = 0
  cartItems.value.forEach((item) => {
    price += parseInt(item.pris)
  })
  return price
})

</script>

<template>
  <div class="container p-4 mt-3 rounded shadow-sm d-flex flex-column text-white align-items-center" >
    <h2>Varukorg</h2>
    <div v-if="cartItems.length > 0" class="d-flex gap-2">
      <div v-for="item in cartItems" :key="item.id" class="card d-flex flex-column align-items-left bg-dark text-white p-3">
        <img :src="item.bild" :alt="item.title" class="img-thumbnail" style="width: 100px;">
        <h4>{{ item.title }}</h4>
        <p>Pris: {{ item.pris }}kr</p>
      </div>


      <p>Totalt pris: {{ totalPrice }}kr</p>
    </div>
    <div v-else>
      <p>Din varukorg är tom</p>
    </div>
  </div>

</template>

<style scoped>
.container {
  background-color: rgb(51, 51, 51);
}

</style>