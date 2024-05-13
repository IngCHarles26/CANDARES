import { genToken } from "../helpers/token";
import Usuario from "../models/Usuario";
import { Req, Res } from "../types/controllers";
import bcrypt from 'bcrypt';


//GET auth/login
export const login = (req:Req,res:Res)=>{ //GET
  return res.json({holi:'login chiii'})
}

//POST auth/registro
export const registrar = async (req:Req,res:Res)=>{

  let {email,nombre,password} = req.body

  try {

    const exist = await Usuario.findOne({where: {email}})

    if(exist) return res.status(200).send({success: false, message: 'El usuario ya está registrado'})

    const salt = await bcrypt.genSalt(10)

    password = await bcrypt.hash(password,salt)

    await Usuario.create({email,nombre,password,token:genToken()});

    return res.status(200).send({success: true, message: 'Registro exitoso'})
    
  } catch (error) {

    res.status(500).send({message:'Algo Fallo'})
  }
}
