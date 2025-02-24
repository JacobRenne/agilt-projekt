<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import SmallNavBar from './components/SmallNavBar.vue';
</script>

<template>
  <NavBar :searchDisplay="true" />
  <SmallNavBar />
  <RouterView />
</template>

<style>
body
{
  font-family: "Roboto", sans-serif
}
</style>