<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section
    class="container d-flex justify-content-center align-items-center mb-5 mt-4">
    <div class="bg-dark text-light text-center p-5 rounded-3 w-100"
      style="max-width: 600px;">
      <div class="pb-3">
      </div>
      <h2>Om oss</h2>
      <p>
        Grafikbanken är en onlineaffär för alla som vill sälja eller köpa
        begagnade grafikkort. Den kan användas för att köpa begagnade
        grafikkort som har renoverats. Till skillnad från andra nätbutiker är
        vår sida fokuserad på begagnade grafikkort som har renoverats, så att
        man kan spara pengar utan risken av att köpa från privatpersoner. Vi
        erbjuder dessutom en garanti på våra renoverade grafikkort, vilket ger
        dig extra trygghet när du handlar hos oss.
      </p>
    </div>
  </section>
</template>

<style scoped>
.bg-dark
{
  background-color: #1e1e1e !important;
  height: auto;
  border-radius: 6px;
}

.btn-primary
{
  background-color: #bb81f8;
}

.btn-primary:hover
{
  background-color: #9a67ea;
}

i
{
  color: #bb81f8;
}
</style>
