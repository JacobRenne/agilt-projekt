<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid d-flex justify-content-center gap-5 align-items-center">
      <RouterLink to="/" class="navbar-brand fw-bold">Grafikbanken</RouterLink>

      <form class="d-flex" role="search" v-if="route.meta.showSearch">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div class="d-flex flex-row gap-3">
        <RouterLink to="/profile" class="nav-link text-white">
          <i class="bi bi-person-circle fs-3"></i>
        </RouterLink>
        <RouterLink to="/cart">
          <i class="bi bi-cart text-white fs-3"></i>
        </RouterLink>
      </div>
      
    </div>
  </nav>

</template>

<style scoped>

.navbar {
  background-color: #121212;
}

</style>