<script>
import { obtenerTokenFacade } from './clients/AuthorizationClient'

export default {
  data() {
    return {
      token: null,
    }
  },
  provide() {
    return {
      getToken: () => this.token,
    }
  },
  mounted() {
    const fetchToken = async () => {
      try {
        const token = await obtenerTokenFacade()
        this.token = token.accessToken
        console.log('Token obtenido en App.vue:', token.accessToken)
      } catch (error) {
        console.error('Error al obtener el token en App.vue:', error)
      }
    }
    fetchToken()
  },
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/consultar-todos">Consultar Todos</RouterLink>
      <RouterLink to="/consultar-por-id">Consultar por ID</RouterLink>
      <RouterLink to="/guardar">Guardar</RouterLink>
      <RouterLink to="/actualizar">Actualizar</RouterLink>
      <RouterLink to="/actualizar-parcial">Actualizar Parcial</RouterLink>
      <RouterLink to="/eliminar">Eliminar</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
