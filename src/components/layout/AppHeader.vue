<template>
  <header class="header">
    <h1>DTT Houses</h1>
    <nav>
      <router-link to="/">Houses</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-bg-2);
  padding: 16px;
  border-bottom: 1px solid var(--color-tertiary-light);
}
</style>
