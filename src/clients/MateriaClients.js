import axios from 'axios'

const URL = 'http://localhost:8081/matricula/api/v1.0/estudiantes'

const consultarTodos = (token) => {
  const data = axios
    .get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data)
  return data
}

const consultarPorId = (id, token) => {
  const data = axios
    .get(`${URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data)
  return data
}

const guardar = (body, token) => {
  //data es lo que recibe desde el body
  /* const objeto = {
        nombre:Angelo,
        apellido: Silva
  } */
  const data = axios
    .post(URL, body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data)
  return data
}

const actualizar = (id, body, token) => {
  const data = axios
    .put(`${URL}/${id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data)
  return data
}

const actualizarParcial = (id, body, token) => {
  const data = axios
    .patch(`${URL}/${id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data)
  return data
}

const eliminar = (id, token) => {
  axios
    .delete(`${URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((r) => r.data)
}

export async function consultarTodosFachada(token) {
  return await consultarTodos(token)
}

export async function consultarPorIdFachada(id, token) {
  return await consultarPorId(id, token)
}
export async function guardarFachada(body, token) {
  return await guardar(body, token)
}
export async function actualizarFachada(id, body, token) {
  return await actualizar(id, body, token)
}
export async function actualizarParcialFachada(id, body, token) {
  return await actualizarParcial(id, body, token)
}
export async function eliminarFachada(id, token) {
  await eliminar(id, token)
}
