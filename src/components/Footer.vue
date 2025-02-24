

<template>

  <footer class="text-white navbar">
    <div class="container justify-content-around">
      <div>
        <RouterLink to="/" class="navbar-brand fw-bold text-white">Grafikbanken</RouterLink>
      </div>

      <div class="">
        <ul class="list-group list-unstyled">
          <li>
            <RouterLink to="/" class="text-white text-decoration-none">Hemsida</RouterLink>
          </li>
          <li>
            <RouterLink to="/cart" class="text-white text-decoration-none">Varukorg</RouterLink>
          </li>
          <li>
            <RouterLink to="/products" class="text-white text-decoration-none">Produkter</RouterLink>
          </li>
          <li>
            <RouterLink to="/sell" class="text-white text-decoration-none">Sälj</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="text-white text-decoration-none">Profil</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>

</template>

<style scoped>

.navbar {
  background-color: #121212;
}

li:hover {
  text-decoration: underline;
}

</style>