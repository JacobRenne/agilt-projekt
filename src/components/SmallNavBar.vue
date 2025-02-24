<script setup>
import { RouterLink } from 'vue-router';




</script>

<template>

  <nav class="navbar navbar-dark navbar-expand-lg">
    <div
      class="container-fluid d-flex justify-content-center gap-5 align-items-center">
      <RouterLink to="/" class="nav-link text-white fw-semibold p-2 px-3">Hem
      </RouterLink>
      <RouterLink to="/products"
        class="nav-link text-white fw-semibold p-2 px-3">Produkter</RouterLink>
      <RouterLink to="/sell" class="nav-link text-white fw-semibold p-2 px-3">
        Sälj</RouterLink>
    </div>
  </nav>

</template>

<style scoped>
.navbar
{
  background-color: #333333;
  border-top: 3px solid #05056a;
  padding: 0;
}

.nav-link
{
  transition: background-color 0.3s ease;
}

.nav-link:hover
{
  background-color: #05056a;
}
</style>