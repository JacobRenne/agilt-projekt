<template>
  <div class="container bg-white p-4 rounded shadow-sm">
    <div class="row">
      <div class="col-md-3 bg-light p-3 rounded">
        <BFormRadioGroup
          v-model="selected"
          :options="options"
          name="radios-btn-group1"
          size="lg"
          buttons
          stacked
        />
      </div>
      <div v-if="showOrders" class="col-md-9">
        <h1 class="h4 mb-3">Mina ordrar</h1>
        <p>Här hittar du samtliga beställningar.</p>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Sök efter produktnamn eller ordernummer"
          />
        </div>
        <div>
          <BFormRadioGroup
            v-model="selected2"
            :options="options2"
            name="radios-btn-group2"
            buttons
          />
        </div>
        <select class="form-control mb-3">
          <option value="">Orderstatus</option>
        </select>
        <p class="text-muted">Inga beställningar hittades</p>
      </div>
      <div v-if="showProfileSettings" class="col-md-9">
        <h1 class="h4 mb-3">Profilinställningar</h1>
        <p>Här kan du se dina profilinställningar.</p>
        <div>
          <p class="profile-settings">Namn: Jhon Doe</p>
          <p class="profile-settings">E-postadress: exempel@email.se</p>
          <p class="profile-settings">Telefonnummer: +46 123456789</p>
          <p class="profile-settings">Adress: exempel väg 1</p>
        </div>
        <p>Här kan du ändra dina profilinställningar.</p>
        <div>
          <BFormGroup class="mb-3">
            <BFormInput type="email" placeholder="E-postadress" />
            <BFormInput type="tel" placeholder="Telefonnummer" />
            <BFormInput type="text" placeholder="Adress" />
            <BFormInput type="password" placeholder="Nytt lösenord" />
            <BFormInput type="password" placeholder="Bekräfta nytt lösenord" />
          </BFormGroup>
          <BButton variant="primary">Spara</BButton>
        </div>
      </div>
      <div v-if="showWishlist" class="col-md-9">
        <h1 class="h4 mb-3">Önskelistor</h1>
        <p>Här kan du se dina önskelistor.</p>
        <p class="text-muted">Inga önskelistor hittades</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

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
  { text: "Bestälningar", value: "orders" },
  { text: "Profilinställningar", value: "profilesettings" },
  { text: "Önskelistor", value: "wishlist" },
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
