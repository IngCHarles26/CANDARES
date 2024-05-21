import { fullRoute, routes } from "../../routes";
import { useHeader } from "./hooks/useHeader";

function Login() {
  useHeader('Inicia Sesión')

  return (
    <div className="bg-white p-4 rounded shadow">

      <form className="space-y-5 flex flex-col items-center mb-5">

        <div className="space-y-2 w-full">
          <label htmlFor="email"
            className="text-sm uppercase text-gray-500 font-bold">Email de Registro</label>
          <input name='email' type='email' id='email' placeholder="Tu Email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
        </div>

        <div className="space-y-2 w-full">
          <label htmlFor="password"
            className="text-sm uppercase text-gray-500 font-bold">Contraseña</label>
          <input name='password' type='password' id='password' placeholder="Tu Contraseña" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400"/>
        </div>

        <input type="submit" value={'Iniciar Sesión'}
          className="w-1/2 uppercase bg-indigo-600 text-white py-3 cursor-pointer font-bold rounded
          hover:bg-indigo-700 hover:font-extrabold" />

      </form>

      <div className="flex justify-between">
        <a href={fullRoute.auth(routes.auth.register)}   className="text-md text-gray-500 underline">Registrate</a>
        <a href={fullRoute.auth(routes.auth.password)} className="text-md text-gray-500 underline">¿Olvidaste tu contraseña?</a>
      </div>

    </div>
    
  );
}

export default Login;