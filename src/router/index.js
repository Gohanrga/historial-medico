import Vue from 'vue'
import VueRouter from 'vue-router'
import BusquedaHistorial from '../views/BusquedaHistorial.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BusquedaHistorial',
    component: BusquedaHistorial
  },
  {
    path: '/registroPaciente',
    name: 'registroPAciente',
    component: import(/* webpackChunkName: "about" */ '../views/Paciente.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router