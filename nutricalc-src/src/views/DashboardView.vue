<template>
  <div>
    <header class="dashboard-header">
      <div class="logo-title">
        <img src="@/assets/logo.svg" alt="NutriCalc" class="logo" />
        <span class="app-name">NutriCalc</span>
      </div>
      <nav class="nav-links">
        <RouterLink to="/dietocalculo">Dietocálculo</RouterLink>
        <RouterLink to="/dieta">Dieta</RouterLink>
        <RouterLink to="/calculadoras">Calculadoras</RouterLink>
        <div class="profile-menu">
          <button @click="toggleDropdown">Perfil ⌄</button>
          <ul v-if="dropdownOpen" class="dropdown">
            <li><RouterLink to="/settings">Settings</RouterLink></li>
            <li><RouterLink to="/menus">Menus</RouterLink></li>
            <li><a href="#" @click.prevent="logout">Log out</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="dashboard-content">
      <section class="section">
        <h2>Macronutrientes</h2>
        <div class="input-group">
          <label for="kcal">Total Kilocalories</label>
          <input id="kcal" v-model.number="totalKcal" type="number" placeholder="e.g. 2000" />
        </div>

        <table class="macro-table">
          <thead>
            <tr>
              <th>Macronutriente</th>
              <th>Kcal</th>
              <th>%</th>
              <th>Gramos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(macro, index) in macros" :key="index">
              <td>{{ macro.name }}</td>
              <td>{{ macro.kcal }}</td>
              <td>{{ macro.percent }}%</td>
              <td>{{ macro.grams }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="section">
        <h2>Equivalentes</h2>
        <table class="equivalents-table">
          <thead>
            <tr>
              <th>Grupo alimenticio</th>
              <th>Eq</th>
              <th>Kcal</th>
              <th>Proteína</th>
              <th>Lípidos</th>
              <th>HCO</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example row; replace with dynamic input in the future -->
            <tr>
              <td>Cereales</td>
              <td>2</td>
              <td>140</td>
              <td>4</td>
              <td>2</td>
              <td>26</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/stores/auth'

const router = useRouter()
const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const logout = () => {
  auth.isLoggedIn = false
  router.push('/login')
}

const totalKcal = ref(2000)

const macros = computed(() => {
  return [
    {
      name: 'Proteínas',
      percent: 20,
      kcal: (totalKcal.value * 0.2).toFixed(0),
      grams: ((totalKcal.value * 0.2) / 4).toFixed(1)
    },
    {
      name: 'Lípidos',
      percent: 30,
      kcal: (totalKcal.value * 0.3).toFixed(0),
      grams: ((totalKcal.value * 0.3) / 9).toFixed(1)
    },
    {
      name: 'Carbohidratos',
      percent: 50,
      kcal: (totalKcal.value * 0.5).toFixed(0),
      grams: ((totalKcal.value * 0.5) / 4).toFixed(1)
    }
  ]
})
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #42b983;
  color: white;
  padding: 1rem 2rem;
}

.logo-title {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.app-name {
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a,
.profile-menu button {
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.profile-menu {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 2rem;
  right: 0;
  background: rgb(0, 0, 0);
  color: black;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0.5rem 0;
  width: 150px;
  z-index: 100;
}

.dropdown li {
  padding: 0.5rem 1rem;
}

.dropdown li:hover {
  background: #f0f0f0;
}

.dashboard-content {
  padding: 2rem;
}

.section {
  margin-bottom: 3rem;
}

.input-group {
  margin-bottom: 1rem;
}

input[type="number"] {
  padding: 0.5rem;
  width: 200px;
  font-size: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  border: 1px solid #42b983;
  padding: 0.75rem;
  text-align: center;
}

th {
  background: #42b983;
}
</style>
