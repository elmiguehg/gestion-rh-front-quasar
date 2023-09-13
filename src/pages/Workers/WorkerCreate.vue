<template>
    <q-page class="q-ma-md justify-center">
        <div class="row justify-center">
            <q-form @submit="save" class="q-gutter-sm">

                <div class="mb-3 text-center">
                    <img v-if="foto" height="100" :src="foto" id="fotoimg" class="img-thumbnail" alt="">
                    <img v-else td style="width:100px !important;" src="/UserFoto.jpg" id="fotoimg" class="img-thumbnail"
                        alt="">
                </div>
                <q-input filled v-model="form.name" label="Nombre"/>
                <q-input filled v-model="form.last_name" label="Apellidos"/>
                <q-input filled v-model="form.dni" label="DNI"/>
                <q-input type="date" filled v-model="form.birthdate" label="Fecha de nacimiento"/>
                <q-input filled v-model="form.address" label="Direccion"/>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                  </span>
                  <input  v-on:change = "previsualizarFoto" type="file" s accept="image/png, image/jpeg, image/gift" class="form-control">
                </div>

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
const form = ref({ name: '', last_name: '', dni: '', birthdate: '', address: '', foto: '' });
const nameInput = ref('');
const foto = ref('');

const previsualizarFoto = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
        var miFoto = document.getElementById('fotoimg');
        miFoto.src = reader.result;
        foto.value = miFoto.src;
    }
}

const save = (event) => {
    event.preventDefault();
    var miFoto = document.getElementById('fotoimg');
    form.value.foto = miFoto.src;
    sendRequest('POST', form.value, 'http://localhost:8000/api/workers', '/workers');
    form.value.name = '';
    form.value.last_name = '';
    form.value.dni = '';
    form.value.birthdate = '';
    form.value.address = '';
    form.value.foto = '';
    nextTick(() => nameInput.value.focus());
}
</script>