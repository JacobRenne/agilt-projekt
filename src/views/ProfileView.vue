<script setup>
import { ref, watch, onMounted } from "vue";
import WishList from "../components/WishList.vue";

const user = ref(
  JSON.parse(localStorage.getItem("user")) || {
    id: 1,
    name: "John Doe",
    email: "exempel@email.se",
    phone: "+46 123456789",
    address: "exempel väg 1",
    password: "",
  }
);

const orders = ref(JSON.parse(localStorage.getItem('orders') || '[]' ))

onMounted(() => {
  localStorage.setItem("user", JSON.stringify(user.value));
});

const wishList = ref(JSON.parse(sessionStorage.getItem("wishList")) || []);
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
  { text: "Beställningar", value: "orders" },
  { text: "Profilinställningar", value: "profilesettings" },
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

const saveUserInfo = () => {
  localStorage.setItem("user", JSON.stringify(user.value));
};
</script>

<template>
  <section class="bg-dark">
    <div
      class="container p-4 mt-3 rounded shadow-sm"
      style="background-color: #333333"
    >
      <div class="row">
        <div class="col-md-3 p-3 rounded" style="background-color: #333333">
          <BFormRadioGroup
            v-model="selected"
            :options="options"
            name="radios-btn-group1"
            size="lg"
            buttons
            stacked
          />
        </div>
        <div v-if="showOrders" class="col-md-9 text-light">
          <h1 class="h4 mb-3">Mina ordrar</h1>
          <p>Här hittar du samtliga beställningar.</p>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Sök efter produktnamn eller ordernummer"
            />
          </div>
          <div v-if="orders.length > 0">
            <table class="table table-dark m-0">
              <thead class="">
                <tr>
                  <th>Produkt</th>
                  <th>Pris</th>
                  <th>Orderstatus</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr v-for="item in orders" :key="item.id" class="">
                  <td class="d-flex align-items-center gap-2 border-0">
                    <img :src="item.bild" :alt="item.title" class="image-thumbnail d-none d-sm-block" style="width: 90px;">
                    <RouterLink :to="'products/' + item.id" class="text-white text-decoration-none">
                      <p class="m-0">{{ item.title }}</p>
                    </RouterLink>
                  </td>
                  <td class="align-middle border-0">
                    <p class="m-0">{{ item.pris }}</p>
                  </td>
                  <td class="align-middle border-0">
                    <p class="m-0">Levereras</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else><p>Du har inga beställningar</p></div>
        </div>
        <div v-if="showProfileSettings" class="col-md-9 text-light">
          <h1 class="h4 mb-3">Profilinställningar</h1>
          <p>Här kan du se dina profilinställningar.</p>
          <div>
            <p class="profile-settings">Namn: {{ user.name }}</p>
            <p class="profile-settings">E-postadress: {{ user.email }}</p>
            <p class="profile-settings">Telefonnummer: {{ user.phone }}</p>
            <p class="profile-settings">Adress: {{ user.address }}</p>
          </div>
          <p>Här kan du ändra dina profilinställningar.</p>
          <div>
            <BFormGroup class="mb-3">
              <BFormInput
                class="mb-2"
                type="text"
                v-model="user.name"
                placeholder="Namn"
              />
              <BFormInput
                class="mb-2"
                type="email"
                v-model="user.email"
                placeholder="E-postadress"
              />
              <BFormInput
                class="mb-2"
                type="tel"
                v-model="user.phone"
                placeholder="Telefonnummer"
              />
              <BFormInput
                class="mb-2"
                type="text"
                v-model="user.address"
                placeholder="Adress"
              />
              <BFormInput
                class="mb-2"
                type="password"
                v-model="user.password"
                placeholder="Nytt lösenord"
              />
              <BFormInput
                class="mb-2"
                type="password"
                placeholder="Bekräfta nytt lösenord"
              />
            </BFormGroup>
            <BButton variant="primary" @click="saveUserInfo">Spara</BButton>
          </div>
        </div>
        <div v-if="showWishlist" class="col-md-9 text-light">
          <h1 class="h4 mb-3">Önskelista</h1>
          <p>Här kan du se din önskelista.</p>
          <div v-if="wishList.length > 0">
            <WishList />
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
</style>
