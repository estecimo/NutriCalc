<template>
  <div class="forgot-password">
    <h1>Forgot Password</h1>
    <p>Please enter your username and email. A reset password link will be sent to your email address.</p>

    <form @submit.prevent>
      <div class="form-group">
        <input id="username" v-model="username" type="text" placeholder="Username" required />
      </div>

      <div class="form-group">
        <input id="email" v-model="email" type="email" placeholder="Email" required />
      </div>

      <button type="submit">Send Reset Email</button>
    </form>

    <router-link to="/login" class="back-link">Back to Login</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
</script>

<style scoped>
.forgot-password {
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
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

.back-link {
  display: block;
  margin-top: 1rem;
  color: #42b983;
  text-decoration: none;
}
</style>
