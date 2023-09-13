// src/stores/index.js

import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import route from '../router/index'
import App from '../App.vue'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  pinia.use(({store}) => {
    store.router = markRaw(route())
  })
  pinia.use(createPersistedState)
  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)
  const app = createApp(App)

  app.use(pinia)
  app.use(route())
  
  return pinia
})