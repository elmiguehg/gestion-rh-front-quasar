<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Gestion RRHH
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Opciones
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Trabajadores',
    caption: 'Gestion de trabajadores',
    icon: 'las la-caret-right',
    link: 'workers'
  },
  {
    title: 'Puestos de trabajo',
    caption: 'Gestion de puestos de trabajo',
    icon: 'las la-caret-right',
    link: 'jobtitles'
  },
  {
    title: 'Entidades',
    caption: 'Gestion de entidades',
    icon: 'las la-caret-right',
    link: 'entities'
  },
  {
    title: 'Categorias',
    caption: 'Gestion categorias',
    icon: 'las la-caret-right',
    link: 'categories'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
