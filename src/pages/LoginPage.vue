<template>
   <q-page
     class="window-height window-width row justify-center items-center"
     style="background: linear-gradient(#ffffff, #ffffff);"
   >
     <div class="column q-pa-lg">
       <div class="row">
         <q-card square class="shadow-24" style="width:500px ; height:400px">
           <q-card-section class="bg-deep-purple-7">
             <h3 class="text-h5 text-white q-my-md">Login</h3>
           </q-card-section>
           <q-card-section>
             <q-form class="q-px-sm q-pt-ml" @submit = "authStore.login(form)">
               <q-input autofocus square clearable v-model="form.email" type="email" label="Email" class="form-control">
                 <template v-slot:prepend>
                   <q-icon name="email" />
                 </template>
               </q-input>
               <q-input autofocus square clearable v-model="form.password" type="password" label="Password" class="form-control">
                 <template v-slot:prepend>
                   <q-icon name="lock" />
                 </template>
               </q-input>
               <q-card-actions class="q-px-lg">
             <q-btn size="lg" color="blue-4" class="full-width text-white" label="Entrar" type="submit"/>
           </q-card-actions>
           <q-card-actions class="q-px-lg">
            <router-link class="full-width text-white" :to="{ path: 'register' }">
               <q-btn unelevated size="lg" color="blue-5" class="full-width text-white" label="Rigistrarse" />
            </router-link>
            </q-card-actions>
             </q-form>
           </q-card-section>
         </q-card>
       </div>
     </div>
   </q-page>
 </template>
 
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
const form = ref({ email: '', password: '' });
</script>
 