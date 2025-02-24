<script setup>
import Hero from '../components/Hero.vue'
import AllProducts from '../components/AllProducts.vue'
import NavBar from '../components/NavBar.vue';
import SmallNavBar from '../components/SmallNavBar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <NavBar :searchDisplay="true" />
  <SmallNavBar />
  <Hero />
  <AllProducts :limit="4" :showButton="true" />
</template>