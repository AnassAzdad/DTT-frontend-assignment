<template>
  <section v-if="house" class="detail">
    <img :src="house.image" class="hero" />

    <h2>{{ house.address }}</h2>
    <p>{{ house.postalCode }} {{ house.city }}</p>

    <ul>
      <li>Price: €{{ house.price }}</li>
      <li>Size: {{ house.size }} m²</li>
      <li>Bedrooms: {{ house.bedrooms }}</li>
      <li>Bathrooms: {{ house.bathrooms }}</li>
    </ul>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHousesStore } from '../stores/houses.store'

const route = useRoute()
const store = useHousesStore()

const house = store.houses.find(
  h => h.id === Number(route.params.id)
)
</script>

<style scoped>
.detail {
  padding: 16px;
}

.hero {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  margin-bottom: 16px;
}
</style>
