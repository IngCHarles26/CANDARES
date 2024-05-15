import nodemailer from 'nodemailer'

const baseRouteFront = process.env.FRONTEND_URL || ''
const route = process.env.ROUTE_URL || ''

interface Datos {
  nombre: string,
  email: string,
  token: string
}

// @ts-ignore
const port:number = +process.env.EMAIL_PORT;

export const emailRegistro = async (datos:Datos)=>{
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const {email,nombre,token} = datos

  await transport.sendMail({
    from: 'CANDARES',
    to: email,
    subject: 'CONFIRMA TU CUENTA EN CANDARES.com',
    text: 'CONFIRMA TU CUENTA EN CANDARES.com',
    html: `
      <p>Hola ${nombre}, comprueba tu cuenta en CANDARES.com </p>
      
      <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
      
      <a href="${baseRouteFront+route+token}"> Confirmar cuenta </a> </p>
      
      <p>Si no creaste la cuenta, puedes ignorar el mensaje</p>
    `
  })
}
