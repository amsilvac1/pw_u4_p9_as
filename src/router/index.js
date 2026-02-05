import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/consultar-todos',
    },
    {
      path: '/consultar-todos',
      name: 'consultarTodos',
      component: () => import('../components/ConsultarTodosComponent.vue'),
    },
    {
      path: '/consultar-por-id',
      name: 'consultarPorId',
      component: () => import('../components/ConsultarPorIdComponent.vue'),
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../components/GuardarComponent.vue'),
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../components/ActualizarComponent.vue'),
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizarParcial',
      component: () => import('../components/ActualizarParcialComponent.vue'),
    },
    {
      path: '/eliminar',
      name: 'eliminar',
      component: () => import('../components/EliminarComponent.vue'),
    },
  ],
})

export default router
