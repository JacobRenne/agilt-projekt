<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router';

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
  <section class="pt-2" id="bg">
    <div class="d-flex align-items-center text-center">
      <div id="hero">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-uppercase fw-semibold display-6 text-white">
                {{ title }}
              </h1>
              <h5 class="text-white mt-3 mb-4 text-uppercase fw-bold">
                {{ subtitle }}
              </h5>
              <RouterLink to="/products">
                <BButton variant="dark" class="me-2 py-2 px-5">
                  Köp
                </BButton>
              </RouterLink>
              <RouterLink to="/sell">
                <BButton variant="light" class="ms-2 py-2 px-5">
                  Sälj
                </BButton>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
#hero
{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 212, 0.5)),
    url("/src/assets/img/hero.jpg");
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 1250px;
  margin: auto;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

#bg
{
  color: #121212;
}
</style>