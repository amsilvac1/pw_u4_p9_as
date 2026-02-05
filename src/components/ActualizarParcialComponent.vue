<template>
  <div>
    <h2>Actualizar Parcial</h2>

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
          <label>Nombre (opcional):</label>
          <input v-model="form.nombre" placeholder="Ingrese nombre" />
        </div>

        <div class="campo">
          <label>Apellido (opcional):</label>
          <input v-model="form.apellido" placeholder="Ingrese apellido" />
        </div>

        <div class="campo">
          <label>Género (opcional):</label>
          <select v-model="form.genero">
            <option value="">Seleccione género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        <div class="campo">
          <label>Provincia (opcional):</label>
          <input v-model="form.provincia" placeholder="Ingrese provincia" />
        </div>

        <div class="campo">
          <label>Fecha de Nacimiento (opcional):</label>
          <input v-model="form.fechaNacimiento" type="date" />
        </div>

        <button @click="ejecutar">Actualizar Campos</button>
      </div>

      <div v-if="resultado" class="resultado">
        <h4>Estudiante Actualizado</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { actualizarParcialFachada } from '@/clients/MateriaClients'

export default {
  name: 'ActualizarParcialComponent',
  inject: ['getToken'],
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
      resultado: false,
    }
  },
  methods: {
    async ejecutar() {
      const token = this.getToken()
      const dataToSend = {}

      if (this.form.nombre && this.form.nombre.trim() !== '') {
        dataToSend.nombre = this.form.nombre
      }
      if (this.form.apellido && this.form.apellido.trim() !== '') {
        dataToSend.apellido = this.form.apellido
      }
      if (this.form.genero && this.form.genero !== '') {
        dataToSend.genero = this.form.genero
      }
      if (this.form.provincia && this.form.provincia.trim() !== '') {
        dataToSend.provincia = this.form.provincia
      }
      if (this.form.fechaNacimiento && this.form.fechaNacimiento !== '') {
        dataToSend.fechaNacimiento = this.form.fechaNacimiento + 'T00:00:00'
      }

      if (Object.keys(dataToSend).length === 0) {
        alert('Debe ingresar al menos un campo para actualizar')
        return
      }

      await actualizarParcialFachada(this.idActualizar, dataToSend, token)
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
