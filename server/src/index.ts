import express from 'express'
import userRoutes from './routes/userRoutes'


const PORT = process.env.SERVER_PORT
const server = express()

// routes
server.use('/',userRoutes)



//iniciando el servidor
server.listen(PORT,()=>{
  console.log(`Server running on port: ${PORT} chupala layme`)
})

