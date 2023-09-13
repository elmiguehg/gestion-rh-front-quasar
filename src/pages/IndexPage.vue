<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <router-link :to="{ path: '/jobtitles'}">
    <q-btn label="login" @click="login"></q-btn>
  </router-link>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const form = {
      email:'mglhernandez321@gmail.com',
      password:'12345678'
    }
    const login = () => {
    axios.post('http://localhost:8000/api/auth/login', form)
    }
     axios.get('http://localhost:8000/sanctum/csrf-cookie').then(
      response => {
        console.log(response)
      }
     )
     return {
      login
     }
  }
})
</script>
