import express from 'express'
import userRoutes from './routes/userRoutes'
import db from './config/db'
import cors from 'cors'

const PORT = process.env.SERVER_PORT
const server = express();

// DB conection(
async function DBconection(){
  try{
    await db.authenticate();
    db.sync()
    console.log('data base conected')
  }catch(err){
    console.log(err)
  }
}
DBconection()


server.use(express.json())
//cors
server.use(cors({
  origin:['http://localhost:5173']
}))

// routes
server.use('/auth',userRoutes)



//iniciando el servidor
server.listen(PORT,()=>{
  console.log(`Server running on port: ${PORT}`)
})
