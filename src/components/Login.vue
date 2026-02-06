<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      password: '',
    }
  },
  methods: {
    // Aquí podrías agregar métodos para manejar el login
    login() {
      //mandar a obtener el token
      const TOKEN =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDMzNjU0MSwiZXhwIjoxNzcwMzQwMTQxLCJqdGkiOiI4MzVlMmZmNi04YTQ4LTRkNWMtYjVlMC1jYTdiMTI0ZDg2ZWMifQ.kLoGatMB6iaLwROUTpasLrNOsm5w4v2JYbCVGJFymVhIxO_wLAOsCvHdcvkIX7LNKts_vsW_IRVcWL7nO4WXImp34k9E4njcTbX9O-dWSPiDYDSndFOsjZFWM9aOJihSSaOi_DuLc3ZPdzkkgKPZ4UTfnxHFCp-e-GU-kcYuc76JMBeMQwXnukWatp6ARcUNyudizOD7_s1s2Op6wKzSY98I5Z9L83mxgivPf6-7xnjdNnphyE71NOKXTJXRjiOnzGtf7Alllx2Gtkvg25boEQZjqnoizceKVvLwJ3VEC0Np6SbrKxiaMKChGtuggcmihIpdHDEAL4LaTQthsCAxog'
      if (TOKEN != null) {
        // Guardar el token en localStorage para usarlo en futuras solicitudes
        localStorage.setItem('token', TOKEN)
        localStorage.setItem('estaAutenticado', true)
      } else {
        console.log('Error de autenticación')
      }
    },
  },
}
</script>

<style>
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
</style>
