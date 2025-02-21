<script setup>
import { defineProps } from 'vue'


defineProps({
  title: {
    type: String,
    default: 'Billigare än nytt'
  },
  subtitle: {
    type: String,
    default: 'Bättre än begagnat'
  }
})
</script>

<template>
  <section id="hero" class="min-vh-100 d-flex align-items-center text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-uppercase fw-semibold display-1 text-white">
            {{ title }}
          </h1>
          <h5 class="text-white mt-3 mb-4 text-uppercase fw-bold">
            {{ subtitle }}
          </h5>
          <!-- Todo @click="@router.push('ProductListings')" -->
          <BButton href="#" variant="primary"
            class="me-2 text-uppercase fw-bold">Köp
          </BButton>
          <!-- Todo @click="@router.push('ProductSell')" -->
          <BButton href="#" variant="light" class="ms-2 text-uppercase fw-bold">
            Sälj
          </BButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero
{
  background: linear-gradient(rgba(78, 87, 212, 0.500), rgba(0, 0, 212, 0.500)),
    url("/src/assets/img/hero/hero.jpg");
  background-position: center;
  background-size: cover;
}
</style>