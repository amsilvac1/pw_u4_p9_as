<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Entrar</button>
    <p v-if="mensaje" :class="{ error: esError }">{{ mensaje }}</p>
  </div>
</template>

<script>
import { obtenerTokenFacade } from '@/clients/AuthorizationClient'

export default {
  data() {
    return {
      usuario: '',
      password: '',
      mensaje: '',
      esError: false,
    }
  },
  methods: {
    async login() {
      console.log('Intentando login con usuario:', this.usuario)

      if (!this.usuario || !this.password) {
        this.mensaje = 'Por favor ingrese usuario y contraseña'
        this.esError = true
        return
      }

      const tokenData = await obtenerTokenFacade(this.usuario, this.password)

      console.log('Token recibido:', tokenData)

      if (tokenData && tokenData.accessToken) {
        console.log('✅ Login exitoso, guardando token')
        localStorage.setItem('token', tokenData.accessToken)
        localStorage.setItem('estaAutenticado', 'true')
        this.mensaje = 'Login exitoso'
        this.esError = false

        setTimeout(() => {
          this.$router.push({ name: 'consultarTodos' })
        }, 1000)
      } else {
        console.log('❌ Error: Token no válido o credenciales incorrectas')
        this.mensaje = 'Usuario o contraseña incorrectos'
        this.esError = true
        localStorage.removeItem('token')
        localStorage.removeItem('estaAutenticado')
      }
    },
  },
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  background-color: rgb(22, 42, 43);
  gap: 20px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border: 1px solid hsla(160, 100%, 37%, 1);
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
}

button {
  padding: 10px;
  border: none;
  background-color: rgb(16, 127, 218);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(14, 110, 190);
}

p {
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin: 0;
}

p.error {
  background-color: #ffebee;
  color: #d32f2f;
}

p:not(.error) {
  background-color: #e8f5e9;
  color: #2e7d32;
}
</style>
