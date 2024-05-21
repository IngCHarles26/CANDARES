import nodemailer from 'nodemailer'

const baseRouteFront = process.env.FRONTEND_URL || ''
const route = process.env.ROUTE_URL || ''


// @ts-ignore
const port:number = +process.env.EMAIL_PORT;

export const emailRegistro = async (nombre:string,email:string,token:string)=>{
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });


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

type Tipo = 'registro' | 'recuperar-pass'

export const sendMail = async (nombre:string,email:string,token:string,tipo:Tipo)=>{
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const from = 'CANDARES'
  const to = email
  const subject = {
    registro: 'CONFIRMA TU CUENTA EN CANDARES.com',
    'recuperar-pass': 'RESTABLECE TU PASSWORD EN CANDARES.com',
  }[tipo]
  const text = subject
  
}
