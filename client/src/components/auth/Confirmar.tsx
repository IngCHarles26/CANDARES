import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import server, { getRoutes } from "../../api/api";

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
        className="bg-white shadow py-8 rounded-lg max-w-md mx-auto">
        <p
          className={(success?'bg-green-500':' bg-red-500') +' mx-2 py-2 px-5 rounded-lg w-full font-bold text-center'}>
            {
              success
                ? 'Su cuenta se confirmó correctamente'
                : 'Hubo un problema, comunicate con el administrador'
            }
          </p>

      </div>
    </>
  );
}

export default Confirmar;