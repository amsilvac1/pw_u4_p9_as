import axios from 'axios'

const obtenerToken = async (usuario, password) => {
  const response = await axios.get('http://localhost:8082/auth/token', {
    params: {
      usuario: usuario,
      password: password,
    },
  })
  return response.data
}

export async function obtenerTokenFacade(usuario, password) {
  return await obtenerToken(usuario, password)
}
