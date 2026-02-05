import axios from 'axios'

const URL = 'http://localhost:8082/auth/token?usuario=admin&password=admin123'

const obtenerToken = async () => {
  const response = await axios.get(URL)
  return response.data
}

export async function obtenerTokenFacade() {
  return await obtenerToken()
}
