<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <SmallNavBar />
  <div class="d-flex flex-column min-vh-100">
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style>
body
{
  font-family: "Roboto", sans-serif
}
</style>