import axios from 'axios'

const consultarTodos = () => {
  const data = axios
    .get('http://localhost:8081/matricula/api/v1.0/estudiantes')
    .then((r) => r.data)
  return data
}

const consultarPorId = (id) => {
  const data = axios
    .get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
    .then((r) => r.data)
  return data
}

const guardar = (body) => {
  /* const objeto = {
        nombre:Angelo,
        apellido: Silva
  } */
  const data = axios
    .post('http://localhost:8081/matricula/api/v1.0/estudiantes', body)
    .then((r) => r.data)
  return data
}

const actualizar = (id, body) => {
  const data = axios
    .put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body)
    .then((r) => r.data)
  return data
}

const actualizarParcial = (id, body) => {
  const data = axios
    .patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body)
    .then((r) => r.data)
  return data
}

const eliminar = (id) => {
  axios
    .delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
    .then((r) => r.data)
}

export async function consultarTodosFachada() {
  return await consultarTodos()
}

export async function consultarPorIdFachada(id) {
  return await consultarPorId(id)
}
export async function guardarFachada(body) {
  return await guardar(body)
}
export async function actualizarFachada(id, body) {
  return await actualizar(id, body)
}
export async function actualizarParcialFachada(id, body) {
  return await actualizarParcial(id, body)
}
export async function eliminarFachada(id) {
  await eliminar(id)
}
