<script setup>
import Hero from '../components/Hero.vue'
import AllProducts from '../components/AllProducts.vue'
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <NavBar :searchDisplay="true" />
  <Hero />
  <AllProducts :limit="4" :showButton="true" />
</template>