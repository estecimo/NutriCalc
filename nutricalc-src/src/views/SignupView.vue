<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignup">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <input v-model="repeatPassword" type="password" placeholder="Repeat Password" required />
      <button type="submit">Register</button>
    </form>
    <router-link to="/login">Already have an account? Log in</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const handleSignup = () => {
  if (password.value !== repeatPassword.value) {
    alert("Passwords don't match!")
    return
  }
  alert(`Account created for ${username.value}`)
}
</script>

<style scoped>
.signup {
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
