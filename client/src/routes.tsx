import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/Login";


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
          }
        ]
      }
    ]
  }
])