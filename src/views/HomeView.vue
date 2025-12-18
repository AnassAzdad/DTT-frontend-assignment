<template>
  <section class="home">
    <h2>Houses</h2>
    <p class="result-count">
  {{ filteredHouses.length }} houses found
</p>
<router-link to="/create">
  <button>Add house</button>
</router-link>



    <input
      v-model="search"
      type="text"
      placeholder="Search by city or address"
    />
    <select v-model="sortOption">
  <option value="">Sort by</option>
  <option value="price">Price</option>
  <option value="size">Size</option>
</select>


    <p v-if="filteredHouses.length === 0">
      No results found
    </p>

    <div class="grid">
      <HouseCard
        v-for="house in filteredHouses"
        :key="house.id"
        :house="house"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHousesStore } from '../stores/houses.store'
import HouseCard from '../components/houses/HouseCard.vue'

const housesStore = useHousesStore()

const search = ref('')
const sortOption = ref('')

const filteredHouses = computed(() => {
  let result = housesStore.houses.filter(house =>
    house.address.toLowerCase().includes(search.value.toLowerCase()) ||
    house.city.toLowerCase().includes(search.value.toLowerCase())
  )

  if (sortOption.value === 'price') {
    result = result.sort((a, b) => a.price - b.price)
  }

  if (sortOption.value === 'size') {
    result = result.sort((a, b) => a.size - b.size)
  }

  return result
})
</script>


<style scoped>
select {
  margin-left: 8px;
  padding: 8px;
}

.result-count {
  margin-bottom: 12px;
  color: #4A4B4C;
  font-size: 14px;
}

.home {
  padding: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
}
</style>
