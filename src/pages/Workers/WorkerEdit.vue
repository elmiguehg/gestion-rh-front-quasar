<template>
    <q-page class="q-ma-md justify-center">
        <div class="row justify-center">
            <q-form @submit="save" class="q-gutter-sm">

                <div class="mb-3 text-center">
                    <img v-if="form.foto" height="100" :src="form.foto" id="fotoimg" class="img-thumbnail" alt="">
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
import { ref,onMounted } from 'vue';
import { sendRequest } from '../../functions';
import { useRoute } from 'vue-router';
import axios from 'axios';
const foto = ref('');
const route = useRoute();
const form = ref({ id: '', name:'',last_name:'', dni:'', birthdate:'',address:'', foto:''});
const id = ref(route.params.id);
onMounted( () => {getWorker()});

const previsualizarFoto = (event) =>{
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function(){
          var miFoto = document.getElementById('fotoimg');
          miFoto.src = reader.result;
          foto.value = miFoto.src;
        }
       }
const getWorker = () =>{
    axios.get('http://localhost:8000/api/workers/'+id.value).then(
        response => (
            form.value.name = response.data.data.name,
            form.value.last_name = response.data.data.last_name,
            form.value.dni = response.data.data.dni,
            form.value.birthdate = response.data.data.birthdate,
            form.value.address = response.data.data.address,
            form.value.foto = response.data.data.foto
            
        )
    );
}

const save = () =>{
   event.preventDefault();
    var miFoto = document.getElementById('fotoimg');
    form.value.foto = miFoto.src;
    sendRequest('PUT', form.value, ('http://localhost:8000/api/workers/'+id.value),'/workers');
}
</script>