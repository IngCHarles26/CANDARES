import { FormEvent, useState } from "react";
import { regEmail } from "../../assets/help";
import server, { postRoutes } from "../../api/api";
import { DataResponse } from "../../assets/types";

function RecuperarPass() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!regEmail.test(email)) return console.log('ño')
    const  {data} = await server.post(postRoutes.recupera,{email})
    const dataPost:DataResponse = data
    
    if(!dataPost.success){

    }else{
      
    }
    
  }


  return (
    <>
      <h2 
        className="text-center text-3xl font-extrabold">Recupera tu acceso a CANDARES</h2>

      {!regEmail.test(email) &&
        <div
          className="max-w-md mx-auto my-10">
            <p 
                className="bg-red-600 text-white uppercase text-xs text-center p-2 mb-1 font-bold rounded-md">
              'El email ingresado no es valido'
            </p>
      </div>}

      <div 
        className="mt-8 mx-auto max-w-md rounded">
          <div 
            className="bg-white py-3 shadow px-4">
            <form action=""  onSubmit={handleSubmit}
              className="space-y-3">

              <div>
                <label htmlFor="email"
                  className="block text-sm uppercase text-gray-500 mb-3 font-bold">Email de Registro</label>
                <input name="email" id="email" placeholder="Tu Email" type="email" 
                  value={email} onChange={(e)=>{setEmail(e.target.value)}}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
              </div>

              <div
                className="flex items-center justify-between">
                <a href="/auth/login"
                  className="text-gray-500 text-xs">Inicia Sesion</a>
                <a href="/auth/registro"
                  className="text-gray-500 text-xs">Registrate</a>
              </div>

              <input type="submit" value='Enviar Instrucciones' 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 cursor-pointer font-bold rounded hover:font-extrabold"/>
            </form>
          </div>
        </div>
    </>
  );
}

export default RecuperarPass;