<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="rounded shadow-md position-relative product-card">
        <div class="p-3 d-flex flex-column">
            <div class="text-grey my-1">Artikelnr: {{ product.artnr }}</div>
            <h3 class="fs-6 fw-bold text-white title">{{ product.title }}</h3>
            <RouterLink :to="'products/' + product.id">
                <div class="row mb-2">
                    <div class="col-12">
                        <img :src="product.bild" :alt="product.title"
                          class="img-fluid rounded">
                    </div>
                </div>
            </RouterLink>
            <div class="mb-3 text-light description-container">
                {{ product.beskrivning }}
            </div>
            <div class="border border-light mb-2"></div>
            <div class="d-flex justify-content-end">
                <div class="text-primary fw-bold">{{ product.pris }} kr</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-card
{
    background: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.title
{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.img-fluid
{
    width: 100%;
    height: 150px;
    border-radius: 8px;
    object-fit: contain;
}

.text-primary
{
    color: #bb86fc !important;
}

.text-grey
{
    color: #757575 !important;
}

.btn-primary
{
    background-color: #bb86fc;
    border: none;
    padding: 12px;
    font-size: 1.1rem;
    border-radius: 8px;
}

.btn-primary:hover
{
    background-color: #9a67ea;
}

.text-light
{
    color: #b0b0b0 !important;
}

.description-container
{
    height: 3rem;
    line-clamp: 2;
    box-orient: vertical;
    overflow: hidden;
}
</style>
