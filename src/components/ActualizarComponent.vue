<template>
  <div>
    <h2>Actualizar Estudiante</h2>

    <div class="component-card">
      <div class="form">
        <div class="campo">
          <label>ID:</label>
          <input
            v-model.number="idActualizar"
            type="number"
            placeholder="Ingrese ID"
          />
        </div>

        <div class="campo">
          <label>Nombre:</label>
          <input v-model="form.nombre" placeholder="Ingrese nombre" />
        </div>

        <div class="campo">
          <label>Apellido:</label>
          <input v-model="form.apellido" placeholder="Ingrese apellido" />
        </div>

        <div class="campo">
          <label>Género:</label>
          <select v-model="form.genero">
            <option value="">Seleccione género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        <div class="campo">
          <label>Provincia:</label>
          <input v-model="form.provincia" placeholder="Ingrese provincia" />
        </div>

        <div class="campo">
          <label>Fecha de Nacimiento:</label>
          <input v-model="form.fechaNacimiento" type="date" />
        </div>

        <button @click="ejecutar">Actualizar</button>
      </div>

      <div v-if="resultado" class="resultado">
        <h4>Estudiante Actualizado</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { actualizarFachada } from '@/clients/MateriaClients'

export default {
  name: 'ActualizarComponent',
  data() {
    return {
      idActualizar: null,
      form: {
        nombre: '',
        apellido: '',
        genero: '',
        provincia: '',
        fechaNacimiento: '',
      },
      resultado: null,
    }
  },
  methods: {
    async ejecutar() {
      const token = localStorage.getItem('token')
      const dataToSend = {
        ...this.form,
        fechaNacimiento: this.form.fechaNacimiento
          ? this.form.fechaNacimiento + 'T00:00:00'
          : '1994-12-12T00:00:00',
      }
      this.resultado = await actualizarFachada(
        this.idActualizar,
        dataToSend,
        token
      )
    },
  },
}
</script>

<style scoped>
.component-card {
  background: white;
  padding: 15px;
  border: 1px solid white;
  color: black;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.campo label {
  font-weight: bold;
  color: black;
}

button {
  background: #34a853;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

input,
select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.resultado {
  margin-top: 15px;
  padding: 10px;
  background: #e8f5e9;
  text-align: center;
}
</style>
