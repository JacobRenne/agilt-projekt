<script setup>
import Hero from "./components/Hero.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar :searchDisplay="true" />

  <!-- <Hero/> -->

  <RouterView />
</template>

<style></style>
