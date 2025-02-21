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

  <RouterLink to="/" class="navbar-brand">Grafikbanken</RouterLink>

  <form class="d-flex" role="search" v-if="searchDisplay">
      <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</nav>

</template>


<style scoped>



</style>