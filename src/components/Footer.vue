<template>
  <footer class="footer bg-dark text-light py-5">
    <div class="container">
      <div class="row mb-4">

        <div class="col-lg-6 mb-4 mb-lg-0">
          <router-link to="/" class="footer-logo text-decoration-none">
            <span class="gradient-text fs-1 fw-bold">Grafikbanken</span>
          </router-link>
          <p class="text-white-50 mt-2">Billigare än nytt, bättre än begagnat.
          </p>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <div class="col-6 mb-3">
              <h3 class="h5 text-info mb-3">Utforska</h3>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <router-link to="/products"
                    class="footer-link nav-link text-white-50 p-0">Produkter</router-link>
                </li>
                <li class="nav-item mb-2">
                  <router-link to="/sell"
                    class="footer-link nav-link text-white-50 p-0">Sälj</router-link>
                </li>
              </ul>
            </div>

            <div class="col-6 mb-3">
              <h3 class="h5 text-info mb-3">Konto</h3>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <router-link to="/profile"
                    class="footer-link nav-link text-white-50 p-0">Profil</router-link>
                </li>
                <li class="nav-item mb-2">
                  <router-link to="/cart"
                    class="footer-link nav-link text-white-50 p-0">Varukorg</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-top border-secondary pt-4 text-center">
        <p class="text-white-50 small">&copy; 2025 Grafikbanken. Alla
          rättigheter förbehållna.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.gradient-text
{
  background: linear-gradient(90deg, #bb86fc, #03dac6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  letter-spacing: 1px;
}

.footer-link
{
  transition: all 0.2s ease;
}

.footer-link:hover
{
  color: #bb86fc !important;
  transform: translateX(5px);
}
</style>