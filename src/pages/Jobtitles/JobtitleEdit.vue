<template>
    <q-page class="q-ma-md justify-center">
        <div class="row justify-center">
            <q-form @submit="save" class="q-gutter-sm">

                <q-input filled v-model="form.name" label="Nombre"/>
                <q-input filled v-model="form.importance" label="Importancia"/>
                <q-input filled v-model="form.is_boss" label="Es jefe"/>
                <q-input filled v-model="form.category_id" label="Categoria"/>
                <div>
                    <q-btn label="Guardar" type="submit" color="primary" />                   
                </div>
            </q-form>

        </div>
    </q-page>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { sendRequest } from '../../functions';
import { useRoute } from 'vue-router';
import axios from 'axios';
const route = useRoute();
const form = ref({name:'',importance:'', is_boss:'', category:''});
const id = ref(route.params.id);
onMounted( () => {getJobtitle()});

const getJobtitle = () =>{
    axios.get('http://localhost:8000/api/jobtitles/'+id.value).then(
        response => (
            form.value.name = response.data.data.name,
            form.value.importance = response.data.data.importance,
            form.value.is_boss = response.data.data.is_boss,
            form.value.category_id = response.data.data.category_id
        )
    );
}

const save = () =>{
   event.preventDefault();
    sendRequest('PUT', form.value, ('http://localhost:8000/api/jobtitles/'+id.value),'/jobtitles');
}
</script>