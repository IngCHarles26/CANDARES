import { useParams } from "react-router-dom";

function Mensaje() {
  const {mensaje} = useParams()
  return (
    <>
      <h2 
        className="text-center text-3xl font-extrabold">Cuenta creada Correctamente</h2>
      <p
        className="text-xl font-bold text-center my-10">{mensaje}</p>
      
    </>
   );
}

export default Mensaje;