<template>
  <section>
    <div
      class="hero d-flex flex-column justify-content-center align-items-center text-center">
      <h1>Billigare än nytt, <br> bättre än begagnat.</h1>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.hero
{
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/img/hero/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;
  color: white;
  margin: 0 auto;
  border-radius: 6px;
}

h1
{
  font-size: 4rem;
}

.button-btn
{
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
}
</style>
