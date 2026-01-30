<template>
  <div>
    <h2>Consultar Todos los Estudiantes</h2>

    <div class="component-card">
      <button @click="ejecutar" class="btn-primary">Ejecutar Consulta</button>

      <div v-if="resultado" class="resultado">
        <h4>Resultados ({{ resultado.length }} estudiantes):</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Género</th>
              <th>Provincia</th>
              <th>Fecha Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="est in resultado" :key="est.id">
              <td>{{ est.id }}</td>
              <td>{{ est.nombre }}</td>
              <td>{{ est.apellido }}</td>
              <td>{{ est.genero || '-' }}</td>
              <td>{{ est.provincia || '-' }}</td>
              <td>{{ est.fechaNacimiento || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarTodosFachada } from '@/clients/MateriaClients'

export default {
  name: 'ConsultarTodosComponent',
  data() {
    return {
      resultado: null,
    }
  },
  methods: {
    async ejecutar() {
      this.resultado = await consultarTodosFachada()
    },
  },
}
</script>

<style scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.component-card {
  background: white;
  padding: 15px;
  border: 1px solid #ddd;
}

.btn-primary {
  background: #4285f4;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.resultado h4 {
  margin: auto;
  font-size: 16px;
  color: black;
}

thead {
  background: #4285f4;
  color: white;
}

th {
  padding: 10px;
  text-align: left;
  font-weight: bold;
}

td {
  padding: 10px;
  border-bottom: 1px solid black;
  color: black;
}
</style>
