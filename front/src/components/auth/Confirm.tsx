import { fullRoute, routes } from "../../routes";
import { useHeader } from "./hooks/useHeader";

function Confirm() {
  useHeader('Confirmacion de Cuenta')
  const success = false
  const message = success ? 'Su cuenta se confirmó correctamente' : 'Hubo un error al confirmar la cuenta, intentalo nuevamente'



  return (
    <div className="bg-white p-4 rounded shadow">
      <p className={'text-center p-2 rounded-lg uppercase font-bold text-xl'}>{message}</p>
      {
        success &&
        <a href={fullRoute.auth(routes.auth.login)}
          className="block text-center font-bold text-sm uppercase mt-8 bg-indigo-500 text-white w-3/5 mx-auto rounded-md py-3">
            Ya puedes iniciar sesion
          </a>
      }

    </div>
  );
}

export default Confirm;