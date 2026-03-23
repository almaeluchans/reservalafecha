import { createRouter, createWebHistory } from 'vue-router'
import GlitterNegro from './proposals/GlitterNegro.vue'
import GlitterBlanco from './proposals/GlitterBlanco.vue'
import GlitterNegroCopy from './proposals/GlitterNegro copy.vue'

const routes = [
  { path: '/', component: GlitterNegro },
  { path: '/1', component: GlitterBlanco },
  { path: '/2', component: GlitterNegroCopy }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
