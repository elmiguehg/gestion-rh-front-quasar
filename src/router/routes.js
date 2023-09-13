
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/workers', name:'workers', component: () => import('src/pages/Workers/WorkerIndex.vue') },
      { path: '/workers/create', name:'workers.create', component: () => import('src/pages/Workers/WorkerCreate.vue') },
      { path: '/workers/edit/:id', name:'workers.edit', component: () => import('src/pages/Workers/WorkerEdit.vue') },     
      { path: '/jobtitles', name:'jobtitles', component: () => import('src/pages/Jobtitles/JobtitleIndex.vue') },
      { path: '/jobtitles/create', name:'jobtitles.create', component: () => import('src/pages/Jobtitles/JobtitleCreate.vue') },
      { path: '/jobtitles/edit/:id', name:'jobtitles.edit', component: () => import('src/pages/Jobtitles/JobtitleEdit.vue') },
      { path: '/categories', name:'categories', component: () => import('src/pages/Categories/CategoryIndex.vue') },
      { path: '/entities', name:'entities', component: () => import('src/pages/Entities/EntityIndex.vue') },
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/login',
        name: 'login',
        component: () => import('src/pages/LoginPage.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('src/pages/RegisterPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]


export default routes

