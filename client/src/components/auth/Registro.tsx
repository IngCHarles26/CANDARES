import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { regEmail, regPass } from "../../assets/help";
import server, { baseUrlFront, postRoutes } from "../../api/api";
import { DataResponse } from "../../assets/types";
import { useNavigate } from "react-router-dom";

const initialData = {
  nombre:'',
  email:'',
  password:'',
  repite_password:'',
}

const errorList = {
  nameEmpty: 'El nombre no puede estar vacío',
  validEmail: 'El email ingresado no es válido',
  validPass: 'La contraseña debe contener una mayuscula, un numero y un caracter especial',
  equalPass: 'Las contraseñas no son iguales '
}

const infoForm = 'dataForm'

function Registro() {
  const [dataForm, setDataForm] = useState(initialData);
  const [errors, setErrors] = useState<String[]>([]);

  const nav = useNavigate()

  useEffect(() => {
    // si el formulario tubo errores y no fue enviado se recuperan los valores del local storage
    let inf = localStorage.getItem(infoForm)
    setDataForm(inf?.length ? {...JSON.parse(inf),password:'',repite_password:''} : initialData)
  }, []);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setDataForm({...dataForm,[name]:value})
    // guardamos los cambios en local storage
    localStorage.setItem(infoForm,JSON.stringify({nombre:dataForm.nombre,email:dataForm.email}))
    setErrors([])
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault();
    const {nombre,email,password,repite_password} = dataForm;

    // validacion de Formulario
    let mistakes:string[] = []
    if(!nombre.length) mistakes.push(errorList.nameEmpty)
    if(!regEmail.test(email)) mistakes.push(errorList.validEmail)
    if(!regPass.test(password)) mistakes.push(errorList.validPass)
    if(password != repite_password) mistakes.push(errorList.equalPass)

    // Si el array de errores contiene elementos corta la funcion de envio y setea los errores a mostrar
    if(mistakes.length) return setErrors(mistakes)

    try {
      const {data} = await server.post(postRoutes.registro,dataForm)
      const dataPost:DataResponse = data

      if(!dataPost.success){
        mistakes.push(dataPost.message)
        setErrors(mistakes)
      }else{
        // solo limpiamos el local storage cuando se ha enviado exitosamente la informacion
        localStorage.removeItem(infoForm)
        setDataForm(initialData)
        const msg = 'Hemos enviado un Email de confirmacion, presiona en el enlace'
        nav('/auth/mensaje/'+msg,{relative:'path'})
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (  
    <>
      <h2 className="text-center text-3xl font-extrabold">Crea una Cuenta</h2>

      <div
        className="max-w-md mx-auto my-10">
        {
          errors.map((el,ix)=>
            <p key={'error_'+ix}
              className="bg-red-600 text-white uppercase text-xs text-center p-2 mb-1 font-bold rounded-md">
                {el}
              </p>)
        }
      </div>


      <div 
        className="mt-8 mx-auto max-w-md rounded">
        <div 
          className="bg-white py-3 shadow px-4">
          <form onSubmit={handleSubmit} noValidate
            className="space-y-3">
            <div >
              <label htmlFor="nombre"
                className="block text-sm uppercase text-gray-500 mb-3 font-bold">Tu Nombre</label>
              <input name="nombre" id="nombre" placeholder="Tu Nombre" type="text"
                value={dataForm.nombre} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
            </div>

            <div>
              <label htmlFor="email"
                className="block text-sm uppercase text-gray-500 mb-3 font-bold">Email de Registro</label>
              <input name="email" id="email" placeholder="Tu Email" type="email"
                value={dataForm.email} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
            </div>

            <div>
              <label htmlFor="password"
                className="block text-sm uppercase text-gray-500 mb-3 font-bold">Password</label>
              <input name="password" id="password" placeholder="Tu Password" type="password"
                value={dataForm.password} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
            </div>

            <div>
              <label htmlFor="repite_password"
                className="block text-sm uppercase text-gray-500 mb-3 font-bold">Repetir Password</label>
              <input name="repite_password" id="repite_password" placeholder="Repite tu Password" type="password"
                value={dataForm.repite_password} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
            </div>

            <div
                className="flex items-center justify-between">
                <a href="/auth/login"
                  className="text-gray-500 text-xs">Inicia Sesion</a>
                <a href="/auth/olvide-password"
                  className="text-gray-500 text-xs">¿Olvidaste tu contraseña?</a>
              </div>

            <input type="submit" value='Crear Cuenta' 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 cursor-pointer font-bold rounded hover:font-extrabold"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registro;