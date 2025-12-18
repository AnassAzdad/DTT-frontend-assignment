<template>
  <section class="create">
    <h2>Create house</h2>

    <form @submit.prevent="submit">
      <input v-model="form.address" placeholder="Address" required />
      <input v-model="form.postalCode" placeholder="Postal code" required />
      <input v-model="form.city" placeholder="City" required />
      <input v-model.number="form.price" type="number" placeholder="Price" required />
      <input v-model.number="form.size" type="number" placeholder="Size (m²)" required />
      <input v-model.number="form.bedrooms" type="number" placeholder="Bedrooms" required />
      <input v-model.number="form.bathrooms" type="number" placeholder="Bathrooms" required />
      <input v-model="form.image" placeholder="Image URL" required />

      <button type="submit">Create</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useHousesStore } from '../stores/houses.store'

const router = useRouter()
const housesStore = useHousesStore()

const form = reactive({
  address: '',
  postalCode: '',
  city: '',
  price: null,
  size: null,
  bedrooms: null,
  bathrooms: null,
  image: ''
})

function submit() {
  housesStore.addHouse(form)
  router.push('/')
}
</script>

<style scoped>
.create {
  padding: 16px;
  max-width: 400px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 8px;
}

button {
  padding: 10px;
  background: #eb5440;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
