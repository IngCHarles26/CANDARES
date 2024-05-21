import axios from "axios";

export const baseUrlFront = 'http://localhost:5173'

const baseURL = 'http://localhost:3001'
const timeout = 1000

const server = axios.create({
  baseURL,
  timeout
})

export const postRoutes = {
  registro: '/auth/registro',
  recupera: '/auth/olvide-pass',
}

export const getRoutes = {
  confirmar: '/auth/confirmar/'
}

export default server