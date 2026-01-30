<template>
  <div class="container">
    <div class="menu">
      <button @click="$router.push('/consultar-todos')">Consultar Todos</button>
      <button @click="$router.push('/consultar-por-id')">
        Consultar por ID
      </button>
      <button @click="$router.push('/guardar')">Guardar</button>
      <button @click="$router.push('/actualizar')">Actualizar</button>
      <button @click="$router.push('/actualizar-parcial')">
        Actualizar Parcial
      </button>
      <button @click="$router.push('/eliminar')">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponents',
}
</script>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
}

h1 {
  text-align: center;
  margin: 0 0 5px 0;
  font-size: 24px;
}

.menu {
  display: grid;
  gap: 15px;
}

button {
  background: white;
  padding: 20px;
  color: black;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #f0f0f0;
}
</style>
