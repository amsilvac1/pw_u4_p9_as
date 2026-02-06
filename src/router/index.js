import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false, esPublica: true },
    },
    {
      path: '/consultar-todos',
      name: 'consultarTodos',
      component: () => import('../components/ConsultarTodosComponent.vue'),
      meta: { requiresAuth: true, esPublica: false },
    },
    {
      path: '/consultar-por-id',
      name: 'consultarPorId',
      component: () => import('../components/ConsultarPorIdComponent.vue'),
      meta: { requiresAuth: true, esPublica: false },
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

router.beforeEach((to, from, next) => {
  const estaAutenticado = localStorage.getItem('estaAutenticado')

  if (to.meta.requiresAuth && !estaAutenticado) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
