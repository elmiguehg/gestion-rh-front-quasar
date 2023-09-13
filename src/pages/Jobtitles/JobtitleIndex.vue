<template>
  <q-page class="q-ma-md justify-center">
    <div class="row justify-center">
      <router-link :to="{ name: 'jobtitles.create' }">
        <q-btn color="black" label="Añadir puesto de trabajo" />
      </router-link>
    </div>
    <div class="row justify-center">
      <div class="q-pa-md">
        <q-markup-table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Importancia</th>
              <th>Jefe</th>
              <th>Categoria</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="job, i in jobtitles" :key="job.id">
              <td>{{ (i + 1) }}</td>
              <td>{{ job.name }}</td>
              <td>{{ job.importance }}</td>
              <td v-if="job.is_boss == '1'">{{ 'Si' }}</td>
              <td v-else>{{ 'No' }}</td>
              <td>{{ job.category }}</td>
              <td>
                <router-link :to="{ path: '/jobtitles/edit/' + job.id }">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
              </td>
              <td>
                <button class="btn btn-danger" @click="$event => deleteJobtitle(job.id, job.name)">
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
onMounted(() => { getJobtitles() });
const jobtitles = ref([]);
const getJobtitles = async () => {
  await axios.get('http://localhost:8000/api/jobtitles').then(
    response => (jobtitles.value = response.data));
}
const deleteJobtitle = (id, name) => {
  confirmation(name, ('http://localhost:8000/api/jobtitles/' + id), 'jobtitles');
}

</script>
