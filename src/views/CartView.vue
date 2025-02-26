<script setup>
import { ref, onMounted, computed } from 'vue'

const cartItems = ref([])

onMounted(() => {
  let cart = []
  if (JSON.parse(localStorage.getItem('cart'))) {
    cart = JSON.parse(localStorage.getItem('cart'))
  }
  cartItems.value = cart
})

const totalPrice = computed(() => {
  let price = 0
  cartItems.value.forEach((item) => {
    price += parseInt(item.pris)
  })
  return price
})

function sendToOrders() {
  let currentOrders = []
  if (JSON.parse(localStorage.getItem('orders'))) {
    currentOrders = JSON.parse(localStorage.getItem('orders'))
  }

  cartItems.value.forEach((item) => {
    currentOrders.push({
      id: item.id, 
      bild: item.bild,
      pris: item.pris,
      title: item.title,
      orderStatus: "Levereras"
    })
  })

  localStorage.setItem('orders', JSON.stringify(currentOrders))

  cartItems.value = []
  localStorage.removeItem('cart')
}

function removeFromCart(id) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)

  localStorage.setItem('cart', JSON.stringify(cartItems.value))
} 

</script>

<template>
  <div class="container p-4 mt-3 rounded shadow-sm d-flex flex-column text-white align-items-center" >
    <h2 class="mb-4">Din varukorg</h2>
    <div v-if="cartItems.length > 0" class="d-flex gap-2 flex-wrap">
      <table class="table table-dark m-0">
        <thead class="">
          <tr>
            <th>Produkt</th>
            <th>Pris</th>
            <th>Ta bort</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in cartItems" :key="item.id" class="">
            <td class="d-flex align-items-center gap-2 border-0">
              <img :src="item.bild" :alt="item.title" class="image-thumbnail d-none d-sm-block" style="width: 90px;">
              <RouterLink :to="'products/' + item.id" class="text-white text-decoration-none">
                <p class="m-0">{{ item.title }}</p>
              </RouterLink>
            </td>
            <td class="align-middle border-0">
              <p class="m-0">{{ item.pris }}</p>
            </td>
            <td class="align-middle border-0">
              <button class="btn btn-danger" @click="removeFromCart(item.id)">Ta bort</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="align-self-end">
        <h4>Totalt pris: {{ totalPrice }}kr</h4>
        <button class="btn btn-success" @click="sendToOrders">Köp</button>
      </div>
    </div>
    <div v-else><p>Din varukorg är tom</p></div>
  </div>

</template>

<style scoped>
.container, .table {
  background-color: rgb(51, 51, 51);
}

</style>