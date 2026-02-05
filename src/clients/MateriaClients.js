import axios from 'axios'

const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDI0ODQwNCwiZXhwIjoxNzcwMjUyMDA0LCJqdGkiOiI4N2M3YjdiOS1mNzI4LTQyMjgtOGQwYi1hOGI1YWNjNTcxZmEifQ.PAVkvWZYQm-LBl89FRCUFVIh-Xz2weapxV1UOOzt8bavJzR3Mjza0Ds1IEMt06QmtHoXa2Kz9CAJpwyKNMCkeUHyjy0iQ8biO6g_vWSZY5k9QXL5vvd1-tHfWwbwPS0GKC336rBxqzEUMC8OtVj3MWRWI44Gsm6i_w-2U55X6ui9wgtkopvQ_XuIE_vkDFnLUtgPhXBJtWFImli1HSJO6Sf-fKJflTfsULnXqiDSMtpuiVIc4P0NjZSWoeh25aUD6wQUQ6Y-S39rZfEv-ddpzwUt4vwpVev9O-ZxiQSJ8ymCL273V3ExeLu0CKPokDJSEP9xp7IoVLUKroVDOaWcfQ'

const consultarTodos = () => {
  const data = axios
    .get('http://localhost:8081/matricula/api/v1.0/estudiantes', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then((r) => r.data)
  return data
}

const consultarPorId = (id) => {
  const data = axios
    .get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then((r) => r.data)
  return data
}

const guardar = (body) => {
  //data es lo que recibe desde el body
  /* const objeto = {
        nombre:Angelo,
        apellido: Silva
  } */
  const data = axios
    .post('http://localhost:8081/matricula/api/v1.0/estudiantes', body, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then((r) => r.data)
  return data
}

const actualizar = (id, body) => {
  const data = axios
    .put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then((r) => r.data)
  return data
}

const actualizarParcial = (id, body) => {
  const data = axios
    .patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then((r) => r.data)
  return data
}

const eliminar = (id) => {
  axios
    .delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
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
