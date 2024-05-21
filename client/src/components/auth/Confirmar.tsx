import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import server, { baseUrlFront, getRoutes } from "../../api/api";

function Confirmar() {
  const {token} = useParams();
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    const peticion = async ()=>{
      const {data} = await server.get(getRoutes.confirmar+token)
      console.log(getRoutes.confirmar+token)
      setSuccess(data.success)
    }
    peticion()
  },[])

  console.log(success)
  return (
    <>
      <h2
        className="text-center text-2xl font-extrabold">CONFIRMA TU CUENTA</h2>


      <div
        className="bg-white shadow py-8 rounded-lg max-w-md mx-auto px-3 mt-3">
        <p
          className={(success?'bg-green-500':' bg-red-500 text-wrap') +' py-2 px-2 rounded-lg w-full font-bold text-center uppercase text-white'}>
            {
              success
                ? 'Su cuenta se confirmó correctamente'
                : 'Hubo un error al confirmar tu cuenta, intenta de nuevo'
            }
          </p>
          {
            success &&
            <a href={baseUrlFront+'/auth/login'}
              className="text-center font-bold text-sm text-slate-600 uppercase mt-10 block">
                Ya puedes iniciar sesion</a>
          }

      </div>
    </>
  );
}

export default Confirmar;