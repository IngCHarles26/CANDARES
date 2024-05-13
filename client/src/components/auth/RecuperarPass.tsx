function RecuperarPass() {

  
  return (
    <>
      <h2 
        className="text-center text-3xl font-extrabold">Recupera tu acceso a CANDARES</h2>

      <div 
        className="mt-8 mx-auto max-w-md rounded">
          <div 
            className="bg-white py-3 shadow px-4">
            <form action="" 
              className="space-y-3">

              <div>
                <label htmlFor="email"
                  className="block text-sm uppercase text-gray-500 mb-3 font-bold">Email de Registro</label>
                <input name="email" id="email" placeholder="Tu Email" type="email"
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