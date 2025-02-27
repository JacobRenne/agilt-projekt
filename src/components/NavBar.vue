<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const showMobileSearch = ref(false);

const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value;
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    showMobileSearch.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="custom-container gap-5">
      <RouterLink to="/">
        <span class="gradient-text fs-3 fw-bold">Grafikbanken .</span>
      </RouterLink>

      <form class="search-form d-none d-md-flex mx-auto" role="search"
        v-if="route.meta.showSearch">
        <input class="form-control me-3" type="search"
          placeholder="Sök efter produkter" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit"><i
            class="bi bi-search text-white"></i></button>
      </form>

      <div class="d-flex flex-row gap-3 align-items-center">
        <button v-if="route.meta.showSearch"
          class="btn btn-link text-white d-md-none p-1"
          @click="toggleMobileSearch">
          <i class="bi bi-search fs-3"></i>
        </button>

        <RouterLink to="/profile" class="nav-link">
          <i class="bi bi-person-circle fs-3"></i>
        </RouterLink>
        <RouterLink to="/cart">
          <i class="bi bi-cart fs-3"></i>
        </RouterLink>
      </div>
    </div>

    <div v-if="showMobileSearch && route.meta.showSearch"
      class="mobile-search-container">
      <form class="d-flex w-100 px-3 py-2" role="search">
        <input class="form-control me-2" type="search"
          placeholder="Sök efter produkter" aria-label="Search">
        <button class="btn btn-primary" type="submit">Sök</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
.navbar
{
  background-color: #121212;
  flex-direction: column;
}

.custom-container
{
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.search-form
{
  display: flex;
  flex: 1;
}

.search-form input
{
  flex: 1;
}

.mobile-search-container
{
  width: 100%;
  background-color: #1a1a1a;
}

@media (max-width: 1300px)
{
  .custom-container
  {
    width: 100%;
  }
}

i
{
  color: #2e67f8;
}

.gradient-text
{
  background: linear-gradient(90deg, #2e67f8, #bb86fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}

form[role="search"] input
{
  flex: 1;
}

@media (max-width: 768px)
{
  .search-form input
  {
    flex: 1;
  }
}
</style>
