<script setup>
import { ref, defineEmits } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");
const isLoggedIn = ref({
  status: sessionStorage.getItem("isLoggedIn") === "true",
  userId: sessionStorage.getItem("userId") || null,
});

const emit = defineEmits(["update:isLoggedIn"]);

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match.";
    return;
  }

  try {
    const response = await axios.post(
      "https://67c6b656351c081993fe6431.mockapi.io/users",
      {
        name: name.value,
        email: email.value,
        password: password.value,
      }
    );
    console.log("Account created:", response.data);
    errorMessage.value = "";
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userId", response.data.id);
    isLoggedIn.value = { status: true, userId: response.data.id };
    emit("update:isLoggedIn", isLoggedIn.value);
  } catch (error) {
    console.error("Error creating account:", error);
    errorMessage.value = "Failed to create account. Please try again.";
  }
};

const handleLogin = async () => {
  try {
    const response = await axios.get(
      "https://67c6b656351c081993fe6431.mockapi.io/users"
    );
    const users = response.data;
    const user = users.find(
      (user) => user.email === email.value && user.password === password.value
    );

    if (user) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userId", user.id);
      isLoggedIn.value = { status: true, userId: user.id };
      emit("update:isLoggedIn", isLoggedIn.value);
      errorMessage.value = "";
    } else {
      errorMessage.value = "Invalid email or password.";
    }
  } catch (error) {
    console.error("Error logging in:", error);
    errorMessage.value = "Failed to log in. Please try again.";
  }
};

const createAccount = ref(true);
</script>

<template>
  <section class="profil-section mt-5 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div v-if="createAccount">
              <div class="card-header">
                <h3 class="text-center">Skapa ett konto</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <label for="text">Fullständigt namn</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">E-postadress</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Lösenord</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Bekräfta lösenord</label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary mt-2 d-flex ms-auto"
                  >
                    Skapa konto
                  </button>
                  <div v-if="errorMessage" class="alert alert-danger mt-3">
                    {{ errorMessage }}
                  </div>
                </form>
                <p class="text-center mt-3">
                  Har du redan ett konto?
                  <a href="#" class="text-info" @click="createAccount = false"
                    >Logga in</a
                  >
                </p>
              </div>
            </div>
            <div v-else>
              <div class="card-header">
                <h3 class="text-center">Logga in</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="handleLogin">
                  <div class="form-group">
                    <label for="email">E-postadress</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Lösenord</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      v-model="password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block mt-2 d-flex ms-auto"
                  >
                    Logga in
                  </button>
                  <div v-if="errorMessage" class="alert alert-danger mt-3">
                    {{ errorMessage }}
                  </div>
                  <p class="text-center mt-3">
                    Har du inget konto?
                    <a href="#" class="text-info" @click="createAccount = true"
                      >Skapa konto</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: #333333;
  color: white;
}

.card-header {
  background-color: #444444;
}

.form-control {
  background-color: #555555;
  color: white;
  border: 1px solid #666666;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.alert-danger {
  background-color: #ff4d4d;
  border-color: #ff4d4d;
  color: white;
}

.profil-section {
  background: #121212;
}

.btn-primary {
  background-color: #bb81f8;
}

.btn-primary:hover {
  background-color: #9a67ea;
}

.text-info {
  color: #bb81f8 !important;
}

.text-info:hover {
  color: #9a67ea !important;
}
</style>
