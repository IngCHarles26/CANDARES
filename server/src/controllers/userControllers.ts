import { emailRegistro } from "../helpers/email";
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
    // buscamos si el email ya se encuentra registrado
    const exist = await Usuario.findOne({where: {email}})
    if(exist) return res.status(200).send({success: false, message: 'El usuario ya está registrado'})

    // encriptamos la contraseña y generamos el token
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    const token = genToken()

    // creamos el usuario y le enviamos el email de confirmaicon
    await Usuario.create({email,nombre,password,token});
    emailRegistro({email,nombre,token})

    // terminamos con el controller
    return res.status(200).send({success: true, message: 'Registro exitoso'})
    
  } catch (error) {

    res.status(500).send({success: false,message:'Algo Fallo'})

  }
}

export const confirmar = async (req:Req,res:Res)=>{

  const {token} = req.params

  try {
    
    // verificar que el token es valido
    let usuario:Usuario | null  = await Usuario.findOne({where:{token}})

    if(!usuario) return res.status(200).send({success: false, message: 'Usuario no encontrado'})
    // confirmar la cuenta

    usuario.token = null
    usuario.confirmado = true
    await usuario.save()

    res.status(200).send({success: true, message: 'Usuario encontrado'})


  } catch (error) {
    res.status(500).send(error)
  }


}