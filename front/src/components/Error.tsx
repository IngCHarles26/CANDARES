import { useNavigate } from "react-router-dom";
import { routes } from "../routes";


function Error() {
  const returnRoute = routes.auth.auth
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(returnRoute,{relative:'path'})
  }

  return (
    <section className="absolute grid w-full min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-700">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Una disculpa, la pagina que estas buscando no existe :) </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* <a href={routes.auth.auth} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">REGRESAR</a> */}
          <button onClick={handleClick}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            REGRESAR
          </button>
        </div>
      </div>
    </section>
  );
}

export default Error;