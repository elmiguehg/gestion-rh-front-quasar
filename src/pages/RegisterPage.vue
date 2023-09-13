<template>
<q-page
     class="window-height window-width row justify-center items-center"
     style="background: linear-gradient(#ffffff, #ffffff);"
   >
<div class="column q-pa-lg">
  <div class="row">
    <q-card square class="shadow-24" style="width:500px;height:480px;">
      <q-card-section class="bg-deep-purple-7">
        <h4 class="text-h5 text-white q-my-md">Registrar</h4>
      </q-card-section>
      <q-card-section>
        <q-form @submit.prevent="$event => authStore.register(form)" class="q-px-sm q-pt-ml q-pb-lg">
        <q-input square clearable v-model="form.name" label="Nombre">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input square clearable v-model="form.last_name" label="Apellidos">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input square clearable v-model="form.email" type="email" label="Email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input square clearable v-model="form.password" type="password" label="Password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-card-actions class="q-px-lg">
          <q-btn unelevated size="lg" color="blue-4" class="full-width text-white" type="submit" label="Enviar" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sl">
        <p class="text-grey-6">Return to login</p>
      </q-card-section>
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
const form = ref({ name: '', last_name: '', email: '', password: '' });
</script>