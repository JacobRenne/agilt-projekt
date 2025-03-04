<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import SmallNavBar from "./components/SmallNavBar.vue";
import { ref } from "vue";



const cartCount = ref(0)

if (JSON.parse(localStorage.getItem("cart"))) {
  cartCount.value = JSON.parse(localStorage.getItem("cart")).length
}

function updateCart() {
  if (JSON.parse(localStorage.getItem("cart"))) {
    cartCount.value = JSON.parse(localStorage.getItem("cart")).length
  }
  else cartCount.value = 0
}

</script>

<template>
  <NavBar :cartCount="cartCount"/>
  <SmallNavBar />
  <div class="content">
    <!-- tvinga vue att omrenderar även om (id) ändras. för search.vue -->
    <RouterView :key="$route.fullPath" @updateCart="updateCart"/>
  </div>
  <Footer />
</template>

<style>
html,
body
{
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#bg
{
  background: #121212;
  color: #ffffff;
  padding: 2rem 0;
}

#app
{
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background: #121212;
}

.content
{
  flex-grow: 1;
  margin-top: 20px;
}
</style>
