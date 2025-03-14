<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import WishList from "../components/WishList.vue";
import { Modal } from "bootstrap";
import LogIn from "../components/LogIn.vue";

const isLoggedIn = ref(JSON.parse(sessionStorage.getItem("isLoggedIn")) || false);
const currentUser = ref(JSON.parse(sessionStorage.getItem("userId")));

const handleLoginStatus = (status) => {
  isLoggedIn.value = status;
};

const handleLogout = () => {
  sessionStorage.setItem("isLoggedIn", "false");
  isLoggedIn.value = false;
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("wishList");
  localStorage.removeItem("orders");
  orders.value = [];
};

const user = ref({
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
});

const fetchUserData = async () => {
  try {
    const response = await axios.get("https://67c6b656351c081993fe6431.mockapi.io/users/" + currentUser.value);
    user.value = response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const saveUserInfo = async () => {
  try {
    const response = await axios.put(`https://67c6b656351c081993fe6431.mockapi.io/users/${user.value.id}`, user.value);
    console.log("User info updated:", response.data);
    localStorage.setItem("user", JSON.stringify(user.value));
  } catch (error) {
    console.error("Error updating user info:", error);
  }
};

onMounted(() => {
  fetchUserData();
});

const orders = ref(JSON.parse(localStorage.getItem("orders") || "[]"));
let selectedOrder = ref();

function confirmCancel(index) {
  selectedOrder.value = index;
  let modal = new Modal(document.getElementById("confirmModal"));
  modal.show();
}

function cancelOrder() {
  orders.value[selectedOrder.value].orderStatus = "Avbruten";
  localStorage.setItem("orders", JSON.stringify(orders.value));
}

const wishList = ref(JSON.parse(sessionStorage.getItem("wishList")) || []);
const updateWishList = (newWishList) => {
  wishList.value = newWishList;
};

const props = defineProps({
  activa: {
    type: Number,
    default: 0,
  },
  hamtade: {
    type: Number,
    default: 0,
  },
  avbestallda: {
    type: Number,
    default: 0,
  },
  service: {
    type: Number,
    default: 0,
  },
});

const options = [
  { text: "Ordrar", value: "orders" },
  { text: "Profil", value: "profilesettings" },
  { text: "Önskelista", value: "wishlist" },
];

const options2 = [
  { text: "Aktiva " + props.activa, value: "active" },
  { text: "Hamtade/Skickade " + props.hamtade, value: "hamtade" },
  { text: "Avbeställda " + props.avbestallda, value: "avbestallda" },
  { text: "Service " + props.service, value: "service" },
];

const selected = ref("orders");
const selected2 = ref("active");

const showOrders = ref(true);
const showProfileSettings = ref(false);
const showWishlist = ref(false);

watch(selected, (newValue) => {
  if (newValue === "orders") {
    showOrders.value = true;
    showProfileSettings.value = false;
    showWishlist.value = false;
  } else if (newValue === "profilesettings") {
    showOrders.value = false;
    showProfileSettings.value = true;
    showWishlist.value = false;
  } else if (newValue === "wishlist") {
    showOrders.value = false;
    showProfileSettings.value = false;
    showWishlist.value = true;
  }
});
</script>

<template>
  <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h1 class="modal-title fs-6 text-white m-auto" id="confirmModalLabel">
            Är du säker att du vill avbryta denna beställning?
          </h1>
          <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="cancelOrder">Ja</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Nej</button>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div v-if="!isLoggedIn">
      <LogIn @update:isLoggedIn="handleLoginStatus" />
    </div>
    <div v-else class="container p-4 mt-3 rounded shadow-sm mb-5" style="background-color: #333333">
      <div class="row">
        <div class="col-md-2 p-3 rounded rounded text-center text-md-start" style="background-color: #333333">
          <BFormRadioGroup v-model="selected" :options="options" name="radios-btn-group1" size="lg" buttons stacked />
          <div class="mt-auto">
            <button class="btn btn-danger mt-3 p-md-2" @click="handleLogout">Logga ut</button>
          </div>
        </div>
        <div v-if="showOrders" class="col-md-9 text-light m-lg-0 m-sm-auto content-section">
          <h1 class="h4 mb-3 text-center text-md-start">Mina ordrar</h1>
          <p class="text-center text-md-start">Här hittar du samtliga beställningar.</p>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Sök efter produktnamn eller ordernummer" />
          </div>
          <div v-if="orders.length > 0">
            <table class="table table-dark m-0 rounded-3 overflow-hidden">
              <thead>
                <tr>
                  <th>Produkt</th>
                  <th>Pris</th>
                  <th>Order</th>
                  <th>Avbryt</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="(item, index) in orders" :key="item.id" class="">
                  <td class="d-flex align-items-center gap-2 border-0">
                    <img
                      :src="item.bild"
                      :alt="item.title"
                      class="image-thumbnail d-none d-sm-block"
                      style="width: 90px"
                    />
                    <RouterLink :to="'products/' + item.id" class="text-white text-decoration-none">
                      <p class="m-0">{{ item.title }}</p>
                    </RouterLink>
                  </td>
                  <td class="align-middle border-0">
                    <p class="m-0 text-info fw-bold">{{ item.pris }} kr</p>
                  </td>
                  <td class="align-middle border-0">
                    <p class="m-0">{{ item.orderStatus }}</p>
                  </td>
                  <td class="align-middle border-0">
                    <button
                      class="btn btn-danger"
                      @click="confirmCancel(index)"
                      v-if="item.orderStatus === 'Levereras'"
                    >
                      Avbryt
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="text-center text-md-start">
            <p>Du har inga beställningar</p>
          </div>
        </div>
        <div v-if="showProfileSettings" class="col-md-9 text-light content-section">
          <h1 class="h4 mb-3 text-center text-md-start">Profil</h1>
          <p class="text-center text-md-start">Här kan du se dina Inställningar.</p>
          <div>
            <p class="profile-settings">Namn: {{ user.name }}</p>
            <p class="profile-settings">E-postadress: {{ user.email }}</p>
            <p class="profile-settings">Telefonnummer: {{ user.phone }}</p>
            <p class="profile-settings">Adress: {{ user.address }}</p>
          </div>
          <p class="text-center text-md-start">Här kan du ändra dina Inställningar.</p>
          <div>
            <BFormGroup class="mb-3">
              <BFormInput class="mb-2" type="text" v-model="user.name" placeholder="Namn" />
              <BFormInput class="mb-2" type="email" v-model="user.email" placeholder="E-postadress" />
              <BFormInput class="mb-2" type="tel" v-model="user.phone" placeholder="Telefonnummer" />
              <BFormInput class="mb-2" type="text" v-model="user.address" placeholder="Adress" />
              <BFormInput class="mb-2" type="password" v-model="user.password" placeholder="Nytt lösenord" />
              <BFormInput class="mb-2" type="password" placeholder="Bekräfta nytt lösenord" />
            </BFormGroup>
            <div class="text-end">
              <button class="btn btn-primary" @click="saveUserInfo">Spara</button>
            </div>
          </div>
        </div>
        <div v-if="showWishlist" class="col-md-9 text-light content-section">
          <h1 class="h4 mb-3 text-center text-md-start">Önskelista</h1>
          <p class="text-center text-md-start">Här kan du se din önskelista.</p>
          <div class="rounded-3 overflow-hidden" v-if="wishList.length > 0">
            <WishList @updateWishList="updateWishList" />
          </div>
          <div v-else>
            <p class="fst-italic">Din önskelista är tom</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  background-color: #bb81f8;
}

.btn-primary:hover {
  background-color: #9a67ea;
}

.text-info {
  color: #bb81f8 !important;
}

.profile-settings {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 767.98px) {
  .nav-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-info {
    max-width: 90%;
    margin: 0 auto;
  }

  .table-responsive {
    overflow-x: auto;
  }
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  content: "";
}
</style>
