import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
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
  const estaAutenticado = localStorage.getItem('estaAtenticado')
  if (to.meta.requiresAuth && !estaAutenticado) {
    // le envio a una pagina de login o algo similar
    console.log()
    next({ name: 'login' })
  } else {
    //le dejo sin validación
    console.log('Pase libre')
    next()
  }
})

export default router
