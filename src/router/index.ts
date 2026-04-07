import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/Eventos',
    name: 'Eventos',
    component: () => import('../views/EventosPage.vue')
  },
  {
    path: '/Detalhes/:id',
    name: 'Detalhes',
    component: () => import('../views/DetalhesPage.vue')
  },
  {
    path: '/Favorito',
    name: 'Favorito',
    component: () => import('../views/FavoritoPage.vue')
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: () => import('../views/PerfilPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
