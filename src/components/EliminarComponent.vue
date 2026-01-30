<template>
  <div>
    <h2>Eliminar Estudiante</h2>

    <div class="component-card">
      <div class="form">
        <input
          v-model.number="idEliminar"
          type="number"
          placeholder="ID a eliminar"
        />
        <button @click="ejecutar" class="btn-danger">Eliminar</button>
      </div>

      <div v-if="resultado">
        <table>
          <tbody>
            <tr>
              <th>ID Eliminado</th>
              <td>{{ idEliminado }}</td>
            </tr>
            <tr>
              <th>Estado</th>
              <td>Eliminado correctamente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { eliminarFachada } from '@/clients/MateriaClients'

export default {
  name: 'EliminarComponent',
  data() {
    return {
      idEliminar: null,
      resultado: false,
      idEliminado: null,
    }
  },
  methods: {
    async ejecutar() {
      await eliminarFachada(this.idEliminar)
      this.idEliminado = this.idEliminar
      this.resultado = true
    },
  },
}
</script>

<style scoped>
.component-card {
  background: white;
  padding: 15px;
  border: 1px solid #ddd;
  color: black;
}

.form {
  display: flex;
  gap: 8px;
}

.form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
}

.btn-danger {
  background: #34a853;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: red;
  color: white;
  padding: 10px;
  text-align: left;
  width: 40%;
}

td {
  padding: 10px;
  border-bottom: 1px solid white;
}
</style>
