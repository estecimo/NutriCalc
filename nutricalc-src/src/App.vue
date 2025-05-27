<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <h1 class="title">NutriCalc</h1>
    <nav>

    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #42b983;
  color: white;
}

.title {
  margin: 0;
  font-size: 2rem;
}

nav {
  margin-top: 1rem;
  font-size: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

@media (min-width: 768px) {
  .app-header {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  nav {
    margin-top: 0;
  }
}
main {
  padding: 1rem;
}
</style>
