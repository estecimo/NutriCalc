<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div class="links">
      <router-link to="/forgot-password">Forgot password?</router-link>
      <router-link to="/signup">Don't have an account? Sign up</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = () => {
  alert(`Logging in as ${username.value}`)
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
input {
  margin: 5px 0;
  padding: 8px;
  width: 100%;
}
.links {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
button {
  width: 100%;
  padding: 0.7rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #369a6e;
}
</style>
