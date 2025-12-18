<template>
  <AppHeader />
  <main style="padding-top: 80px;">
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
