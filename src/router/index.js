import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/consultar-todos',
      meta: { requiresAuth: false, esPublica: false },
    },
    {
      path: '/consultar-todos',
      name: 'consultarTodos',
      component: () => import('../components/ConsultarTodosComponent.vue'),
      meta: { requiresAuth: false, esPublica: false },
    },
    {
      path: '/consultar-por-id',
      name: 'consultarPorId',
      component: () => import('../components/ConsultarPorIdComponent.vue'),
      meta: { requiresAuth: false, esPublica: false },
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../components/GuardarComponent.vue'),
      meta: { requiresAuth: true, esPublica: false },
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../components/ActualizarComponent.vue'),
      meta: { requiresAuth: true, esPublica: false },
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizarParcial',
      component: () => import('../components/ActualizarParcialComponent.vue'),
      meta: { requiresAuth: true, esPublica: false },
    },
    {
      path: '/eliminar',
      name: 'eliminar',
      component: () => import('../components/EliminarComponent.vue'),
      meta: { requiresAuth: true, esPublica: false },
    },
  ],
})

/*Configuración de guardianes de rutas
  to = ruta a la que se quiere navegar
   from = ruta desde la que se navega
   next = función que permite continuar o cancelar la navegación
*/
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // le envio a una pagina de login o algo similar
    console.log('Redirije al login')
  } else {
    //le dejo sin validación
    console.log('Pase libre')
    next()
  }
})

export default router
