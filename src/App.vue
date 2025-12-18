<template>
  <AppHeader />
  <main class="content">
    <router-view />
  </main>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.content {
  padding-top: 80px;
}
</style>
