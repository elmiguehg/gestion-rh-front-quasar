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
import { ref, nextTick } from 'vue';
import { sendRequest } from '../../functions';
const form = ref({name:'',importance:'', is_boss:'', category:''});
const nameInput = ref('');

const save = (event) => {
    event.preventDefault();
    sendRequest('POST', form.value, 'http://localhost:8000/api/jobtitles', '/jobtitles');
    form.value.name = '',
    form.value.importance = '',
    form.value.is_boss = '',
    form.value.category_id = ''
    nextTick(() => nameInput.value.focus());
}
</script>