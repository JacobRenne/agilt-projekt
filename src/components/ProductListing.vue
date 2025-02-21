<script setup>
import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="rounded shadow-md position-relative" id="bg">
        <div class="p-4">
            <div class="mb-4">
                <div class="text-secondary my-2">Artikelnr: {{ product.artnr }}
                </div>
                <h3 class="fs-6 fw-bold text-light">{{ product.title }}</h3>
            </div>
            <div class="mb-4">
                <img :src="product.bild" :alt="product.title"
                  class="produkt-bild">
            </div>

            <div class="mb-4 text-light">
                <div class="description-container">
                    {{ product.beskrivning }}
                </div>
            </div>
            <div class="border border-light mb-4"></div>

            <div
              class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                <div class="text-danger fw-bold mb-3">
                    {{ product.pris }} kr
                </div>
                <div
                  class="d-flex justify-content-center justify-content-lg-end">
                    <RouterLink :to="'products/' + product.id"
                      class="h-100 hover-bg-primary text-white px-4 py-2 rounded text-center text-sm text-decoration-none"
                      id="buy-button">
                        Köp
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.description-container
{
    height: 3rem;
    overflow: hidden;
    line-clamp: 2;
    line-height: 1.5;
}

.produkt-bild
{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.25rem;
}

#bg
{
    background: #413d46;
}

#buy-button
{
    background: #bb81f8;
}

#buy-button:hover
{
    background: #9349e1;
}
</style>