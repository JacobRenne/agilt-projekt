<script setup>


defineProps({
  searchDisplay: {
    type: Boolean,
    default: true,
  }
})


</script>

<template>

  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div
      class="container-fluid d-flex justify-content-center gap-4 align-items-center">
      <RouterLink to="/" class="navbar-brand">Grafikbanken</RouterLink>

      <form class="d-flex mx-auto" role="search" v-if="searchDisplay">
        <input class="form-control me-3" type="search" placeholder="Search"
          aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <RouterLink to="/profile" class="nav-link text-white">
        <i class="bi bi-person-circle fs-3"></i>
      </RouterLink>
      <RouterLink to="/cart">
        <i class="bi bi-cart text-white fs-3"></i>
      </RouterLink>
    </div>
  </nav>

</template>

<style scoped></style>