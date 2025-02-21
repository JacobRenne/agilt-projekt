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
    <div class="bg-white rounded shadow-md position-relative">
        <div class="p-4">
            <div class="mb-4">
                <div class="text-secondary my-2">Artikelnr: {{ product.artnr }}
                </div>
                <h3 class="fs-6 fw-bold">{{ product.title }}</h3>
            </div>

            <div class="mb-4">
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
                      class="h-100 bg-primary hover-bg-secondary text-white px-4 py-2 rounded text-center text-sm text-decoration-none">
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
</style>