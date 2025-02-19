<script setup>

import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue'

</script>

<template>
	<section class="background">
		<div class="container">
			<NavBar />
			<Hero />
		</div>
	</section>
</template>

<style>
.container
{
	max-width: 1200px;
	margin: 0 auto;
	padding: 5px;
	background-color: #f0f0f0;
	border-radius: 6px;
	margin-top: 60px;
}

body
{
	background-color: #1a1a1a;
}

.background{
	padding-top: 20px;
}
</style>
