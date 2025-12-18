<template>
  <router-link :to="`/houses/${house.id}`" class="card-link">
    <article class="card">
      <img :src="house.image" alt="House image" />
      <div class="content">
        <h3>{{ house.address }}</h3>
        <p>{{ house.postalCode }} {{ house.city }}</p>
        <p>
          {{ house.bedrooms }} bedrooms ·
          {{ house.bathrooms }} bathrooms ·
          {{ house.size }} m²
        </p>
      </div>
    </article>
  </router-link>
</template>

<script setup>
defineProps({
  house: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  background: white;
  border: 1px solid #ddd;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.content {
  padding: 12px;
}
</style>

