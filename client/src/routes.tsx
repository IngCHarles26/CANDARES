import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import RecuperarPass from "./components/auth/RecuperarPass";


export const routes = {

}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth/',
        element: <Auth />,
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'registro',
            element: <Registro />
          },
          {
            path: 'olvide-password',
            element: <RecuperarPass />
          },
        ]
      }
    ]
  }
])