<template>
  <div>
    <h2>Consultar Estudiante por ID</h2>

    <div class="component-card">
      <div class="input-group">
        <input v-model.number="idBuscar" type="number" placeholder="ID" />
        <button @click="ejecutar" class="btn-primary">Buscar</button>
      </div>

      <div v-if="resultado" class="resultado">
        <h4>Estudiante Encontrado:</h4>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{{ resultado.id }}</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{{ resultado.nombre || '-' }}</td>
            </tr>
            <tr>
              <th>Apellido</th>
              <td>{{ resultado.apellido || '-' }}</td>
            </tr>

            <tr>
              <th>Género</th>
              <td>{{ resultado.genero || '-' }}</td>
            </tr>
            <tr>
              <th>Provincia</th>
              <td>{{ resultado.provincia || '-' }}</td>
            </tr>
            <tr>
              <th>Fecha Nacimiento</th>
              <td>{{ resultado.fechaNacimiento || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from '@/clients/MateriaClients'

export default {
  name: 'ConsultarPorIdComponent',
  data() {
    return {
      idBuscar: null,
      resultado: null,
    }
  },
  methods: {
    async ejecutar() {
      const token = localStorage.getItem('token')
      this.resultado = await consultarPorIdFachada(this.idBuscar, token)
    },
  },
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 20px;
  margin-bottom: 20px;
}

.component-card {
  background: white;
  padding: 15px;
  border: 1px solid #ddd;
}

.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.input-group input {
  flex: 1;
  padding: 8px;
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

.resultado {
  margin: auto;
  font-size: 16px;
  color: black;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #4285f4;
  color: white;
  padding: 10px;
  text-align: left;
  width: 40%;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
