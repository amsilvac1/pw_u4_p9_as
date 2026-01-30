<template>
  <button @click="consultarTodos">Consultar todos</button>
  <button @click="consultarPorId">Consultar por ID</button>
  <button @click="guardar">Guardar</button>
  <button @click="actualizar">Actualizar</button>
  <button @click="actualizarParcial">Actualizar Parcial</button>
  <button @click="eliminar">Eliminar</button>
</template>

<script>
import {
  consultarTodosFachada,
  consultarPorIdFachada,
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  eliminarFachada,
} from '@/clients/MateriaClients'
export default {
  methods: {
    async consultarTodos() {
      const estudiantes = await consultarTodosFachada()
      console.log(estudiantes)
    },
    async consultarPorId() {
      const estudiante = await consultarPorIdFachada(3)
      console.log(estudiante)
    },
    async guardar() {
      const nuevoEstudiante = {
        nombre: 'Blanca',
        apellido: 'Cajamarca',
        edad: 20,
      }
      const estudianteGuardado = await guardarFachada(nuevoEstudiante)
      console.log(estudianteGuardado)
    },
    async actualizar() {
      const estudianteActualizado = {
        nombre: 'Vladimir',
        fechaNacimiento: '1994-12-12T00:00:00',
        genero: 'Masculino',
        apellido: 'Moreno',
        provincia: 'Pichincha',
      }
      const estudiante = await actualizarFachada(6, estudianteActualizado)
      console.log(estudiante)
    },
    async actualizarParcial() {
      const datosParciales = {
        genero: 'Fmenino',
      }
      const estudiante = await actualizarParcialFachada(6, datosParciales)
      console.log(estudiante)
    },
    async eliminar() {
      await eliminarFachada(1)
      console.log('Estudiante eliminado')
    },
  },
}
</script>

<style></style>
