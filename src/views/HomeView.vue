<template>
  <section>
    <h2>Houses</h2>

    <ul>
      <li v-for="house in houses" :key="house.id">
        <strong>{{ house.address }}</strong><br />
        {{ house.postalCode }} {{ house.city }}<br />
        {{ house.bedrooms }} bedrooms · {{ house.bathrooms }} bathrooms · {{ house.size }} m²
      </li>
    </ul>
  </section>
</template>

<script>
import { useHousesStore } from '../stores/houses.store'

export default {
  name: 'HomeView',
  setup() {
    const housesStore = useHousesStore()
    return {
      houses: housesStore.houses
    }
  }
}
</script>
