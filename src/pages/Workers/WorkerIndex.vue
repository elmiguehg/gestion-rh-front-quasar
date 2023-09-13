<template>
  <q-page class="q-ma-md justify-center">
    <div class="row justify-center">
      <router-link :to="{ name: 'workers.create'}">
      <q-btn color="black" label="Añadir trabajador" />
      </router-link>
    </div>
    <div class="row justify-center">
      <div class="q-pa-md">
        <q-markup-table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Fecha de nacimiento</th>
              <th>Direccion</th>
              <th>Foto</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="work, i in workers" :key="work.id">
              <td>{{ (i + 1) }}</td>
              <td>{{ work.name }}</td>
              <td>{{ work.last_name }}</td>
              <td>{{ work.dni }}</td>
              <td>{{ work.birthdate }}</td>
              <td>{{ work.address }}</td>
              <td>
                <img v-if="work.foto" style="width:70px !important;" :src="work.foto" class="img-thumbnail" alt="">
                <img v-else td style="width:70px !important;" src="../../../public/UserFoto.jpg" class="img-thumbnail" alt="">
              </td>
              <td>
                <router-link :to="{ path: '/workers/edit/' + work.id }">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
              </td>
              <td>
                <button class="btn btn-danger" @click="$event => deleteWorker(work.id, work.name)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { confirmation } from '../../functions';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.authToken;
onMounted(() => { getWorkers() });
const workers = ref([]);
const getWorkers = async () => {
  await axios.get('http://localhost:8000/api/workers').then(
    response => (workers.value = response.data));
}
const deleteWorker = (id, name) => {
  confirmation(name, ('http://localhost:8000/api/workers/' + id), 'workers');
}

</script>
