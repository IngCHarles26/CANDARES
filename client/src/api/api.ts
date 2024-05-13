import axios from "axios";

const baseURL = 'http://localhost:3001'
const timeout = 1000

const server = axios.create({
  baseURL,
  timeout
})

export const postRoutes = {
  registro: '/auth/registro'
}

export const getRoutes = {

}

export default server